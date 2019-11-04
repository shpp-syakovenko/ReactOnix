import React from 'react';
import AboutView from './AboutView';
import startAbout from '../../../mock/startAbout';

const About = () => {
  return (
    <AboutView dataAbout={startAbout} />
  );
};

export default About;
