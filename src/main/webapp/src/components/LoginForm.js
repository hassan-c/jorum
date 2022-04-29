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

export default function LoginForm({ setLoggedInUser }) {
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    setIsLoading(true);

    const logInRequest = await fetch("/api/v1/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    if (logInRequest.ok) {
      setLoggedInUser(loginUsername);
    } else if (logInRequest.status === 403) {
      setErrorMessage("Invalid username or password");
    } else {
      setErrorMessage("Could not authenticate you");
    }

    setIsLoading(false);
  }

  return (
    <Box className="loginForm">
      <Box mb={4}>
        <Heading as="h4" size="lg">
          Log in
        </Heading>
      </Box>

      {errorMessage && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Couldn't log you in</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={(event) => loginUser(event)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="loginUsername"
            onChange={(e) => setLoginUsername(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="loginPassword"
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" mt={4} isLoading={isLoading}>
          Log in
        </Button>
      </form>
    </Box>
  );
}
