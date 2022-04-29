import { Button } from "@chakra-ui/react";

export default function SignUpForm(props) {
  return (
    <div className="signUpForm">
      <h4>Sign up</h4>

      <form onSubmit={(event) => props.createUser(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => props.setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => props.setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => props.setEmail(e.target.value)}
            required
          />
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
