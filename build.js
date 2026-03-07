const esbuild = require('esbuild');
const path = require('path');

const isMinify = process.argv.includes('--minify');
const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: [path.join(__dirname, 'src/index.jsx')],
  bundle: true,
  outdir: path.join(__dirname, 'dist'),
  format: 'iife',
  jsx: 'automatic',
  target: ['es2020'],
  minify: isMinify,
  sourcemap: !isMinify,
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  loader: {
    '.css': 'css',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.svg': 'dataurl',
  },
  external: [],
};

async function build() {
  if (isWatch) {
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    console.log('Watching for changes...');
  } else {
    await esbuild.build(buildOptions);
    console.log('Build complete → dist/');
  }
}

build().catch(() => process.exit(1));
