import React from 'react';
import UserDashboard from './components/UserDashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management Dashboard</h1>
      </header>
      <main>
        <UserDashboard />
      </main>
    </div>
  );
};

export default App;