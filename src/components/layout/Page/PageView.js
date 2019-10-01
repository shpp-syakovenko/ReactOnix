import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../../elements/Button/Button';


const PageView = ({ page, handleClickPageUp, pageUpVisible }) => {
  return (
    <div className="page">
      <Header />
      {page}
      <Footer />
      {
        pageUpVisible && (
          <div className="pageUp">
            <Button title="PageUp" onButtonClick={handleClickPageUp} />
          </div>
        )
      }
    </div>
  );
};

PageView.propTypes = {
  page: PropTypes.element.isRequired,
  handleClickPageUp: PropTypes.func,
  pageUpVisible: PropTypes.bool
};

PageView.defaultProps = {
  handleClickPageUp: undefined,
  pageUpVisible: false
};

export default PageView;
