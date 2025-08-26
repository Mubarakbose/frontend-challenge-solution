import React from 'react';
import { User } from '../types/User';
import './UserList.css';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return <div className="no-users">No users found. Add a user to get started.</div>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> 
                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </div>
            <div className="user-actions">
              <button 
                className="btn btn-edit"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button 
                className="btn btn-delete"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;