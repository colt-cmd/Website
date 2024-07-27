import React, { useState } from 'react';
import './Section.css';

const SocialLinks = () => {
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  return (
    <div className="section">
      <h2>Connect with me</h2>
      <input
        type="text"
        placeholder="GitHub Profile"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />
      <input
        type="text"
        placeholder="LinkedIn Profile"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <div className="links-list">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
