import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilmView from './FilmView';
import Loader from '../Home/components/Loader';

const Film = ({ match }) => {
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}${match.params.filmId}?${process.env.REACT_APP_APY_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        setFilmData(response);
      });
  }, [match.params.filmId]);

  return (
    <div>
      {
        filmData ? <FilmView filmData={filmData} /> : <Loader />
      }
    </div>
  );
};

Film.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      filmId: PropTypes.string
    })
  }),
};

Film.defaultProps = {
  match: PropTypes.shape({
    path: undefined,
    url: undefined,
    isExact: undefined,
    params: PropTypes.PropTypes.shape({
      filmId: ''
    })
  }),
};

export default withRouter(Film);
