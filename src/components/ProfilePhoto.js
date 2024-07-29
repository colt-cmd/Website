import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = ({ onPhotoChange, initialPhoto }) => {
  const [preview, setPreview] = useState(initialPhoto || null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const storedPhoto = localStorage.getItem('profilePhoto');
    if (storedPhoto) {
      setPreview(storedPhoto);
      onPhotoChange(storedPhoto);
    }
  }, [onPhotoChange]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setShowConfirm(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    if (preview) {
      localStorage.setItem('profilePhoto', preview);
      onPhotoChange(preview);
      setShowConfirm(false);
    }
  };

  const handleCancel = () => {
    setPreview(localStorage.getItem('profilePhoto') || null);
    setShowConfirm(false);
  };

  return (
    <div className="profile-photo-container">
      <label htmlFor="photo-upload" className="photo-upload-label">
        {preview ? (
          <img src={preview} alt="Profile" className="photo-circle" />
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
      {showConfirm && (
        <div className="confirm-buttons">
          <button onClick={handleConfirm} className="confirm-button">Confirm</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;