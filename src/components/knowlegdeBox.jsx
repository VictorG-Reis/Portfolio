/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

function KnowledgeBox({ image, text }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-30px)',
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} style={props} className="hover-transition">
      <div className="knowledge-box">
        <img src={image} alt={text} className="w-[100px]" />
      </div>
      <p className="hover-text">{text}</p>
    </animated.div>
  );
}

KnowledgeBox.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default KnowledgeBox;
