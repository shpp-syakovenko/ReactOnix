import React, { Component } from 'react';
import AboutView from './AboutView';
import startAbout from '../../../mock/startAbout';

class About extends Component {
  render() {
    return (
      <AboutView dataAbout={startAbout} />
    );
  }
}

export default About;
