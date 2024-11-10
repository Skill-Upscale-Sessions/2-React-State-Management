import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getAllUsersAction } from "../../store/actions/userAction";
import { Heading, Table, Text } from "@radix-ui/themes";

const UsersWithRedux: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isDataLoading, users } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  if (isDataLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text size="5" weight="bold">
          API Call in Progress...
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

export default UsersWithRedux;
