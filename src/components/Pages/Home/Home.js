import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';
import startBio from '../../../mock/startBio';

const Home = () => {
  const [biographyList, setBiographyList] = useState(startBio);
  const [text, setText] = useState('');
  const [year, setYear] = useState('');
  const [errorYear, setErrorYear] = useState(false);
  const [startYear, setStartYear] = useState(null);
  const [overYear, setOverYear] = useState(null);
  const [filmList, setFilmList] = useState(null);
  const [activeFilm, setActiveFilm] = useState(null);
  const [filmStart, setFilmStart] = useState(null);
  const [filmOver, setFilmOver] = useState(null);

  // Get promise with api.themoviedb.org and set state data.
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}popular?${process.env.REACT_APP_APY_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((result) => {
        setFilmList(result.results);
      });
  }, []);

  // Save index for start film
  const onDragStartFilm = (index) => {
    setFilmStart(index);
  };

  // Save index for over film
  const onDragOverFilm = (index) => {
    setFilmOver(index);
  };

  // Replace start film on the finish film
  const onDragFinishFilm = () => {
    if ((filmList === null) || (filmOver === null)) return;

    const startFilm = filmList[filmStart];
    filmList[filmStart] = filmList[filmOver];
    filmList[filmOver] = startFilm;

    setFilmList(filmList);
    setFilmOver(null);
    setFilmStart(null);
  };

  // Make active film(ctrl + MouseLeft or alt + MouseLeft)
  const handleActiveFilm = (id, event) => {
    event.preventDefault();
    setActiveFilm((id === activeFilm) ? null : id);
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey) {
      event.target.classList.toggle('ctrlClass');
    }
    if (event.altKey) {
      event.target.classList.toggle('altClass');
    }
  };

  // Save start Year item
  const onStartYear = (index) => {
    setStartYear(index);
  };

  // Save item over Years
  const onOverYear = (index) => {
    setOverYear(index);
  };

  // Replace start item on the finish item
  const onFinishYear = () => {
    const temp = biographyList[startYear];
    biographyList[startYear] = biographyList[overYear];
    biographyList[overYear] = temp;

    setBiographyList(biographyList);
    setStartYear(null);
    setOverYear(null);
  };

  // Add element in the biographyList
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!year.length || !text.length || !(/\d+/.test(year))) {
      setErrorYear(true);
      return;
    }
    setErrorYear(false);

    const newItem = {
      years: +year,
      info: text,
    };

    setText('');
    setYear('');
    setBiographyList({
      ...biographyList,
      [Object.keys(biographyList).length]: newItem
    });
  };

  // Change <input/> writes in state
  const handleChangeYear = (event) => {
    event.preventDefault();
    setYear(event.target.value);
  };

  // Change <textarea/> writes in state
  const handleChangeText = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  // Reset form
  const handleReset = () => {
    setText('');
    setYear('');
  };

  // Sort biography LIst
  const handleSort = () => {
    const arrList = Object.values(biographyList);
    const sortArrList = arrList.sort((a, b) => a.years - b.years);

    setBiographyList({ ...sortArrList });
  };

  // Sort Bubble biography List
  const handleSortBubble = () => {
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

    setBiographyList({ ...arrList });
  };

  // Delete element from biography

  const handleDelete = (id) => {
    delete biographyList[id];

    setBiographyList({ ...Object.values(biographyList) });
  };
  return (
    <HomeView
      biographyList={biographyList}
      filmList={filmList}
      handleDelete={handleDelete}
      handleSort={handleSort}
      handleSortBubble={handleSortBubble}
      handleChangeYear={handleChangeYear}
      handleChangeText={handleChangeText}
      handleReset={handleReset}
      year={year}
      text={text}
      errorYear={errorYear}
      handleSubmit={handleSubmit}
      onStartYear={onStartYear}
      onOverYear={onOverYear}
      onFinishYear={onFinishYear}
      handleActiveFilm={handleActiveFilm}
      activeFilm={activeFilm}
      onDragStartFilm={onDragStartFilm}
      onDragFinishFilm={onDragFinishFilm}
      onDragOverFilm={onDragOverFilm}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default Home;
