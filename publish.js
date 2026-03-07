'use strict';

const path = require('path');
const fs = require('fs');
const helper = require('jsdoc/util/templateHelper');
const { processDoclets } = require('./src/process');

exports.publish = function (taffyData, opts) {
  const outDir = path.normalize(opts.destination);
  fs.mkdirSync(outDir, { recursive: true });

  // Prune undocumented, sort
  const data = helper.prune(taffyData);
  data.sort('longname, version, since');
  helper.addEventListeners(data);

  // First pass to register links for {@link} resolution
  const initial = processDoclets(data);
  for (const page of initial.pages) {
    if (page.doclet) {
      helper.registerLink(page.doclet.longname, '#' + page.slug);
    }
  }

  // Resolve {@link} tags in all text fields
  data().each(function (doclet) {
    ['description', 'classdesc', 'summary'].forEach(function (field) {
      if (doclet[field]) {
        doclet[field] = helper.resolveLinks(doclet[field]);
      }
    });
    if (doclet.params) {
      doclet.params.forEach(function (p) {
        if (p.description) p.description = helper.resolveLinks(p.description);
      });
    }
    if (doclet.properties) {
      doclet.properties.forEach(function (p) {
        if (p.description) p.description = helper.resolveLinks(p.description);
      });
    }
    if (doclet.returns) {
      doclet.returns.forEach(function (r) {
        if (r.description) r.description = helper.resolveLinks(r.description);
      });
    }
    if (doclet.exceptions) {
      doclet.exceptions.forEach(function (e) {
        if (e.description) e.description = helper.resolveLinks(e.description);
      });
    }
    if (doclet.see) {
      doclet.see = doclet.see.map(function (s) { return helper.resolveLinks(s); });
    }
    if (doclet.examples) {
      doclet.examples = doclet.examples.map(function (e) { return helper.resolveLinks(e); });
    }
  });

  // Read and render README
  let readme = '';
  if (opts.readme) {
    const { marked } = require('marked');
    const hljs = require('highlight.js');

    marked.setOptions({
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
    });

    readme = marked.parse(fs.readFileSync(opts.readme, 'utf8'));
  }

  // Re-process after link resolution to get final data
  const processed = processDoclets(data);
  const jsonData = JSON.stringify({
    packageInfo: processed.packageInfo
      ? { name: processed.packageInfo.name, version: processed.packageInfo.version }
      : null,
    nav: processed.nav,
    pages: processed.pages,
    readme: readme,
  });

  // Copy bundled React app assets
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(path.join(distDir, 'index.js'))) {
    console.error(
      'Error: dist/ not found. Run "npm run build" in the jsdoc-react-theme directory first.'
    );
    process.exit(1);
  }

  // Copy JS and CSS bundles
  for (const file of fs.readdirSync(distDir)) {
    fs.copyFileSync(path.join(distDir, file), path.join(outDir, file));
  }

  // Generate index.html
  const projectName = processed.packageInfo ? processed.packageInfo.name || 'API Docs' : 'API Docs';
  const cssLink = fs.existsSync(path.join(distDir, 'index.css'))
    ? '<link rel="stylesheet" href="index.css">'
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(projectName)} — Documentation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  ${cssLink}
</head>
<body>
  <div id="root"></div>
  <script>window.__JSDOC_DATA__=${jsonData};</script>
  <script src="index.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
