import React, { useState, useEffect } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = ({ onPhotoChange }) => {
  const [photo, setPhoto] = useState(() => localStorage.getItem('profilePhoto'));

  useEffect(() => {
    if (photo) {
      localStorage.setItem('profilePhoto', photo);
      onPhotoChange(photo); // Notify parent component about the photo change
    } else {
      localStorage.removeItem('profilePhoto');
    }
  }, [photo, onPhotoChange]);

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
    </div>
  );
};

export default ProfilePhoto;
