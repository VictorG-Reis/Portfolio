import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ProjectCard({
  image, projectName, description, bntLink,
}) {
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
      <Button name="Saiba mais" to={bntLink} className="project-card-button" />
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bntLink: PropTypes.string.isRequired,
};

export default ProjectCard;
