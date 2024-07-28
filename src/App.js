import React, { useState, useEffect } from 'react';
import ProfilePhoto from './components/ProfilePhoto';
import CareerExperience from './components/CareerExperience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Login from './components/Login';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('CareerExperience');
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    const handleStorage = () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const isAdmin = user && user.username === 'venator';

  const renderContent = () => {
    switch (activeTab) {
      case 'CareerExperience':
        return <CareerExperience user={user} />;
      case 'Certifications':
        return <Certifications user={user} />;
      case 'Projects':
        return <Projects user={user} />;
      case 'SocialLinks':
        return <SocialLinks isAdmin={isAdmin} />;
      default:
        return <CareerExperience user={user} />;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <ProfilePhoto />
        <h1 className="name">Colt Muhle</h1>
        <div className="user-info">
          {user ? (
            <>
              <span>Welcome, {user.username}</span>
              <button onClick={() => setUser(null)}>Sign Out</button>
            </>
          ) : (
            <button onClick={() => setActiveTab('Login')}>Sign In</button>
          )}
        </div>
      </div>
      <nav className="nav">
        <button onClick={() => setActiveTab('CareerExperience')}>Career Experience</button>
        <button onClick={() => setActiveTab('Certifications')}>Cyber Training</button>
        <button onClick={() => setActiveTab('Projects')}>Projects</button>
        <button onClick={() => setActiveTab('SocialLinks')}>Connect with me</button>
      </nav>
      <div className="content">
        {activeTab === 'Login' ? <Login setUser={setUser} /> : renderContent()}
      </div>
    </div>
  );
}

export default App;
