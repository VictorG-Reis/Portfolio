import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button({ name, to = '#' }) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <button type="button" className="button">
        {name}
      </button>
    </a>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired, // The 'to' prop is optional, and should be a string if provided
};

export default Button;
