import { Text } from "@chakra-ui/react"

export default function LoggedInAs({ loggedInUser }) {
  return (
    <div className="loggedInAs">
      You are logged in as <Text as="b">{loggedInUser}</Text>
    </div>
  );
}
