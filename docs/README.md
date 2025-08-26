# Frontend Developer Challenge Solution

A modern React TypeScript application demonstrating full CRUD operations with a clean, responsive UI and Docker containerization.

## 📋 Features

- **React 18** with **TypeScript** for type safety
- **Full CRUD Operations** (Create, Read, Update, Delete users)
- **REST API Integration** with JSONPlaceholder mock API
- **Responsive Design** that works on desktop, tablet, and mobile
- **Docker Containerization** for easy deployment
- **Modern Build Setup** with Vite for fast development
- **Clean UI/UX** with loading states and error handling
- **Professional Code Structure** with proper separation of concerns

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, CSS3
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Testing**: Jest, Testing Library
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx (production)

## 📦 Installation & Setup

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn
- Docker (optional, for containerization)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mubarakbose/frontend-challenge-solution.git
   cd frontend-challenge-solution
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Application will open at: http://localhost:3000

4. **Run tests**

   ```bash
   npm run test
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

### Docker Deployment

#### Option 1: Using Docker Build

```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run
```

#### Option 2: Using Docker Compose

```bash
# Build and start with Docker Compose
npm run docker:compose
```

The application will be available at: http://localhost:3000

## 🏗️ Project Structure

```
frontend-challenge/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── UserDashboard.tsx
│   │   ├── UserForm.tsx
│   │   ├── UserList.tsx
│   │   └── *.css          # Component styles
│   ├── services/           # API services
│   │   └── userService.ts
│   ├── types/              # TypeScript definitions
│   │   └── User.ts
│   ├── App.tsx             # Main application component
│   ├── App.css             # Main application styles
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles
├── tests/                  # Test files
├── docs/                   # Documentation
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf              # Nginx configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── jest.config.cjs         # Jest configuration
└── package.json            # Dependencies and scripts
```

## 🌐 API Integration

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com) mock API for demonstration purposes.

**Note**: Since JSONPlaceholder is a read-only API, Create, Update, and Delete operations are simulated:

- **CREATE**: Generates a random ID and adds to local state
- **UPDATE**: Updates local state with new values
- **DELETE**: Removes item from local state

All operations provide visual feedback as if they were persistent.

### API Endpoints Used

- `GET /users` - Fetch all users
- `POST /users` - Create new user (simulated)
- `PUT /users/:id` - Update user (simulated)
- `DELETE /users/:id` - Delete user (simulated)

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation messages for user actions
- **Form Validation**: Basic input validation
- **Clean Interface**: Modern, professional appearance

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check
```

### Test Coverage

- Utility functions
- API service functions
- Component rendering
- User interaction flows

## 🐳 Docker Configuration

### Dockerfile

Multi-stage build process:

1. **Build stage**: Node.js environment for building the React app
2. **Production stage**: Nginx server serving built static files

### docker-compose.yml

Simplified container management with port mapping and restart policies.

### nginx.conf

Optimized Nginx configuration for serving React applications with proper MIME types and security headers.

## 📊 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run test:coverage # Run tests with coverage report
npm run type-check   # TypeScript compilation check
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
npm run docker:compose # Start with Docker Compose
```

## 🔧 Configuration Files

- **vite.config.ts**: Vite build configuration with React plugin
- **tsconfig.json**: TypeScript strict configuration with modern settings
- **jest.config.cjs**: Jest testing configuration for TypeScript
- **.eslintrc.json**: ESLint configuration for code quality
- **.gitignore**: Git ignore rules for Node.js projects

## 🚀 Deployment Options

### 1. Docker Deployment (Recommended)

```bash
docker build -t frontend-challenge .
docker run -p 3000:80 frontend-challenge
```

### 2. Static Hosting

Build the project and deploy the `dist` folder to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### 3. Traditional Server

Deploy the built files to any web server (Nginx, Apache, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Real backend integration
- [ ] User authentication
- [ ] Advanced filtering and search
- [ ] Pagination
- [ ] State management with Redux/Context
- [ ] End-to-end testing with Cypress
- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)
- [ ] Progressive Web App (PWA) features


**Built with ❤️ using React, TypeScript, and modern web technologies.**

