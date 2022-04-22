import './App.css';
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function handleClick() {
    const users = await fetch('api/v1/users');
    setUsers(await users.json());
  }

  return (
    <div className="App">
      <ul>
        {users.map(user => {
          return <li key={user.id}>{JSON.stringify(user)}</li>
        })}
      </ul>
      <button onClick={handleClick}>List all users</button>
    </div>
  );
}

export default App;
