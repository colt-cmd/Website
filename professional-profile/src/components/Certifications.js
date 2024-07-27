import React, { useState } from 'react';

const Certifications = () => {
  const [certificationLink, setCertificationLink] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert('Certification uploaded: ' + file.name);
    }
  };

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
      <input
        type="text"
        value={certificationLink}
        onChange={(e) => setCertificationLink(e.target.value)}
        placeholder="Provide a link to certification"
      />
    </section>
  );
};

export default Certifications;
