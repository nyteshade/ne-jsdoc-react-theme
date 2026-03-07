import { Box, Heading, Text, Flex, Badge } from '@radix-ui/themes';
import { RocketIcon } from '@radix-ui/react-icons';

export function HomePage({ readme, packageInfo }) {
  const title = packageInfo?.name || 'API Documentation';
  const version = packageInfo?.version;

  return (
    <Box>
      <Box className="hero-section" mb="6">
        <Flex align="center" gap="3" mb="2">
          <Box className="hero-icon">
            <RocketIcon width="24" height="24" />
          </Box>
          <Heading size="8" weight="bold" className="hero-title">
            {title}
          </Heading>
          {version && (
            <Badge variant="surface" color="red" size="2">{version}</Badge>
          )}
        </Flex>
        <Text size="3" color="gray" className="hero-subtitle">
          API Reference & Documentation
        </Text>
      </Box>

      {readme ? (
        <Box className="readme-content" dangerouslySetInnerHTML={{ __html: readme }} />
      ) : (
        <Box className="empty-state">
          <Text size="3" color="gray">
            Use the sidebar to navigate through the API documentation.
          </Text>
        </Box>
      )}
    </Box>
  );
}
