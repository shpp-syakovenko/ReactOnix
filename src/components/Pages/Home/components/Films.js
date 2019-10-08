import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Films = ({
  filmList, handleActiveFilm, activeFilm, onDragStartFilm, onDragFinishFilm, onDragOverFilm, handleKeyDown
}) => {
  return (
    <ul>
      {
        filmList
          .map((film, index) => (
            <li
              key={film.id}
              draggable
              onDragStart={() => onDragStartFilm(index)}
              onDragOver={() => onDragOverFilm(index)}
              onDragEnd={onDragFinishFilm}
            >
              <div
                onClick={(event) => handleActiveFilm(film.id, event)}
                onKeyDown={(event) => handleKeyDown(event)}
                role="menuitem"
                tabIndex={index}
                className={(activeFilm === film.id) ? 'filmItem activeFilm' : 'filmItem'}
              >
                <NavLink to={`film/${film.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt={film.title} />
                </NavLink>
                <div className="filmDescription">
                  <h3>{film.original_title}</h3>
                  <p>{film.overview}</p>
                  <div className="date">
                    <strong>Release date:</strong> 
                    {' '}
                    <span>{film.release_date}</span>
                  </div>
                  <div className="more">
                    <NavLink to={`film/${film.id}`}>
                      More...
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
          ))
      }
    </ul>
  );
};

Films.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.object),
  handleActiveFilm: PropTypes.func,
  activeFilm: PropTypes.number,
  onDragStartFilm: PropTypes.func,
  onDragFinishFilm: PropTypes.func,
  onDragOverFilm: PropTypes.func,
  handleKeyDown: PropTypes.func
};

Films.defaultProps = {
  filmList: undefined,
  handleActiveFilm: undefined,
  activeFilm: null,
  onDragStartFilm: undefined,
  onDragFinishFilm: undefined,
  onDragOverFilm: undefined,
  handleKeyDown: undefined
};

export default Films;
