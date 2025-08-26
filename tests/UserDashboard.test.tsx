import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserDashboard from '../src/components/UserDashboard';

// Mock the userService
jest.mock('../src/services/userService', () => ({
  fetchUsers: jest.fn(() => Promise.resolve([
    {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      website: 'test.com',
      company: {
        name: 'Test Company'
      }
    }
  ])),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn(),
}));

// Mock the components that UserDashboard uses
jest.mock('../src/components/UserForm', () => {
  const MockUserForm = () => <div data-testid="user-form">User Form Mock</div>;
  MockUserForm.displayName = 'MockUserForm';
  return MockUserForm;
});

jest.mock('../src/components/UserList', () => {
  const MockUserList = () => <div data-testid="user-list">User List Mock</div>;
  MockUserList.displayName = 'MockUserList';
  return MockUserList;
});

describe('UserDashboard', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<UserDashboard />);
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();
  });

  it('renders user form and list after loading', async () => {
    render(<UserDashboard />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText(/loading users/i)).not.toBeInTheDocument();
    });
    
    // Check if the mocked components are rendered
    expect(screen.getByTestId('user-form')).toBeInTheDocument();
    expect(screen.getByTestId('user-list')).toBeInTheDocument();
  });
});