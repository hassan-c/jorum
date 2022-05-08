import {
  Skeleton,
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
  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await fetch(`api/v1/users`);
      if (getUsers.ok) {
        setUsers(await getUsers.json());
      }

      setIsLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <Skeleton isLoaded={!isLoading} w="full">
      <TableContainer>
        <Table>
          <TableCaption placement="top">{users.length} users</TableCaption>
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Join Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.username}</Td>
                  <Td>{user.createdAt}</Td>
                  <Td>0</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Skeleton>
  );
}
