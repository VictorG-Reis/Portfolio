import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ProjectBox({ image, projectName, description }) {
  return (
    <div className=" project-box animationBox">
      <img src={image} alt="costs project" className="w-[100%] h-[70%]" />
      <h1 className="h-[10%] text-center text-3xl title-Project drop-shadow-sm">{projectName}</h1>
      <h2 className="
              h-[10%]
              text-center
              text-xl
              subtitle-Project
              drop-shadow-sm
              "
      >
        {description}
      </h2>
      <Button name="Saiba mais" to="https://github.com/VictorG-Reis/Costs_ReactJS" className="project-card-button" />
    </div>
  );
}

ProjectBox.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectBox;
