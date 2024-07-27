import React from 'react';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import CareerExperience from './components/CareerExperience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Colt Muhle</h1>
        <ProfilePhoto />
      </header>
      <section>
        <h2 className="section-title">Career Experience</h2>
        <CareerExperience />
      </section>
      <section>
        <h2 className="section-title">Certifications</h2>
        <Certifications />
      </section>
      <section>
        <h2 className="section-title">Projects</h2>
        <Projects />
      </section>
      <section>
        <h2 className="section-title">Connect with Me</h2>
        <SocialLinks />
      </section>
    </div>
  );
};

export default App;
