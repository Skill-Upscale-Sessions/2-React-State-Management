import React, { useEffect } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getAllUsersAction } from "../../store/actions/userAction";

const UsersWithRedux: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isDataLoading, users } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  if (isDataLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>
                <Avatar.Root className="avatar-root">
                  <Avatar.Image
                    src={`https://avatars.dicebear.com/api/avataaars/${user.id}.svg`}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="avatar-img"
                  />
                  <Avatar.Fallback delayMs={600} className="avatar-fallback">
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </Avatar.Fallback>
                </Avatar.Root>
              </td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersWithRedux;
