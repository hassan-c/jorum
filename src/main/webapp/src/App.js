import { Button, ChakraProvider, Container, HStack, Link, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import LoggedInUserMessage from "./components/LoggedInAs";
import LoginForm from "./components/LoginForm";
import Section from "./components/Section";
import SignUpForm from "./components/SignUpForm";
import Users from "./components/Users";

function App() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await fetch("api/v1/users/current");
      if (currentUser.ok) {
        setLoggedInUser(await currentUser.text());
      }
    }

    getCurrentUser();
  }, [loggedInUser]);

  async function logoutUser() {
    const logoutRequest = await fetch("api/v1/logout");
    if (logoutRequest.ok) {
      setLoggedInUser(null);
      navigate("/");
    }
  }

  return (
    <ChakraProvider>
      <Container centerContent maxW={900}>
        <Header />

        {/* Todo: use <Flex> element here */}
        <HStack as="nav" bg="gray.50" p={2} spacing={4} w="full" my={4}>
          <Link as={RouterLink} to="/">
            Index
          </Link>
          <Link as={RouterLink} to="/users">
            Users
          </Link>
          <Spacer />
          {loggedInUser ? (
            <HStack>
              <LoggedInUserMessage loggedInUser={loggedInUser} />
              <Button onClick={logoutUser}>Log out</Button>
            </HStack>
          ) : (
            <>
              <Button as={RouterLink} to="/login">
                Log in
              </Button>
              <Button as={RouterLink} to="/signup">
                Sign up
              </Button>
            </>
          )}
        </HStack>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<LoginForm setLoggedInUser={setLoggedInUser} />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/section/:id/:name" element={<Section />} />
          <Route path="/section/:id" element={<Section />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
