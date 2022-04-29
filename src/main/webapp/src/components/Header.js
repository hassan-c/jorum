import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Heading as="h1" size="lg">
        jorum
      </Heading>

      <Text>
        Welcome to jorum, a simple forum written in Spring Boot and React.
      </Text>
    </Box>
  );
}
