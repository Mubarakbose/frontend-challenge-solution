import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/userService';
import { User, UserFormData } from '../types/User'; // Add UserFormData import
import UserForm from './UserForm';
import UserList from './UserList';
import './UserDashboard.css';

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const userData = await fetchUsers();
      setUsers(userData);
      setError(null);
    } catch (err) {
      setError('Failed to load users. Please try again later.');
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

const handleCreateUser = async (userData: UserFormData) => {
  try {
    const newUser = await createUser(userData);
    setUsers(prev => [...prev, newUser]);
    setError(null);
    setSuccess('User created successfully!');
    setTimeout(() => setSuccess(null), 3000);
  } catch (err) {
    setError('Failed to create user. Please try again.');
    console.error('Error creating user:', err);
  }
};

  const handleUpdateUser = async (id: number, userData: Partial<User>) => {
    try {
      const updatedUser = await updateUser(id, userData);
      setUsers(prev => prev.map(user => user.id === id ? updatedUser : user));
      setEditingUser(null);
      setError(null);
      setSuccess('User updated successfully!');
      setTimeout(() => setSuccess(null), 3000); // Clear success message after 3 seconds
    } catch (err) {
      setError('Failed to update user. Please try again.');
      console.error('Error updating user:', err);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(prev => prev.filter(user => user.id !== id));
      setError(null);
      setSuccess('User deleted successfully!');
      setTimeout(() => setSuccess(null), 3000); // Clear success message after 3 seconds
    } catch (err) {
      setError('Failed to delete user. Please try again.');
      console.error('Error deleting user:', err);
    }
  };

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="user-dashboard">
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <UserForm 
        onSubmit={editingUser ? 
          (data: UserFormData) => handleUpdateUser(editingUser.id, data) : 
          handleCreateUser
        }
        editingUser={editingUser}
        onCancel={() => setEditingUser(null)}
      />
      
      <UserList 
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserDashboard;