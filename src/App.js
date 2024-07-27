import React, { useState } from 'react';
import ProfilePhoto from './components/ProfilePhoto';
import CareerExperience from './components/CareerExperience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('CareerExperience');

  const renderContent = () => {
    switch (activeTab) {
      case 'CareerExperience':
        return <CareerExperience />;
      case 'Certifications':
        return <Certifications />;
      case 'Projects':
        return <Projects />;
      case 'SocialLinks':
        return <SocialLinks />;
      default:
        return <CareerExperience />;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <ProfilePhoto />
        <h1>Colt Muhle</h1>
      </div>
      <nav className="nav">
        <button onClick={() => setActiveTab('CareerExperience')}>Career Experience</button>
        <button onClick={() => setActiveTab('Certifications')}>Cyber Training</button>
        <button onClick={() => setActiveTab('Projects')}>Projects</button>
        <button onClick={() => setActiveTab('SocialLinks')}>Connect with me</button>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
