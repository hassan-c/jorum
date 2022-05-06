import { Box, Divider, Heading, VStack, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <VStack spacing={3} alignItems="left">
        <Box my={3}>
          Welcome to jorum, a simple forum written in Spring Boot and React.
        </Box>
        <Heading as="h3" size="m">
          General
        </Heading>
        <Divider />
        <Box>
          <Text>General Discussion</Text>
        </Box>
        <Divider />
        <Box>
          <Text>Development</Text>
        </Box>

        <Divider />
      </VStack>
    </Box>
  );
}
