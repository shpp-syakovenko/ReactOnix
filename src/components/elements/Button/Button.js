import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onButtonClick }) => {
  return (
    <button type="button" onClick={onButtonClick}>{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onButtonClick: PropTypes.func

};
Button.defaultProps = {
  title: 'Click',
  onButtonClick: undefined
};

export default Button;
