import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = ({ onPhotoChange, initialPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(initialPhoto);

  useEffect(() => {
    if (initialPhoto) {
      setPreview(initialPhoto);
    }
  }, [initialPhoto]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    if (selectedFile) {
      localStorage.setItem('profilePhoto', preview);
      onPhotoChange(preview);
      setSelectedFile(null);
    }
  };

  return (
    <div className="profile-photo-container">
      <label htmlFor="photo-upload" className="photo-upload-label">
        {preview ? (
          <img src={preview} alt="Profile Preview" className="photo-circle" />
        ) : (
          <div className="photo-circle-placeholder">Upload Photo</div>
        )}
      </label>
      <input
        id="photo-upload"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      {selectedFile && (
        <button onClick={handleConfirm} className="confirm-button">Confirm</button>
      )}
    </div>
  );
};

export default ProfilePhoto;