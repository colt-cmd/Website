import React, { useState } from 'react';
import './Section.css';

const Section = ({ title }) => {
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([]);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleLinkChange = (event) => {
    setLinks(event.target.value.split(','));
  };

  return (
    <div className="section">
      <h2>{title}</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <textarea
        placeholder={`Describe your ${title.toLowerCase()}...`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add links (comma separated)"
        onChange={handleLinkChange}
      />
      <div className="files-list">
        {files.length > 0 && <h3>Uploaded Files:</h3>}
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      <div className="links-list">
        {links.length > 0 && <h3>Links:</h3>}
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.trim()} target="_blank" rel="noopener noreferrer">
                {link.trim()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section;
