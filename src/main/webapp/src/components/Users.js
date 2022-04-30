import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

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
    <TableContainer>
      <Table>
        <TableCaption placement="top">{users.length} users</TableCaption>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Join Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>{user.username}</Td>

                <Td>{user.email ?? "(none)"}</Td>
                <Td>{user.createdAt}</Td>

                <Td>
                  <Button onClick={() => deleteUser(user.id)}>Delete</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
