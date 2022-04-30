import { Box, Text } from "@chakra-ui/react";

export default function LoggedInAs({ loggedInUser }) {
  return (
    <Box>
      Logged in as <Text as="b">{loggedInUser}</Text>
    </Box>
  );
}
