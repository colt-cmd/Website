import React from 'react';

const Projects = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert('Project uploaded: ' + file.name);
    }
  };

  return (
    <section id="projects">
      <h2>Projects & Work Examples</h2>
      <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
    </section>
  );
};

export default Projects;
