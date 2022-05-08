import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [signUpMessage, setSignUpMessage] = useState();

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  async function signUpUser(event) {
    event.preventDefault();

    setIsLoading(true);

    const createUser = await fetch(`api/v1/signup`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
      }),
    });

    if (createUser.ok) {
      setSignUpMessage({
        type: "success",
        title: "Success",
        description: `Signed up as ${signUpUsername}. You may now log in`,
      });
    } else {
      setSignUpMessage({
        type: "error",
        title: "Couldn't sign you up",
        description: "A user with that name already exists",
      });
    }

    setIsLoading(false);
  }

  return (
    <Box w="full">
      <Box mb={4}>
        <Heading as="h4" size="lg">
          Sign up
        </Heading>
      </Box>

      {signUpMessage && (
        <Alert status={signUpMessage.type}>
          <AlertIcon />
          <AlertTitle>{signUpMessage.title}</AlertTitle>
          <AlertDescription>{signUpMessage.description}</AlertDescription>
        </Alert>
      )}

      <Box my={5}>
        <p>Usernames must be alphanumeric, though hyphens and underscores are allowed.</p>
      </Box>

      <form onSubmit={(event) => signUpUser(event)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            required
            pattern="[a-zA-Z0-9_-]+"
            maxLength={20}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" mt={4} isLoading={isLoading}>
          Sign up
        </Button>
      </form>
    </Box>
  );
}
