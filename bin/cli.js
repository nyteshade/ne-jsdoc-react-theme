#!/usr/bin/env node
'use strict';

const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// ── SGR/CSI helpers ──────────────────────────────────────

const isTTY = process.stderr.isTTY;

const sgr = {
  reset:   isTTY ? '\x1b[0m'  : '',
  bold:    isTTY ? '\x1b[1m'  : '',
  dim:     isTTY ? '\x1b[2m'  : '',
  italic:  isTTY ? '\x1b[3m'  : '',
  red:     isTTY ? '\x1b[31m' : '',
  green:   isTTY ? '\x1b[32m' : '',
  yellow:  isTTY ? '\x1b[33m' : '',
  blue:    isTTY ? '\x1b[34m' : '',
  magenta: isTTY ? '\x1b[35m' : '',
  cyan:    isTTY ? '\x1b[36m' : '',
  gray:    isTTY ? '\x1b[90m' : '',
};

// Erase current line and move cursor to start
const clearLine = isTTY ? '\x1b[2K\r' : '';

function status(msg) {
  if (quiet) return;
  if (isTTY) {
    process.stderr.write(clearLine + sgr.cyan + '  ● ' + sgr.reset + msg);
  }
}

function step(label, detail) {
  if (quiet) return;
  process.stderr.write(
    (isTTY ? clearLine : '') +
    sgr.green + '  ✓ ' + sgr.reset + sgr.bold + label + sgr.reset +
    (detail ? sgr.gray + ' ' + detail + sgr.reset : '') + '\n'
  );
}

function warn(msg) {
  if (quiet) return;
  process.stderr.write(
    sgr.yellow + '  ⚠ ' + sgr.reset + msg + '\n'
  );
}

function fail(msg) {
  process.stderr.write(
    sgr.red + '  ✖ ' + sgr.reset + sgr.bold + msg + sgr.reset + '\n'
  );
}

function info(msg) {
  if (quiet) return;
  process.stderr.write(
    sgr.gray + '  ' + msg + sgr.reset + '\n'
  );
}

// ── Argument parsing ─────────────────────────────────────

const args = process.argv.slice(2);
const sources = [];
let output = 'docs';
let readme = null;
let configFile = null;
let quiet = false;
let verbose = false;

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '-o':
    case '--output':
      output = args[++i];
      break;
    case '-r':
    case '--readme':
      readme = args[++i];
      break;
    case '-c':
    case '--config':
      configFile = args[++i];
      break;
    case '-q':
    case '--quiet':
      quiet = true;
      break;
    case '-v':
    case '--verbose':
      verbose = true;
      break;
    case '-h':
    case '--help':
      printHelp();
      process.exit(0);
      break;
    case '--version':
      printVersion();
      process.exit(0);
      break;
    default:
      if (!args[i].startsWith('-')) {
        sources.push(args[i]);
      } else {
        fail('Unknown option: ' + args[i]);
        process.exit(2);
      }
  }
}

if (sources.length === 0 && !configFile) {
  fail('No source files or directories specified.');
  if (!quiet) {
    process.stderr.write('\n');
    printHelp();
  }
  process.exit(2);
}

// ── Validate inputs ──────────────────────────────────────

for (const src of sources) {
  if (!fs.existsSync(src)) {
    fail('Source path not found: ' + src);
    process.exit(2);
  }
}

if (configFile && !fs.existsSync(configFile)) {
  fail('Config file not found: ' + configFile);
  process.exit(2);
}

// ── Header ───────────────────────────────────────────────

if (!quiet) {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  process.stderr.write(
    '\n' + sgr.bold + '  jsdoc-react' + sgr.reset +
    sgr.gray + ' v' + pkg.version + sgr.reset + '\n\n'
  );
}

// ── Auto-detect README ───────────────────────────────────

if (!readme) {
  for (const name of ['README.md', 'readme.md', 'Readme.md', 'README.markdown']) {
    if (fs.existsSync(name)) {
      readme = name;
      break;
    }
  }
}

if (readme) {
  step('README', readme);
}

// ── Discover source files ────────────────────────────────

