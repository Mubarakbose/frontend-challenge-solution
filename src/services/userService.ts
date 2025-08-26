import axios from 'axios';
import { User, UserFormData } from '../types/User';

// Using JSONPlaceholder API as a mock backend
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling and logging
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Create a new user
export const createUser = async (userData: Omit<UserFormData, 'id'>): Promise<User> => {
  try {
    // JSONPlaceholder doesn't actually create users but returns mock data
    const response = await apiClient.post<User>('/users', {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      website: userData.website,
      company: {
        name: userData.companyName,
      },
    });
    
    // The API returns a mock ID, but we'll generate a temporary one for our UI
    return {
      ...response.data,
      id: Math.floor(Math.random() * 10000), // Temporary ID for UI
    };
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

// Update a user
// Update a user
export const updateUser = async (id: number, userData: Partial<UserFormData>): Promise<User> => {
  try {
    // Make the API call but don't store response since we don't use it
    await apiClient.put<User>(`/users/${id}`, {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      website: userData.website,
      company: {
        name: userData.companyName,
      },
    });
    
    // Return the updated user data with the original ID
    return {
      id,
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone || '',
      website: userData.website || '',
      company: {
        name: userData.companyName || '',
      }
    };
  } catch (error) {
    console.error('Update user error:', error);
    throw new Error('Failed to update user');
  }
};

// Delete a user
export const deleteUser = async (id: number): Promise<void> => {
  try {
    // JSONPlaceholder doesn't actually delete but returns empty response
    await apiClient.delete(`/users/${id}`);
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};