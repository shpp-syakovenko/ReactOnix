import React from 'react';
import PropTypes from 'prop-types';

import MenuToggle from './components/MenuToggle';
import MenuItem from './components/MenuItem';
import ThemeContext from '../../../context/ThemeContext';

import '../../../scss/layout/header.scss';
import water from '../../../assets/images/water.png';

const HeaderView = ({ isOpen, handleMenu }) => {
  return (
    <ThemeContext.Consumer>
      {
        (theme) => (
          <div className={`wrapperHeader wrapperHeader${theme}`}>
            <div className="header">
              <div className="topHeader">
                <div className="logo">
                  Sh
                  <span>o</span>
                  pno
                </div>
                <MenuToggle isOpen={isOpen} handleMenu={handleMenu} />
                <MenuItem isOpen={isOpen} />

              </div>
              <div className="titleHeader">
                <h1 className={`titleHeaderTheme${theme}`}>
                  Say Hello to
                  <span>SHOPNO!</span>
                  <br />
                  <span>Agency</span>
                  CORPORATE SHOPNO Theme
                </h1>
              </div>
              <div className="bottomHeader">
                <a className={`bottomHeaderTheme${theme}`} href="/">contact us</a>
                <img src={water} alt="water" />
              </div>
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

HeaderView.propTypes = {
  isOpen: PropTypes.bool,
  handleMenu: PropTypes.func
};

HeaderView.defaultProps = {
  isOpen: false,
  handleMenu: undefined
};

export default HeaderView;
