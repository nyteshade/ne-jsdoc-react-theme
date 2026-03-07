import { Box, Flex, Heading, Text, Badge, Separator, Card, Tabs } from '@radix-ui/themes';
import { CubeIcon } from '@radix-ui/react-icons';
import { DocEntry } from './DocEntry';

const KIND_COLORS = {
  class: 'red',
  module: 'cyan',
  interface: 'orange',
  namespace: 'green',
  mixin: 'plum',
  global: 'gray',
};

function Section({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <Box className="doc-section" mt="6">
      <Heading size="4" mb="4" className="section-title">
        {title}
      </Heading>
      <Flex direction="column" gap="3">
        {items.map((item, i) => (
          <DocEntry key={item.name + '-' + i} doclet={item} />
        ))}
      </Flex>
    </Box>
  );
}

function ClassLinks({ classes }) {
  if (!classes || classes.length === 0) return null;
  return (
    <Box className="doc-section" mt="6">
      <Heading size="4" mb="4" className="section-title">Classes</Heading>
      <Flex direction="column" gap="2">
        {classes.map((cls) => {
          const slug = cls.longname
            .replace(/^module:/, 'module-')
            .replace(/[~#.]/g, '-')
            .replace(/[^a-zA-Z0-9_-]/g, '_');
          return (
            <a key={cls.name} href={`#${slug}`} className="class-link-card">
              <Card variant="surface">
                <Flex align="center" gap="2">
                  <CubeIcon />
                  <Text size="2" weight="medium">{cls.name}</Text>
                  {cls.description && (
                    <Text size="1" color="gray" className="class-link-desc">
                      — <span dangerouslySetInnerHTML={{ __html: cls.description.slice(0, 80) }} />
                    </Text>
                  )}
                </Flex>
              </Card>
            </a>
          );
        })}
      </Flex>
    </Box>
  );
}

export function EntityPage({ page }) {
  const d = page.doclet;
  const m = page.members;
  const kindColor = KIND_COLORS[page.kind] || 'gray';

  if (page.kind === 'global') {
    return (
      <Box>
        <Flex align="center" gap="3" mb="2">
          <Badge variant="solid" color="gray" size="2">Global</Badge>
          <Heading size="7">Global</Heading>
        </Flex>
        <Separator size="4" my="4" />

        <ClassLinks classes={m.classes} />
        <Section title="Functions" items={m.methods} />
        <Section title="Members" items={m.properties} />
        <Section title="Type Definitions" items={m.typedefs} />
        <Section title="Events" items={m.events} />
      </Box>
    );
  }

  const hasManyCategories = [
    m.classes, m.methods, m.staticMethods, m.properties, m.staticProperties, m.events, m.typedefs
  ].filter(arr => arr && arr.length > 0).length > 2;

  return (
    <Box>
      {/* Header */}
      <Flex align="center" gap="3" mb="2">
        <Badge variant="solid" color={kindColor} size="2">
          {page.kind.charAt(0).toUpperCase() + page.kind.slice(1)}
        </Badge>
        <Heading size="7" className="entity-title">{page.title}</Heading>
      </Flex>

      {/* Source */}
      {d.meta && (
        <Text size="1" color="gray" className="source-ref">
          {d.meta.filename}{d.meta.lineno ? `:${d.meta.lineno}` : ''}
        </Text>
      )}

      {/* Extends / Implements */}
      {d.augments && d.augments.length > 0 && (
        <Flex gap="2" mt="2" align="center">
          <Text size="2" color="gray">extends</Text>
          {d.augments.map(a => (
            <Badge key={a} variant="outline" color="gray">{a}</Badge>
          ))}
        </Flex>
      )}
      {d.implements && d.implements.length > 0 && (
        <Flex gap="2" mt="2" align="center">
          <Text size="2" color="gray">implements</Text>
          {d.implements.map(i => (
            <Badge key={i} variant="outline" color="gray">{i}</Badge>
          ))}
        </Flex>
      )}

      {/* Deprecated notice */}
      {d.deprecated && (
        <Box className="deprecated-notice" mt="3">
          <Text size="2" weight="medium" color="red">
            ⚠ Deprecated{typeof d.deprecated === 'string' ? `: ${d.deprecated}` : ''}
          </Text>
        </Box>
      )}

      {/* Description */}
      {(d.classdesc || d.description) && (
        <Box className="entity-description" mt="4">
          <div dangerouslySetInnerHTML={{ __html: d.classdesc || d.description }} />
        </Box>
      )}

      <Separator size="4" my="5" />

      {/* Constructor (for classes) */}
      {page.kind === 'class' && d.params && d.params.length > 0 && (
        <Box className="doc-section" mt="2">
          <Heading size="4" mb="4" className="section-title">
            Constructor
          </Heading>
          <DocEntry doclet={d} isConstructor />
        </Box>
      )}

      {/* Use tabs if many categories, otherwise flat sections */}
      {hasManyCategories ? (
        <Tabs.Root defaultValue={getDefaultTab(m)}>
          <Tabs.List>
            {m.properties?.length > 0 && <Tabs.Trigger value="properties">Properties</Tabs.Trigger>}
            {m.staticProperties?.length > 0 && <Tabs.Trigger value="staticProperties">Static Properties</Tabs.Trigger>}
            {m.methods?.length > 0 && <Tabs.Trigger value="methods">Methods</Tabs.Trigger>}
            {m.staticMethods?.length > 0 && <Tabs.Trigger value="staticMethods">Static Methods</Tabs.Trigger>}
            {m.events?.length > 0 && <Tabs.Trigger value="events">Events</Tabs.Trigger>}
            {m.typedefs?.length > 0 && <Tabs.Trigger value="typedefs">Types</Tabs.Trigger>}
          </Tabs.List>

          <Box mt="4">
            <TabContent value="properties" items={m.properties} />
            <TabContent value="staticProperties" items={m.staticProperties} />
            <TabContent value="methods" items={m.methods} />
            <TabContent value="staticMethods" items={m.staticMethods} />
            <TabContent value="events" items={m.events} />
            <TabContent value="typedefs" items={m.typedefs} />
          </Box>
        </Tabs.Root>
      ) : (
        <>
          <ClassLinks classes={m.classes} />
          <Section title="Properties" items={m.properties} />
          <Section title="Static Properties" items={m.staticProperties} />
          <Section title="Methods" items={m.methods} />
          <Section title="Static Methods" items={m.staticMethods} />
          <Section title="Events" items={m.events} />
          <Section title="Type Definitions" items={m.typedefs} />
        </>
      )}
    </Box>
  );
}

function TabContent({ value, items }) {
  if (!items || items.length === 0) return null;
  return (
    <Tabs.Content value={value}>
      <Flex direction="column" gap="3">
        {items.map((item, i) => (
          <DocEntry key={item.name + '-' + i} doclet={item} />
        ))}
      </Flex>
    </Tabs.Content>
  );
}

function getDefaultTab(members) {
  if (members.methods?.length) return 'methods';
  if (members.properties?.length) return 'properties';
  if (members.staticMethods?.length) return 'staticMethods';
  if (members.staticProperties?.length) return 'staticProperties';
  if (members.events?.length) return 'events';
  return 'typedefs';
}
