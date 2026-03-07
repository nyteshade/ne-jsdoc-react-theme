import { useMemo } from 'react';
import { Box, Flex, Text, Badge, Card, Table, Code, Separator } from '@radix-ui/themes';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', bash);

function highlightCode(code, lang) {
  try {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  } catch (_) {
    return code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

function Signature({ doclet, isConstructor }) {
  if (doclet.kind !== 'function' && !isConstructor) return null;

  const params = (doclet.params || [])
    .filter(p => p.name && !p.name.includes('.'))
    .map(p => {
      let str = '';
      if (p.variable) str += '...';
      str += p.name;
      if (p.optional) str += '?';
      if (p.type) str += ': ' + p.type.join(' | ');
      return str;
    });

  const name = isConstructor ? `new ${doclet.name}` : doclet.name;
  const ret = doclet.returns?.[0]?.type
    ? ` → ${doclet.returns[0].type.join(' | ')}`
    : '';

  return (
    <Box className="signature-block" my="3">
      <Code size="2" className="signature-code">
        {name}({params.join(', ')}){ret}
      </Code>
    </Box>
  );
}

function ParamsTable({ params }) {
  if (!params || params.length === 0) return null;

  return (
    <Box mt="3">
      <Text size="2" weight="medium" color="gray" mb="2" className="subsection-label">
        Parameters
      </Text>
      <Table.Root variant="surface" size="1">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {params.map((p, i) => (
            <Table.Row key={p.name + '-' + i}>
              <Table.Cell>
                <Flex align="center" gap="1">
                  <Code size="1" variant="ghost">{p.name}</Code>
                  {p.optional && <Badge size="1" variant="surface" color="gray">opt</Badge>}
                  {p.variable && <Badge size="1" variant="surface" color="plum">rest</Badge>}
                </Flex>
              </Table.Cell>
              <Table.Cell>
                {p.type ? (
                  <Flex gap="1" wrap="wrap">
                    {p.type.map((t, j) => (
                      <Badge key={j} variant="soft" color="red" size="1">{t}</Badge>
                    ))}
                  </Flex>
                ) : (
                  <Text size="1" color="gray">*</Text>
                )}
              </Table.Cell>
              <Table.Cell>
                {p.defaultvalue ? (
                  <Code size="1" variant="ghost">{p.defaultvalue}</Code>
                ) : (
                  <Text size="1" color="gray">—</Text>
                )}
              </Table.Cell>
              <Table.Cell>
                {p.description ? (
                  <Text size="1" dangerouslySetInnerHTML={{ __html: p.description }} />
                ) : (
                  <Text size="1" color="gray">—</Text>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

function PropertiesTable({ properties }) {
  if (!properties || properties.length === 0) return null;

  return (
    <Box mt="3">
      <Text size="2" weight="medium" color="gray" mb="2" className="subsection-label">
        Properties
      </Text>
      <Table.Root variant="surface" size="1">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {properties.map((p, i) => (
            <Table.Row key={p.name + '-' + i}>
              <Table.Cell><Code size="1" variant="ghost">{p.name}</Code></Table.Cell>
              <Table.Cell>
                {p.type ? (
                  <Flex gap="1" wrap="wrap">
                    {p.type.map((t, j) => (
                      <Badge key={j} variant="soft" color="red" size="1">{t}</Badge>
                    ))}
                  </Flex>
                ) : (
                  <Text size="1" color="gray">*</Text>
                )}
              </Table.Cell>
              <Table.Cell>
                {p.description ? (
                  <Text size="1" dangerouslySetInnerHTML={{ __html: p.description }} />
                ) : (
                  <Text size="1" color="gray">—</Text>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

function Returns({ returns }) {
  if (!returns || returns.length === 0) return null;

  return (
    <Box mt="3">
      <Text size="2" weight="medium" color="gray" mb="1" className="subsection-label">
        Returns
      </Text>
      {returns.map((r, i) => (
        <Flex key={i} gap="2" align="center" mt="1">
          {r.type && r.type.map((t, j) => (
            <Badge key={j} variant="soft" color="green" size="1">{t}</Badge>
          ))}
          {r.description && (
            <Text size="2" dangerouslySetInnerHTML={{ __html: r.description }} />
          )}
        </Flex>
      ))}
    </Box>
  );
}

function Throws({ exceptions }) {
  if (!exceptions || exceptions.length === 0) return null;

  return (
    <Box mt="3">
      <Text size="2" weight="medium" color="gray" mb="1" className="subsection-label">
        Throws
      </Text>
      {exceptions.map((e, i) => (
        <Flex key={i} gap="2" align="center" mt="1">
          {e.type && e.type.map((t, j) => (
            <Badge key={j} variant="soft" color="red" size="1">{t}</Badge>
          ))}
          {e.description && (
            <Text size="2" dangerouslySetInnerHTML={{ __html: e.description }} />
          )}
        </Flex>
      ))}
    </Box>
  );
}

function Examples({ examples }) {
  if (!examples || examples.length === 0) return null;

  return (
    <Box mt="3">
      <Text size="2" weight="medium" color="gray" mb="2" className="subsection-label">
        Examples
      </Text>
      {examples.map((ex, i) => {
        let caption = null;
        let code = ex;
        const match = ex.match(/^\s*<caption>(.*?)<\/caption>\s*([\s\S]*)/);
        if (match) {
          caption = match[1];
          code = match[2];
        }
        const highlighted = highlightCode(code.trim(), 'javascript');
        return (
          <Box key={i} className="code-block-wrap" mt="2">
            {caption && (
              <Text size="1" color="gray" className="code-caption">{caption}</Text>
            )}
            <pre className="code-block">
              <code dangerouslySetInnerHTML={{ __html: highlighted }} />
            </pre>
          </Box>
        );
      })}
    </Box>
  );
}

function MetaBadges({ doclet }) {
  const badges = [];
  if (doclet.access && doclet.access !== 'public') {
    badges.push(<Badge key="access" variant="surface" color={doclet.access === 'private' ? 'red' : 'orange'} size="1">{doclet.access}</Badge>);
  }
  if (doclet.scope === 'static') {
    badges.push(<Badge key="static" variant="surface" color="blue" size="1">static</Badge>);
  }
  if (doclet.async) {
    badges.push(<Badge key="async" variant="surface" color="cyan" size="1">async</Badge>);
  }
  if (doclet.generator) {
    badges.push(<Badge key="gen" variant="surface" color="plum" size="1">generator</Badge>);
  }
  if (doclet.readonly) {
    badges.push(<Badge key="ro" variant="surface" color="gray" size="1">readonly</Badge>);
  }
  if (doclet.since) {
    badges.push(<Badge key="since" variant="outline" color="gray" size="1">since {doclet.since}</Badge>);
  }
  return badges.length > 0 ? <Flex gap="1">{badges}</Flex> : null;
}

function SeeAlso({ see }) {
  if (!see || see.length === 0) return null;
  return (
    <Box mt="3">
      <Text size="2" weight="medium" color="gray" mb="1" className="subsection-label">
        See also
      </Text>
      <ul className="see-list">
        {see.map((s, i) => (
          <li key={i}>
            <Text size="2" dangerouslySetInnerHTML={{ __html: s }} />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export function DocEntry({ doclet, isConstructor = false }) {
  const isFn = doclet.kind === 'function' || isConstructor;
  const isTypedef = doclet.kind === 'typedef';
  const isEvent = doclet.kind === 'event';

  return (
    <Card id={doclet.name} className="doc-entry" variant="surface">
      <Flex justify="between" align="start" mb="2">
        <Flex direction="column" gap="1">
          <Flex align="center" gap="2">
            <MetaBadges doclet={doclet} />
            <Text size="3" weight="bold" className="entry-name">
              {doclet.name}
            </Text>
            {!isFn && doclet.type && (
              <Flex gap="1">
                {doclet.type.map((t, i) => (
                  <Badge key={i} variant="soft" color="red" size="1">{t}</Badge>
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>
        {doclet.meta && (
          <Text size="1" color="gray" className="source-ref">
            {doclet.meta.filename}{doclet.meta.lineno ? `:${doclet.meta.lineno}` : ''}
          </Text>
        )}
      </Flex>

      {doclet.deprecated && (
        <Box className="deprecated-notice" mb="2">
          <Text size="2" color="red">
            ⚠ Deprecated{typeof doclet.deprecated === 'string' ? `: ${doclet.deprecated}` : ''}
          </Text>
        </Box>
      )}

      {(isFn || isConstructor) && <Signature doclet={doclet} isConstructor={isConstructor} />}

      {doclet.description && (
        <Box className="entry-description" mt="2">
          <div dangerouslySetInnerHTML={{ __html: doclet.description }} />
        </Box>
      )}

      {isFn && <ParamsTable params={doclet.params} />}
      {isTypedef && <PropertiesTable properties={doclet.properties} />}
      {isTypedef && <ParamsTable params={doclet.params} />}
      {isEvent && <ParamsTable params={doclet.params} />}
      {!isFn && !isTypedef && <PropertiesTable properties={doclet.properties} />}
      {isFn && <Returns returns={doclet.returns} />}
      {isFn && <Throws exceptions={doclet.exceptions} />}
      <Examples examples={doclet.examples} />
      <SeeAlso see={doclet.see} />

      {doclet.defaultvalue && !isFn && (
        <Flex mt="2" gap="2" align="center">
          <Text size="1" weight="medium" color="gray">Default:</Text>
          <Code size="1">{doclet.defaultvalue}</Code>
        </Flex>
      )}
    </Card>
  );
}
