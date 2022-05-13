import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
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

  return (
    <TableContainer w="full">
      <Table>
        <TableCaption placement="top">{users.length} users</TableCaption>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Join Date</Th>
            <Th isNumeric>Posts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>{user.username}</Td>
                <Td>{user.createdAt}</Td>
                <Td isNumeric>0</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
