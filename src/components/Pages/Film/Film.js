import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilmView from './FilmView';
import Loader from '../Home/components/Loader';

class Film extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmData: null
    };
  }

  componentDidMount() {
    const { match } = this.props;

    fetch(`${process.env.REACT_APP_BASE_URL}${match.params.filmId}?${process.env.REACT_APP_APY_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          filmData: response
        });
      });
  }

  render() {
    const { filmData } = this.state;
    return (
      <div>
        {
          filmData ? <FilmView filmData={filmData} /> : <Loader />
        }
      </div>
    );
  }
}

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
