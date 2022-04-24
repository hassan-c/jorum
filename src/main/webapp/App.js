import "./App.css";
import { useEffect, useState } from "react";
import SignUpForm from "./components/SignUpForm";

const API = "api/v1";

function App() {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const users = await fetch(`${API}/users`);
      setUsers(await users.json());
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
        createdAt,
      }),
    });

    const createUserResponse = await createUser.json();

    if (createUser.ok) {
      // response will have user data + the ID
      setUsers(() => users.concat(createUserResponse));
    } else {
      alert(
        "Could not create user (does a user with that email already exist?"
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
    <div className="App">
      <h1>jorum</h1>

      <p>Welcome to jorum, a simple forum written in Spring Boot and React.</p>
      <SignUpForm
        createUser={createUser}
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        setCreatedAt={setCreatedAt}
      />

      {users.length > 0 && <p>There are currently {users.length} users.</p>}
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.username}{" "}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <ul>
                <li>Email: {user.email}</li>
                <li>Created: {user.createdAt}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
