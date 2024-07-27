import React, { useState, useEffect } from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const [github, setGithub] = useState(localStorage.getItem('github') || '');
  const [linkedin, setLinkedin] = useState(localStorage.getItem('linkedin') || '');
  const [error, setError] = useState('');

  const handleSave = () => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if (!urlPattern.test(github) || !urlPattern.test(linkedin)) {
      setError('Please enter valid URLs');
      return;
    }

    localStorage.setItem('github', github);
    localStorage.setItem('linkedin', linkedin);
    setError('');
  };

  return (
    <div className="social-links">
      <h2>Connect with me</h2>
      <input
        type="text"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        placeholder="GitHub URL"
      />
      <input
        type="text"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        placeholder="LinkedIn URL"
      />
      <button onClick={handleSave}>Save</button>
      {error && <p>{error}</p>}
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default SocialLinks;
