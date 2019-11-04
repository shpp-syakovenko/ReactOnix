import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/layout/page.scss';
import ThemeContext from '../../../context/ThemeContext';
import PageView from './PageView';

const Page = ({ children }) => {
  const [pageUpVisible, setPageUpVisible] = useState(false);
  const [scrolled, setScrolled] = useState(window.pageYOffset);
  const [coords] = useState(document.documentElement.clientHeight);
  const [theme, setTheme] = useState('Light');

  // use Light theme
  const setThemeLight = () => {
    setTheme('Light');
  };

  // use Dark theme
  const setThemeDark = () => {
    setTheme('Dark');
  };

  const trackScroll = () => {
    setPageUpVisible(scrolled > coords);
    setScrolled(window.pageYOffset);
  };

  const handleClickPageUp = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(handleClickPageUp, 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', trackScroll);
    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  });

  return (
    <ThemeContext.Provider value={theme}>
      <PageView
        page={children}
        handleClickPageUp={handleClickPageUp}
        pageUpVisible={pageUpVisible}
        setThemeLight={setThemeLight}
        setThemeDark={setThemeDark}
      />
    </ThemeContext.Provider>
  );
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
