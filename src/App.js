import React, { useState } from 'react';
import ProfilePhoto from './components/ProfilePhoto';
import CareerExperience from './components/CareerExperience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Login from './components/Login';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('CareerExperience');
  const [user, setUser] = useState(null);

  const renderContent = () => {
    if (!user) {
      return <Login setUser={setUser} />;
    }

    switch (activeTab) {
      case 'CareerExperience':
        return <CareerExperience user={user} />;
      case 'Certifications':
        return <Certifications user={user} />;
      case 'Projects':
        return <Projects user={user} />;
      case 'SocialLinks':
        return <SocialLinks />;
      default:
        return <CareerExperience user={user} />;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <ProfilePhoto />
        <h1 className="name">Colt Muhle</h1>
      </div>
      {user && (
        <nav className="nav">
          <button onClick={() => setActiveTab('CareerExperience')}>Career Experience</button>
          <button onClick={() => setActiveTab('Certifications')}>Cyber Training</button>
          <button onClick={() => setActiveTab('Projects')}>Projects</button>
          <button onClick={() => setActiveTab('SocialLinks')}>Connect with me</button>
        </nav>
      )}
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
