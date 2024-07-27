import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = ({ title, descriptionPlaceholder }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    if (newFile) {
      setFiles([...files, newFile]);
    }
  };

  return (
    <div className="file-upload">
      <h2>{title}</h2>
      <input type="file" onChange={handleFileChange} />
      <textarea placeholder={descriptionPlaceholder}></textarea>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <a href={URL.createObjectURL(file)} download={file.name}>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
