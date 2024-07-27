import React from 'react';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import CareerExperience from './components/CareerExperience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
      </header>
      <ProfilePhoto />
      <CareerExperience />
      <Certifications />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default App;
