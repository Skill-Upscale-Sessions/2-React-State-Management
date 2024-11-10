import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Table, Text } from "@radix-ui/themes";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  educationLevel: string;
  isActive: boolean;
  createdAt: number;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const URL = "https://672f6be2229a881691f2e2a6.mockapi.io/api/v1/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(URL);
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text size="5" weight="bold">
          Loading...
        </Text>
      </div>
    );

  return (
    <div className="p-4">
      <Heading size="8" className="mb-4">
        User List
      </Heading>
      <Table.Root className="w-full border-collapse border-spacing-0">
        <Table.Header className="border-b">
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>First Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id} className="hover:bg-gray-100">
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>
                {new Date(user.createdAt).toLocaleDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Users;
