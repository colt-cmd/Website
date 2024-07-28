import React, { useState } from 'react';
import './Section.css';

const CareerExperience = ({ user }) => {
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <div className="section">
      <h2>Career Experience</h2>
      <textarea
        placeholder="Describe your career experience..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input type="file" accept=".docx,.pdf" onChange={handleFileChange} />
      {resume && <p>Uploaded File: {resume.name}</p>}
    </div>
  );
};

export default CareerExperience;
