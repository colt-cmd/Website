import React, { useState } from 'react';

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
      <h2>Upload Profile Photo</h2>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && <img src={photo} alt="Profile" />}
    </div>
  );
};

export default ProfilePhoto;
