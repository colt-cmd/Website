import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState(() => localStorage.getItem('profilePhoto'));

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        localStorage.setItem('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-photo">
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        style={{ display: 'none' }}
        id="photo-upload"
      />
      <label htmlFor="photo-upload">
        <div
          className="photo-circle"
          style={{ backgroundImage: `url(${photo})` }}
        >
          {!photo && <span>Upload Photo</span>}
        </div>
      </label>
    </div>
  );
};

export default ProfilePhoto;
