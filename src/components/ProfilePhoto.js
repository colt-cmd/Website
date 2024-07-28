import React, { useState } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-photo-container">
      {profilePhoto ? (
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      ) : (
        <div className="placeholder">Profile</div>
      )}
      <input type="file" onChange={handlePhotoChange} />
    </div>
  );
};

export default ProfilePhoto;
