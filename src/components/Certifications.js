import React, { useState } from 'react';
import './Section.css';

const Certifications = () => {
  const [certificate, setCertificate] = useState(null);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleFileChange = (event) => {
    setCertificate(event.target.files[0]);
  };

  return (
    <div className="section">
      <h2>Cyber Training</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <textarea
        placeholder="Describe your certification..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      {certificate && <p>Uploaded File: {certificate.name}</p>}
    </div>
  );
};

export default Certifications;
