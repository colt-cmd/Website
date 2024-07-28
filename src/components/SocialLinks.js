import React, { useState, useEffect } from 'react';

const SocialLinks = ({ isAdmin }) => {
  const [githubUrl, setGithubUrl] = useState(localStorage.getItem('githubUrl') || '');
  const [linkedinUrl, setLinkedinUrl] = useState(localStorage.getItem('linkedinUrl') || '');
  const [inputGithubUrl, setInputGithubUrl] = useState(githubUrl);
  const [inputLinkedinUrl, setInputLinkedinUrl] = useState(linkedinUrl);
  const [errors, setErrors] = useState({ github: '', linkedin: '' });

  useEffect(() => {
    if (githubUrl) {
      localStorage.setItem('githubUrl', githubUrl);
    }
    if (linkedinUrl) {
      localStorage.setItem('linkedinUrl', linkedinUrl);
    }
  }, [githubUrl, linkedinUrl]);

  const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const handleSaveUrls = () => {
    let valid = true;
    if (!isValidUrl(inputGithubUrl)) {
      setErrors((prev) => ({ ...prev, github: 'Invalid GitHub URL' }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, github: '' }));
    }

    if (!isValidUrl(inputLinkedinUrl)) {
      setErrors((prev) => ({ ...prev, linkedin: 'Invalid LinkedIn URL' }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, linkedin: '' }));
    }

    if (valid) {
      setGithubUrl(inputGithubUrl);
      setLinkedinUrl(inputLinkedinUrl);
      alert('URLs saved successfully!');
    }
  };

  return (
    <div>
      <h3>Connect with me</h3>
      <ul>
        {githubUrl && (
          <li>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
              GitHub
            </a>
          </li>
        )}
        {linkedinUrl && (
          <li>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
              LinkedIn
            </a>
          </li>
        )}
      </ul>
      {isAdmin && (
        <div>
          <h4>Admin: Set Social Links</h4>
          <div>
            <label>
              GitHub URL:
              <input
                type="text"
                value={inputGithubUrl}
                onChange={(e) => setInputGithubUrl(e.target.value)}
              />
            </label>
            {errors.github && <span style={{ color: 'red' }}>{errors.github}</span>}
          </div>
          <div>
            <label>
              LinkedIn URL:
              <input
                type="text"
                value={inputLinkedinUrl}
                onChange={(e) => setInputLinkedinUrl(e.target.value)}
              />
            </label>
            {errors.linkedin && <span style={{ color: 'red' }}>{errors.linkedin}</span>}
          </div>
          <button onClick={handleSaveUrls}>Save URLs</button>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
