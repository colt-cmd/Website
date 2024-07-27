import React, { useState } from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
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
          <div className="photo-placeholder">Upload Photo</div>
        )}
      </label>
      <input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} />
    </div>
  );
};

export default ProfilePhoto;
