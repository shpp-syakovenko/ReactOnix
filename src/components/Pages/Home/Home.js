import React, { Component } from 'react';
import HomeView from './HomeView';
import startBio from '../../../mock/startBio';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      biographyList: startBio,
      text: '',
      year: '',
      errorYear: false,
      startYear: null,
      overYear: null,
      filmList: null,
      activeFilm: null,
      filmStart: null,
      filmOver: null
    };
  }

  // Get promise with api.themoviedb.org and set state data.
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BASE_URL}popular?${process.env.REACT_APP_APY_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          filmList: result.results
        });
      });
  }

  // Save index for start film
  onDragStartFilm = (index) => {
    this.setState({
      filmStart: index
    });
  };

  // Save index for over film
  onDragOverFilm = (index) => {
    this.setState({
      filmOver: index
    });
  };

  // Replace start film on the finish film
  onDragFinishFilm = () => {
    const { filmStart, filmOver, filmList } = this.state;
    if ((filmList === null) || (filmOver === null)) return;

    const startFilm = filmList[filmStart];
    filmList[filmStart] = filmList[filmOver];
    filmList[filmOver] = startFilm;

    this.setState({
      filmList,
      filmOver: null,
      filmStart: null
    });
  };

  // Make active film(ctrl + MouseLeft or alt + MouseLeft)
  handleActiveFilm = (id, event) => {
    event.preventDefault();
    const { activeFilm } = this.state;
    this.setState({
      activeFilm: (id === activeFilm) ? null : id
    });
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey) {
      event.target.classList.toggle('ctrlClass');
    }
    if (event.altKey) {
      event.target.classList.toggle('altClass');
    }
  };

  // Save start Year item
  onStartYear = (index) => {
    this.setState({
      startYear: index
    });
  };

  // Save item over Years
  onOverYear = (index) => {
    this.setState({
      overYear: index
    });
  };

  // Replace start item on the finish item
  onFinishYear = () => {
    const { biographyList, startYear, overYear } = this.state;
    const temp = biographyList[startYear];
    biographyList[startYear] = biographyList[overYear];
    biographyList[overYear] = temp;

    this.setState({
      biographyList,
      startYear: null,
      overYear: null
    });
  };

  // Add element in the biographyList

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, year, biographyList } = this.state;

    if (!year.length || !text.length || !(/\d+/.test(year))) {
      this.setState({
        errorYear: true
      });
      return;
    }
    this.setState({
      errorYear: false
    });
    
    const newItem = {
      years: +year,
      info: text,
    };

    this.setState({
      text: '',
      year: '',
      biographyList: {
        ...biographyList,
        [Object.keys(biographyList).length]: newItem
      }
    });
  };

  // Change <input/> writes in state
  handleChangeYear = (event) => {
    event.preventDefault();

    this.setState({
      year: event.target.value
    });
  };

  // Change <textarea/> writes in state
  handleChangeText = (event) => {
    event.preventDefault();

    this.setState({
      text: event.target.value
    });
  };

  // Reset form
  handleReset = () => {
    this.setState({
      text: '',
      year: ''
    });
  };

  // Sort biography LIst

  handleSort = () => {
    const { biographyList } = this.state;
    const arrList = Object.values(biographyList);

    const sortArrList = arrList.sort((a, b) => a.years - b.years);

    this.setState({
      biographyList: { ...sortArrList }
    });
  };

  // Sort Bubble biography List

  handleSortBubble = () => {
    const { biographyList } = this.state;
    const arrList = Object.values(biographyList);
    const n = arrList.length;

    for (let i = 0; i < n - 1; i += 1) {
      for (let j = 0; j < n - 1 - i; j += 1) {
        if (arrList[j + 1].years < arrList[j].years) {
          const t = arrList[j + 1];
          arrList[j + 1] = arrList[j];
          arrList[j] = t;
        }
      }
    }

    this.setState({
      biographyList: { ...arrList }
    });
  };

  // Delete element from biography

  handleDelete = (id) => {
    const { biographyList } = this.state;
    delete biographyList[id];

    this.setState({
      biographyList: { ...Object.values(biographyList) }
    });
  };

  render() {
    const {
      biographyList,
      filmList,
      year,
      text,
      errorYear,
      activeFilm
    } = this.state;

    return (
      <HomeView
        biographyList={biographyList}
        filmList={filmList}
        handleDelete={this.handleDelete}
        handleSort={this.handleSort}
        handleSortBubble={this.handleSortBubble}
        handleChangeYear={this.handleChangeYear}
        handleChangeText={this.handleChangeText}
        handleReset={this.handleReset}
        year={year}
        text={text}
        errorYear={errorYear}
        handleSubmit={this.handleSubmit}
        onStartYear={this.onStartYear}
        onOverYear={this.onOverYear}
        onFinishYear={this.onFinishYear}
        handleActiveFilm={this.handleActiveFilm}
        activeFilm={activeFilm}
        onDragStartFilm={this.onDragStartFilm}
        onDragFinishFilm={this.onDragFinishFilm}
        onDragOverFilm={this.onDragOverFilm}
        handleKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default Home;
