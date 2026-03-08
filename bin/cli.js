#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const args = process.argv.slice(2);
const sources = [];
let output = 'docs';
let readme = null;
let configFile = null;

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
    case '-h':
    case '--help':
      printHelp();
      process.exit(0);
      break;
    default:
      if (!args[i].startsWith('-')) {
        sources.push(args[i]);
      }
  }
}

if (sources.length === 0 && !configFile) {
  console.error('Error: No source files or directories specified.\n');
  printHelp();
  process.exit(1);
}

// Auto-detect README
if (!readme) {
  for (const name of ['README.md', 'readme.md', 'Readme.md', 'README.markdown']) {
    if (fs.existsSync(name)) {
      readme = name;
      break;
    }
  }
}

const templatePath = path.resolve(__dirname, '..');

// If user provides a jsdoc config, merge our template into it
if (configFile) {
  const userConfig = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  userConfig.opts = userConfig.opts || {};
  userConfig.opts.template = templatePath;
  if (!userConfig.opts.destination) userConfig.opts.destination = path.resolve(output);
  if (readme && !userConfig.opts.readme) userConfig.opts.readme = path.resolve(readme);

  const tmpConfig = path.join(os.tmpdir(), `jsdoc-react-${Date.now()}.json`);
  fs.writeFileSync(tmpConfig, JSON.stringify(userConfig, null, 2));
  run(tmpConfig);
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

  const tmpConfig = path.join(os.tmpdir(), `jsdoc-react-${Date.now()}.json`);
  fs.writeFileSync(tmpConfig, JSON.stringify(config, null, 2));
  run(tmpConfig);
}

function run(configPath) {
  const jsdocBin = require.resolve('jsdoc/jsdoc.js', { paths: [path.resolve(__dirname, '..')] });
  try {
    execSync(`"${jsdocBin}" -c "${configPath}"`, { stdio: 'inherit' });
    console.log(`\n  Documentation generated at ./${path.relative(process.cwd(), path.resolve(output))}/\n`);
  } catch (err) {
    process.exit(1);
  } finally {
    try { fs.unlinkSync(configPath); } catch (_) {}
  }
}

function printHelp() {
  console.log(`
  jsdoc-react - Generate beautiful documentation

  Usage:
    jsdoc-react <source-dirs...> [options]

  Options:
    -o, --output <dir>    Output directory (default: docs)
    -r, --readme <file>   README file to include
    -c, --config <file>   Custom jsdoc config (theme will be auto-applied)
    -h, --help            Show this help

  Examples:
    jsdoc-react src/
    jsdoc-react src/ lib/ -o api-docs
    jsdoc-react src/ -r README.md -o docs
    jsdoc-react -c jsdoc.json
`);
}
