export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

// UserFormData should match what the form expects
export interface UserFormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  companyName: string; // This is different from User.company.name
}