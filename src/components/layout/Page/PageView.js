import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../../elements/Button/Button';


const PageView = ({
  page, handleClickPageUp, pageUpVisible, setThemeLight, setThemeDark
}) => {
  return (
    <div className="page">
      <div className="theme">
        <div className="themeMenu">
          <div className="themeButtonLight">
            <Button title="Light" onButtonClick={setThemeLight} />
          </div>
          <div className="themeButtonDark">
            <Button title="Dark" onButtonClick={setThemeDark} />
          </div>
        </div>
      </div>
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
  pageUpVisible: PropTypes.bool,
  setThemeLight: PropTypes.func,
  setThemeDark: PropTypes.func
};

PageView.defaultProps = {
  handleClickPageUp: undefined,
  pageUpVisible: false,
  setThemeLight: undefined,
  setThemeDark: undefined
};

export default PageView;
