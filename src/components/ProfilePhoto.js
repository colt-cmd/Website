import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState(() => localStorage.getItem('profilePhoto'));

  useEffect(() => {
    if (photo) {
      localStorage.setItem('profilePhoto', photo);
    } else {
      localStorage.removeItem('profilePhoto');
    }
  }, [photo]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-photo">
      <h2>Profile Photo</h2>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo ? (
        <img src={photo} alt="Profile" className="photo-circle" />
      ) : (
        <div className="photo-circle-placeholder">Profile</div>
      )}
    </div>
  );
};

export default ProfilePhoto;