status('Scanning sources...');

let sourceCount = 0;
for (const src of sources) {
  try {
    const stat = fs.statSync(path.resolve(src));
    if (stat.isDirectory()) {
      sourceCount += countFiles(path.resolve(src));
    } else {
      sourceCount++;
    }
  } catch (_) {}
}

step('Sources', sourceCount + ' file' + (sourceCount !== 1 ? 's' : '') +
  ' from ' + sources.join(', '));

// ── Build JSDoc config ───────────────────────────────────

status('Configuring JSDoc...');

const templatePath = path.resolve(__dirname, '..');
let tmpConfig;

if (configFile) {
  let userConfig;
  try {
    userConfig = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  } catch (err) {
    fail('Invalid config JSON: ' + err.message);
    process.exit(2);
  }
  userConfig.opts = userConfig.opts || {};
  userConfig.opts.template = templatePath;
  if (!userConfig.opts.destination) userConfig.opts.destination = path.resolve(output);
  if (readme && !userConfig.opts.readme) userConfig.opts.readme = path.resolve(readme);

  tmpConfig = path.join(os.tmpdir(), 'jsdoc-react-' + Date.now() + '.json');
  fs.writeFileSync(tmpConfig, JSON.stringify(userConfig, null, 2));
  step('Config', 'merged from ' + configFile);
} else {
  const config = {
    source: {
      include: sources.map(s => path.resolve(s)),
      includePattern: '.+\\.(js|jsx|mjs|cjs)$',
    },
    opts: {
      destination: path.resolve(output),
      template: templatePath,
      recurse: true,
    },
    plugins: ['plugins/markdown'],
  };
  if (readme) config.opts.readme = path.resolve(readme);

  tmpConfig = path.join(os.tmpdir(), 'jsdoc-react-' + Date.now() + '.json');
  fs.writeFileSync(tmpConfig, JSON.stringify(config, null, 2));
  step('Config', 'auto-generated');
}

// ── Run JSDoc ────────────────────────────────────────────

status('Running JSDoc...');

const jsdocBin = require.resolve('jsdoc/jsdoc.js', { paths: [templatePath] });
const startTime = Date.now();

