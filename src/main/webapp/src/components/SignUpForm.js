import {
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

  const [errorMessage, setErrorMessage] = useState("");

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  async function signUpUser(event) {
    event.preventDefault();

    setIsLoading(true);

    const createUser = await fetch(`api/v1/users`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
        email: "example@example.com",
      }),
    });

    if (createUser.ok) {
      alert("all good");
    } else {
      alert(
        "Could not create user (does a user with that email already exist?)"
      );
    }

    setIsLoading(false);
  }

  return (
    <Box className="signUpForm">
      <Box mb={4}>
        <Heading as="h4" size="lg">
          Sign up
        </Heading>
      </Box>

      <form onSubmit={(event) => signUpUser(event)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            required
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
          Submit
        </Button>
      </form>
    </Box>
  );
}
