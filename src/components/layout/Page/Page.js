import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/layout/page.scss';
import ThemeContext from '../../../context/ThemeContext';
import PageView from './PageView';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageUpVisible: false,
      scrolled: window.pageYOffset,
      coords: document.documentElement.clientHeight,
      theme: 'Light'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.trackScroll);
  }

  setThemeLight = () => {
    this.setState({
      theme: 'Light'
    });
  };

  setThemeDark = () => {
    this.setState({
      theme: 'Dark'
    });
  };

  trackScroll = () => {
    const { scrolled, coords } = this.state;
    this.setState({
      pageUpVisible: scrolled > coords,
      scrolled: window.pageYOffset
    });
  };

  handleClickPageUp = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(this.handleClickPageUp, 0);
    }
  };

  render() {
    const { children } = this.props;
    const { pageUpVisible, theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <PageView
          page={children}
          handleClickPageUp={this.handleClickPageUp}
          pageUpVisible={pageUpVisible}
          setThemeLight={this.setThemeLight}
          setThemeDark={this.setThemeDark}
        />
      </ThemeContext.Provider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
