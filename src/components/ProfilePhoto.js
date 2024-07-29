import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';
import defaultPhoto from 'C:\Users\colt\Documents\GitHub\Website\src\components\IMG_2159.JPG'; // Assuming the path to the image

const ProfilePhoto = ({ onPhotoChange }) => {
  const [preview, setPreview] = useState(defaultPhoto);

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
        const imageUrl = reader.result;
        setPreview(imageUrl);
        localStorage.setItem('profilePhoto', imageUrl);
        onPhotoChange(imageUrl);
      };
      reader.readAsDataURL(file);
    }
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
    </div>
  );
};

export default ProfilePhoto;
