import React from 'react';
import Biography from "./components/Biography";
import FormAddBiography from "./components/FormAddBiography";
import '../../../assets/scss/pages/home.scss';
import Film from "./components/Film";
import Loader from "./components/Loader";


const HomeView = (props) => {
    const {
        biographyList, filmList, handleDelete, handleSort, handleSortBubble, handleChangeYear, handleChangeText, handleReset,
        year, text, errorYear, handleSubmit, activeYear, onStartYear, onOverYear, onFinishYear,
        handleActiveFilm, activeFilm, alt, ctrl, onDragStartFilm, onDragFinishFilm, onDragOverFilm
    } = props;

    return (
        <div className='home'>
            <div className='biography'>
                <div className='titleBiography'>
                    <h2>My Biography</h2>
                </div>
                <div className='tableBiography'>
                    <Biography years={biographyList}
                               handleDelete={handleDelete}
                               handleSort={handleSort}
                               handleSortBubble={handleSortBubble}
                               activeYear={activeYear}
                               onStartYear={onStartYear}
                               onOverYear={onOverYear}
                               onFinishYear={onFinishYear}
                    />
                    <FormAddBiography handleChangeYear={handleChangeYear}
                                      handleChangeText={handleChangeText}
                                      handleReset={handleReset}
                                      year={year}
                                      text={text}
                                      errorYear={errorYear}
                                      handleSubmit={handleSubmit}

                    />
                </div>
            </div>
            <div className='film'>
                <div className='titleFilm'>
                    <h2>popular movies</h2>
                </div>
                <div className='listFilm'>
                    {
                        filmList ? <Film filmList={filmList}
                                         handleActiveFilm={handleActiveFilm}
                                         activeFilm={activeFilm}
                                         alt={alt}
                                         ctrl={ctrl}
                                         onDragStartFilm={onDragStartFilm}
                                         onDragFinishFilm={onDragFinishFilm}
                                         onDragOverFilm={onDragOverFilm}

                        /> : <Loader/>
                    }
                </div>
            </div>
        </div>
    )
};

export default HomeView;