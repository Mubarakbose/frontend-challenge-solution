# Frontend Challenge Solution

## Overview

This is a React TypeScript application that demonstrates user management capabilities with CRUD operations. It connects to the JSONPlaceholder API as a mock backend.

## Features

- View list of users
- Add new users
- Edit existing users
- Delete users
- Responsive design
- Error handling
- Loading states

## Technology Stack

- React 18 with TypeScript
- Vite for building and development
- Axios for API calls
- CSS3 for styling
- Docker for containerization
- Jest for testing

## Getting Started

### Prerequisites

- Node.js 16 or higher
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Docker Deployment

1. Build the image: `npm run docker:build`
2. Run the container: `npm run docker:run`
3. Or use Docker Compose: `npm run docker:compose`

## API Integration

The application uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com) for demonstration purposes. Note that this API doesn't actually persist changes but simulates the behavior.

## Project Structure

src/
components/ # React components
services/ # API service functions
types/ # TypeScript type definitions
App.tsx # Main application component
index.tsx # Application entry point

## Future Enhancements

- Add proper state management (Redux/Context)
- Implement form validation
- Add pagination for user list
- Enhance test coverage
- Add user authentication
- Implement real backend integration
