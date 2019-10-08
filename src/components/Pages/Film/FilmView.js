import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/pages/film.scss';

const FilmView = ({ filmData }) => {
  return (
    <div className="filmAbout">
      <div className="title">
        {filmData.original_title}
      (
        <span>
          {filmData.release_date}
        </span>
       )
      </div>
      <img src={`https://image.tmdb.org/t/p/w500/${filmData.poster_path}`} alt="poster" />
      <div className="originalLanguage">
        <span>
          Original language:
        </span>
        {` ${filmData.original_language}`}
      </div>
      <div className="homepage">
        <span>
          Homepage:
        </span>
        <a href={filmData.homepage}> Link to Homepage</a>
      </div>
      <div className="releaseDate">
        <span>
          release Date:
        </span>
        {` ${filmData.release_date}`}
      </div>
      <div className="popularity">
        <span>
          popularity:
        </span>
        {` ${filmData.popularity}`}
      </div>
      <div className="filmDesc">
        <span>
          Overview:
        </span>
        {` ${filmData.overview}`}
      </div>
      <div className="productionCompanies">
        <span>
          Production companies:
        </span>
        {
          filmData.production_companies.map((company) => ` ${company.name},`)
        }
        <div className="logoPathCompany">
          {
            filmData.production_companies.map((company) => (
              company.logo_path ? (
                <img
                  onLoad={() => {}}
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                  alt="poster"
                />
              ) : null
            ))
          }
        </div>
      </div>
    </div>
  );
};

FilmView.propTypes = {
  filmData: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    original_language: PropTypes.string,
    homepage: PropTypes.string,
    production_companies: PropTypes.array,
    popularity: PropTypes.number
  })
};

FilmView.defaultProps = {
  filmData: undefined
};

export default FilmView;
