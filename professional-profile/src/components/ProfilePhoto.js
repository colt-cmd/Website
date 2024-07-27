import React, { useState } from 'react';

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="photo">
      <h2>Professional Photo</h2>
      {photo && <img src={photo} alt="Professional Photo" id="profile-photo" />}
      <input type="file" onChange={handlePhotoChange} accept="image/*" />
    </section>
  );
};

export default ProfilePhoto;
