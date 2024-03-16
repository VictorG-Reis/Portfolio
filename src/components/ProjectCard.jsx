/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

function ProjectCard({
  image, projectName, description, GitHubLink, WebSiteLink, animaSide, graus, durationTime,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? `translate${animaSide}(0)`
      : `translate${animaSide}(${graus})`,
    config: {
      duration: durationTime,
    },
  });

  return (
    <animated.div ref={ref} style={props} className="hover-transition">
      <div className=" project-box animationBox">
        <img src={image} alt="costs project" className="w-[100%] h-[70%]" />
        <h1 className="h-[10%] text-center lg:text-3xl title-Project drop-shadow-sm sm:text-xl">{projectName}</h1>
        <h2 className="
              h-[10%]
              text-center
              lg:text-lg
              subtitle-Project
              drop-shadow-sm
              sm:text-base
              "
        >
          {description}
        </h2>
        <Button name="GitHub" to={GitHubLink} className="project-card-button w-40" />
        <Button name="Website" to={WebSiteLink} className="project-card-button w-40 mx-3" />
      </div>
    </animated.div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  GitHubLink: PropTypes.string.isRequired,
  WebSiteLink: PropTypes.string.isRequired,
  graus: PropTypes.string.isRequired,
  animaSide: PropTypes.string.isRequired,
  durationTime: PropTypes.string.isRequired,
};

export default ProjectCard;
