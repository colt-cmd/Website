import React, { useState } from 'react';
import './Section.css';

const Projects = () => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [showUpload, setShowUpload] = useState(false);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  return (
    <div className="section">
      <h2>Projects</h2>
      <textarea
        placeholder="Describe your project..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={() => setShowUpload(!showUpload)}>Upload File</button>
      {showUpload && (
        <>
          <input type="file" accept="*/*" onChange={handleFileChange} multiple />
          <div className="files-list">
            {files.length > 0 && <h3>Uploaded Files:</h3>}
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
