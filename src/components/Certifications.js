import React, { useState } from 'react';
import './Section.css';

const Certifications = ({ user }) => {
  const [certificate, setCertificate] = useState(null);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleFileChange = (event) => {
    setCertificate(event.target.files[0]);
  };

  return (
    <div className="section">
      <h2>Certifications</h2>
      <textarea
        placeholder="Describe your certifications..."
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
      {certificate && <p>Uploaded File: {certificate.name}</p>}
    </div>
  );
};

export default Certifications;
