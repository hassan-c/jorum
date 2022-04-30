import { Box, Text } from "@chakra-ui/react";

export default function LoggedInAs({ loggedInUser }) {
  return (
    <Box>
      You are logged in as <Text as="b">{loggedInUser}</Text>
    </Box>
  );
}