try {
  const result = execFileSync(process.execPath, [jsdocBin, '-c', tmpConfig], {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    env: { ...process.env, JSDOC_REACT_QUIET: quiet ? '1' : '' },
  });

  const elapsed = Date.now() - startTime;

  // Clean up temp config
  try { fs.unlinkSync(tmpConfig); } catch (_) {}

  // Count output files
  const outDir = path.resolve(output);
  let outFiles = 0;
  try {
    outFiles = fs.readdirSync(outDir).length;
  } catch (_) {}

  step('Generated', outFiles + ' files in ' + formatDuration(elapsed));

  // Show output path (use absolute if relative would go above cwd)
  const relOut = path.relative(process.cwd(), outDir);
  const displayOut = relOut.startsWith('..') ? outDir : './' + relOut;
  if (!quiet) {
    process.stderr.write('\n');
    process.stderr.write(
      sgr.bold + sgr.green + '  Done!' + sgr.reset + ' Documentation at ' +
      sgr.bold + displayOut + '/' + sgr.reset + '\n\n'
    );
  }

  // Print path to stdout for scripting (e.g., `open $(jsdoc-react src/)`)
  process.stdout.write(path.resolve(outDir, 'index.html') + '\n');
  process.exit(0);

} catch (err) {
  // Clean up temp config
  try { fs.unlinkSync(tmpConfig); } catch (_) {}

  const elapsed = Date.now() - startTime;

  // Parse JSDoc stderr for useful messages
  const stderr = (err.stderr || '').toString();
  const stdout = (err.stdout || '').toString();

  // Extract ERROR lines
  const errorLines = stderr.split('\n')
    .concat(stdout.split('\n'))
    .filter(l => l.includes('ERROR:') || l.includes('TypeError') || l.includes('Error:'));

  // Show type expression parse errors as warnings (they're non-fatal in JSDoc
  // but become fatal if they crash our template)
  const parseErrors = [];
  const fatalErrors = [];

  for (const line of errorLines) {
    if (line.includes('Unable to parse a tag')) {
      parseErrors.push(line);
    } else if (line.trim()) {
      fatalErrors.push(line);
    }
  }

  if (isTTY) process.stderr.write(clearLine);

  if (parseErrors.length > 0 && !quiet) {
    warn(parseErrors.length + ' type expression warning' +
      (parseErrors.length !== 1 ? 's' : '') + ' (invalid JSDoc syntax)');
    if (verbose) {
      for (const pe of parseErrors) {
        const match = pe.match(/source file (.+?) in line (\d+)/);
        if (match) {
          info(sgr.yellow + path.basename(match[1]) + ':' + match[2] + sgr.reset);
        }
      }
    } else if (parseErrors.length > 0) {
      info('Run with -v to see details');
    }
  }

  if (fatalErrors.length > 0) {
    fail('JSDoc failed after ' + formatDuration(elapsed));
    if (!quiet) {
      for (const fe of fatalErrors) {
        process.stderr.write('    ' + sgr.dim + fe.trim() + sgr.reset + '\n');
      }
    }
    process.exit(1);
  }

  // If we got parse errors but no fatal errors, check if output was still generated
  const outDir = path.resolve(output);
  if (fs.existsSync(path.join(outDir, 'index.html'))) {
    // JSDoc exited non-zero due to parse warnings but output was generated
    step('Generated', 'with warnings in ' + formatDuration(elapsed));

    const relOut = path.relative(process.cwd(), outDir);
    const displayOut = relOut.startsWith('..') ? outDir : './' + relOut;
    if (!quiet) {
      process.stderr.write('\n');
      process.stderr.write(
        sgr.bold + sgr.yellow + '  Done' + sgr.reset +
        sgr.yellow + ' (with warnings)' + sgr.reset +
        ' Documentation at ' + sgr.bold + displayOut + '/' + sgr.reset + '\n\n'
      );
    }
    process.stdout.write(path.resolve(outDir, 'index.html') + '\n');
    process.exit(0);
  }

  fail('Generation failed after ' + formatDuration(elapsed));
  if (verbose && stderr) {
    process.stderr.write('\n' + sgr.dim + stderr.trim() + sgr.reset + '\n');
  }
  process.exit(1);
}

// ── Helpers ──────────────────────────────────────────────

function countFiles(dir) {
  let count = 0;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === 'dist' ||
          entry.name === 'build' || entry.name.startsWith('.')) continue;
      if (entry.isDirectory()) {
        count += countFiles(path.join(dir, entry.name));
      } else if (/\.(js|jsx|mjs|cjs)$/.test(entry.name)) {
        count++;
      }
    }
  } catch (_) {}
  return count;
}

function formatDuration(ms) {
  if (ms < 1000) return ms + 'ms';
  return (ms / 1000).toFixed(1) + 's';
}

function printVersion() {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  process.stdout.write(pkg.version + '\n');
}

function printHelp() {
  process.stderr.write([
    '',
    '  ' + sgr.bold + 'jsdoc-react' + sgr.reset + ' — Generate beautiful documentation',
    '',
    '  ' + sgr.bold + 'USAGE' + sgr.reset,
    '    jsdoc-react <source-dirs...> [options]',
    '',
    '  ' + sgr.bold + 'OPTIONS' + sgr.reset,
    '    -o, --output <dir>    Output directory (default: docs)',
    '    -r, --readme <file>   README file to include',
    '    -c, --config <file>   Custom jsdoc config (theme auto-applied)',
    '    -q, --quiet           Suppress all output except errors',
    '    -v, --verbose         Show detailed warnings and debug info',
    '        --version         Print version',
    '    -h, --help            Show this help',
    '',
    '  ' + sgr.bold + 'EXAMPLES' + sgr.reset,
    '    jsdoc-react src/',
    '    jsdoc-react src/ lib/ -o api-docs',
    '    jsdoc-react src/ -r README.md -o docs',
    '    jsdoc-react -c jsdoc.json',
    '    open $(jsdoc-react src/ -q)',
    '',
  ].join('\n'));
}
