import React from 'react';
import PropTypes from 'prop-types';


const MenuToggle = ({ isOpen, handleMenu }) => {
  return (
    <div className="menu">
      <a href="/" className={`${'toggle-mnu'}${isOpen ? ' on' : ''}`} onClick={handleMenu}>
        <span />
      </a>
    </div>
  );
};

MenuToggle.propTypes = {
  isOpen: PropTypes.bool,
  handleMenu: PropTypes.func
};

MenuToggle.defaultProps = {
  isOpen: false,
  handleMenu: undefined
};

export default MenuToggle;
