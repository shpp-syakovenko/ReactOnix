import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ isOpen }) => {
  return (
    <div className="menuItem">
      {
        isOpen ? (
          <ul>
            <li><NavLink exact activeClassName="activeMenuItem" to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName="activeMenuItem" to="/about">About</NavLink></li>
          </ul>
        ) : null
      }
    </div>
  );
};

MenuItem.propTypes = {
  isOpen: PropTypes.bool
};

MenuItem.defaultProps = {
  isOpen: false
};

export default MenuItem;
