import { useState } from "react";

export default function LoginForm({ setLoggedInUser }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const userForm = new FormData();
    userForm.append("username", loginUsername);
    userForm.append("password", loginPassword);

    const logInRequest = await fetch("/login", {
      method: "post",
      body: userForm,
    });

    if (logInRequest.ok) {
      setLoggedInUser(loginUsername);
    } else {
      if (logInRequest.url.endsWith("error")) {
        setErrorMessage("Invalid username or password.");
      } else {
        setErrorMessage("Error: Could not authenticate you. Try again.");
      }
    }
  }

  return (
    <div className="loginForm">
      <h4>Log in</h4>

      <p>{errorMessage}</p>

      <form onSubmit={(event) => loginUser(event)}>
        <label>
          Username:
          <input
            type="text"
            name="loginUsername"
            onChange={(e) => setLoginUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="loginPassword"
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
