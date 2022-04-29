import { Box, Button, Center, ChakraProvider, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import LoggedInUserMessage from "./components/LoggedInAs";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const API = "api/v1";

function App() {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await fetch(`${API}/users`);
      if (getUsers.ok) {
        setUsers(await getUsers.json());
      }
    }

    fetchUsers();
  }, []);

  async function createUser(event) {
    event.preventDefault();

    const createUser = await fetch(`${API}/users`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });

    const createUserResponse = await createUser.json();

    if (createUser.ok) {
      // response will have user data + the ID
      setUsers(() => users.concat(createUserResponse));
    } else {
      alert(
        "Could not create user (does a user with that email already exist?)"
      );
    }
  }

  async function deleteUser(id) {
    const deleteUser = await fetch(`${API}/users/${id}`, { method: "delete" });
    if (deleteUser.ok) {
      setUsers(() => users.filter((user) => user.id !== id));
    } else {
      alert(`Could not delete user with id ${id}`);
    }
  }

  return (
    <ChakraProvider>
      <Center w="75%" mt="1em">
        <Box>
          <Stack spacing={5}>
            <Header />

            <Box>
              {loggedInUser ? (
                <LoggedInUserMessage loggedInUser={loggedInUser} />
              ) : (
                <LoginForm setLoggedInUser={setLoggedInUser} />
              )}
            </Box>

            <SignUpForm
              createUser={createUser}
              setUsername={setUsername}
              setPassword={setPassword}
              setEmail={setEmail}
            />

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
          </Stack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
