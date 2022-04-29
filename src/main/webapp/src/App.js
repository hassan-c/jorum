import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  HStack,
  Link,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoggedInUserMessage from "./components/LoggedInAs";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [users, setUsers] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await fetch(`api/v1/users`);
      if (getUsers.ok) {
        setUsers(await getUsers.json());
      }
    }

    fetchUsers();
  }, []);

  async function deleteUser(id) {
    const deleteUser = await fetch(`api/v1/users/${id}`, { method: "delete" });
    if (deleteUser.ok) {
      setUsers(() => users.filter((user) => user.id !== id));
    } else {
      alert(`Could not delete user with id ${id}`);
    }
  }

  return (
    <ChakraProvider>
      <Center mt="1em">
        <Box width="50%">
          <Stack spacing={5}>
            <Header />

            <Flex as="nav" bg="gray.50" p={2}>
              <HStack width="full" spacing={4}>
                <Link as={RouterLink} to="/">
                  Index
                </Link>
                <Link as={RouterLink} to="/users">
                  Users
                </Link>
                <Spacer />
                {loggedInUser ? (
                  <LoggedInUserMessage loggedInUser={loggedInUser} />
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
            </Flex>

            <Routes>
              <Route path="/" element={<p>Hello!</p>} />
              <Route
                path="/users"
                element={
                  <Box>
                    {users.length > 0 && (
                      <p>There are currently {users.length} users.</p>
                    )}
                    <ul>
                      {users.map((user) => {
                        return (
                          <li key={user.id}>
                            {user.username}{" "}
                            <Button onClick={() => deleteUser(user.id)}>
                              Delete
                            </Button>
                            <ul>
                              <li>Email: {user.email}</li>
                              <li>Created: {user.createdAt}</li>
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </Box>
                }
              />
              <Route
                path="login"
                element={<LoginForm setLoggedInUser={setLoggedInUser} />}
              />
              <Route path="signup" element={<SignUpForm />} />
            </Routes>
          </Stack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
