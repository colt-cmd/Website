import React from 'react';
import ProfilePhoto from './components/ProfilePhoto';
import Section from './components/Section';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <div className="content">
        <h1>Colt Muhle</h1>
        <Section title="Career Experience" />
        <Section title="Certifications" />
        <Section title="Projects" />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
