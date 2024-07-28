import React, { useState } from 'react';
import './Section.css';

const Certifications = () => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
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
      <input type="file" accept="*/*" onChange={handleFileChange} multiple />
      <div className="files-list">
        {files.length > 0 && <h3>Uploaded Files:</h3>}
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
