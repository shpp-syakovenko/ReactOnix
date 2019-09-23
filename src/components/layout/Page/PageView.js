import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const PageView = ({ page }) => {
  return (
    <div className="page">
      <Header />
      {page}
      <Footer />
    </div>
  );
};

PageView.propTypes = {
  page: PropTypes.element.isRequired
};

export default PageView;
