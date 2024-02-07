/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function Header({
  title, animaSide, graus, durationTime,
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
      <div className="w-[30rem]">
        <h1 className="lg:text-4xl py-6 sm:text-3xl text-white ">{title}</h1>
        <hr className="flex justify-center items-center text-center sm:w-[50%] md:w-[50%] lg:w-[100%] h-1 mx-auto my-0 bg-white border-none rounded-3xl" />
      </div>
    </animated.div>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  graus: PropTypes.string.isRequired,
  animaSide: PropTypes.string.isRequired,
  durationTime: PropTypes.string.isRequired,
};

export default Header;
