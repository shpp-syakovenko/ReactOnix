import React from 'react';
import PropTypes from 'prop-types';
import withActive from '../../../hoc/withActive';
import Biography from './components/Biography';
import FormAddBiography from './components/FormAddBiography';
import '../../../scss/pages/home.scss';
import Films from './components/Films';
import Loader from './components/Loader';
import ThemeContext from '../../../context/ThemeContext';

const HomeView = ({
  biographyList, filmList, handleDelete, handleSort, handleSortBubble, handleChangeYear, handleChangeText, handleReset,
  year, text, errorYear, handleSubmit, activeYear, onStartYear, onOverYear, onFinishYear,
  handleActiveFilm, activeFilm, onDragStartFilm, onDragFinishFilm, onDragOverFilm, handleKeyDown
}) => {
  return (
    <ThemeContext.Consumer>
      {
        (theme) => (
          <div className={`home homeTheme${theme}`}>
            <div className="biography">
              <div className="titleBiography">
                <h2 className={`titleBiography${theme}`}>My Biography</h2>
              </div>
              <div className="tableBiography">
                <Biography
                  years={biographyList}
                  handleDelete={handleDelete}
                  handleSort={handleSort}
                  handleSortBubble={handleSortBubble}
                  activeYear={activeYear}
                  onStartYear={onStartYear}
                  onOverYear={onOverYear}
                  onFinishYear={onFinishYear}
                />
                <FormAddBiography
                  handleChangeYear={handleChangeYear}
                  handleChangeText={handleChangeText}
                  handleReset={handleReset}
                  year={year}
                  text={text}
                  errorYear={errorYear}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
            <div className="film">
              <div className="titleFilm">
                <h2 className={`titleFilm${theme}`}>popular movies</h2>
              </div>
              <div className="listFilm">
                {
                  filmList ? (
                    <Films
                      filmList={filmList}
                      handleActiveFilm={handleActiveFilm}
                      activeFilm={activeFilm}
                      onDragStartFilm={onDragStartFilm}
                      onDragFinishFilm={onDragFinishFilm}
                      onDragOverFilm={onDragOverFilm}
                      handleKeyDown={handleKeyDown}
                    />
                  ) : <Loader />
                }
              </div>
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

HomeView.propTypes = {
  biographyList: PropTypes.objectOf(PropTypes.object),
  filmList: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
  handleSort: PropTypes.func,
  handleSortBubble: PropTypes.func,
  handleChangeYear: PropTypes.func,
  handleChangeText: PropTypes.func,
  handleReset: PropTypes.func,
  year: PropTypes.string,
  text: PropTypes.string,
  errorYear: PropTypes.bool,
  handleSubmit: PropTypes.func,
  activeYear: PropTypes.func,
  onStartYear: PropTypes.func,
  onOverYear: PropTypes.func,
  onFinishYear: PropTypes.func,
  handleActiveFilm: PropTypes.func,
  activeFilm: PropTypes.number,
  onDragStartFilm: PropTypes.func,
  onDragFinishFilm: PropTypes.func,
  onDragOverFilm: PropTypes.func,
  handleKeyDown: PropTypes.func
};

HomeView.defaultProps = {
  biographyList: undefined,
  filmList: null,
  handleDelete: undefined,
  handleSort: undefined,
  handleSortBubble: undefined,
  handleChangeYear: undefined,
  handleChangeText: undefined,
  handleReset: undefined,
  year: '',
  text: '',
  errorYear: false,
  handleSubmit: undefined,
  activeYear: undefined,
  onStartYear: undefined,
  onOverYear: undefined,
  onFinishYear: undefined,
  handleActiveFilm: undefined,
  activeFilm: null,
  onDragStartFilm: undefined,
  onDragFinishFilm: undefined,
  onDragOverFilm: undefined,
  handleKeyDown: undefined
};

export default withActive(HomeView);
