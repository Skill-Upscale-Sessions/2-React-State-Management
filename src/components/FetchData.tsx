import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Avatar from "@radix-ui/react-avatar";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  educationLevel: string;
  isActive: boolean;
  createdAt: number;
}

const FetchData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const URL = "https://672f6be2229a881691f2e2a6.mockapi.io/api/v1/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(URL);
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

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

export default FetchData;
