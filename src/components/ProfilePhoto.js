import React, { useState, useEffect } from 'react';

const ProfilePhoto = ({ onPhotoChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedPhoto = localStorage.getItem('profilePhoto');
    if (storedPhoto) {
      setPreview(storedPhoto);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Save the selected file to localStorage or backend
      localStorage.setItem('profilePhoto', preview);
      onPhotoChange(preview);
      setSelectedFile(null);
    }
  };

  return (
    <div className="profile-photo-container">
      <div>
        {preview ? (
          <img src={preview} alt="Profile Preview" className="photo-circle" />
        ) : (
          <div className="photo-circle-placeholder">Profile</div>
        )}
        <input type="file" onChange={handleFileChange} />
        {selectedFile && (
          <button onClick={handleUpload}>Confirm</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePhoto;
