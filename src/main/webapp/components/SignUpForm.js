export default function SignUpForm(props) {
  return (
    <div className="signUpForm">
      <h4>Create a new user</h4>

      <form id="signUpForm" onSubmit={(event) => props.createUser(event)}>
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
        <label>
          Created at:
          <input
            type="date"
            name="createdAt"
            onChange={(e) => props.setCreatedAt(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
