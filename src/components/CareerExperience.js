import React, { useState } from 'react';
import './Section.css';

const CareerExperience = () => {
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [showUpload, setShowUpload] = useState(false);

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
      <button onClick={() => setShowUpload(!showUpload)}>
        {showUpload ? 'Cancel Upload' : 'Upload File'}
      </button>
      {showUpload && (
        <div>
          <input type="file" accept=".docx,.pdf" onChange={handleFileChange} />
          {resume && <p>Uploaded File: {resume.name}</p>}
        </div>
      )}
    </div>
  );
};

export default CareerExperience;
