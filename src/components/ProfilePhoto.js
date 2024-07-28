import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = () => {
  const [profilePhoto, setProfilePhoto] = useState('');

  // Load profile photo from local storage on mount
  useEffect(() => {
    const storedPhoto = localStorage.getItem('profilePhoto');
    if (storedPhoto) {
      setProfilePhoto(storedPhoto);
    }
  }, []);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photoData = reader.result;
        setProfilePhoto(photoData);
        localStorage.setItem('profilePhoto', photoData);
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
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
    </div>
  );
};

export default ProfilePhoto;
