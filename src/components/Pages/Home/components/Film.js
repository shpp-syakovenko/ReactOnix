import React from 'react';
import PropTypes from 'prop-types';

const Film = ({
  filmList, handleActiveFilm, activeFilm, onDragStartFilm, onDragFinishFilm, onDragOverFilm, handleKeyDown
}) => {
  return (
    <ul>
      {
        filmList.slice(0, 10)
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
                <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt={film.title} />
                <div className="filmDescription">
                  <h3>{film.original_title}</h3>
                  <p>{film.overview}</p>
                  <div className="date">
                    <strong>Release date:</strong> 
                    {' '}
                    <span>{film.release_date}</span>
                  </div>
                </div>
              </div>
            </li>
          ))
      }
    </ul>
  );
};

Film.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.object),
  handleActiveFilm: PropTypes.func,
  activeFilm: PropTypes.number,
  onDragStartFilm: PropTypes.func,
  onDragFinishFilm: PropTypes.func,
  onDragOverFilm: PropTypes.func,
  handleKeyDown: PropTypes.func
};

Film.defaultProps = {
  filmList: undefined,
  handleActiveFilm: undefined,
  activeFilm: null,
  onDragStartFilm: undefined,
  onDragFinishFilm: undefined,
  onDragOverFilm: undefined,
  handleKeyDown: undefined
};

export default Film;
