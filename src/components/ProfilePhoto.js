import React, { useState } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState(localStorage.getItem('profilePhoto'));

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
      localStorage.setItem('profilePhoto', reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-photo">
      <label htmlFor="photo-upload" className="photo-upload-label">
        {photo ? (
          <img src={photo} alt="Profile" className="profile-photo-img" />
        ) : (
          <div className="photo-placeholder">Profile</div>
        )}
      </label>
      <input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} />
    </div>
  );
};

export default ProfilePhoto;
