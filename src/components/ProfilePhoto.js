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
      <input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && <img src={photo} alt="Profile" className="profile-photo-img" />}
    </div>
  );
};

export default ProfilePhoto;
