import React from 'react';
import PropTypes from 'prop-types';

import '../../../scss/pages/about.scss';

const AboutView = ({ dataAbout }) => {
  return (
    <div className="wrapperAbout">
      <div className="about">
        <h2>About me</h2>
        <p>the information about me!</p>
        <ul>
          {
            dataAbout.map((data) => <li key={data.id}>{data.info}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

AboutView.propTypes = {
  dataAbout: PropTypes.arrayOf(PropTypes.object)
};

AboutView.defaultProps = {
  dataAbout: null
};

export default AboutView;
