import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <div className="w-[30rem]">
      <h1 className="text-6xl py-6 sm:text-4xl text-white">{title}</h1>
      <hr className="flex justify-center items-center text-center sm:w-[80%] md:w-[50%] lg:w-[100%] h-1 mx-auto my-0 bg-white border-none rounded-3xl" />
    </div>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
