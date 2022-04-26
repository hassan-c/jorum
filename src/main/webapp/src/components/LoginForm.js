import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event, username, password) {
    event.preventDefault();
    console.log(username, password);
  }

  return (
    <div className="loginForm">
      <h4>Login</h4>

      <form onSubmit={(event) => loginUser(event, username, password)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
