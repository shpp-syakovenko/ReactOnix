import React from 'react';

const Film = (props) => {

    const {filmList, handleActiveFilm, activeFilm, alt, ctrl, onDragStartFilm, onDragFinishFilm, onDragOverFilm} = props;
    const activeClass = ctrl ? 'filmItem ctrlClass' : alt ? 'filmItem altClass' : 'filmItem activeFilm';

    const films = filmList.slice(0, 10).map((film, index) =>

        <li key={index} onClick={(e) => handleActiveFilm(film.id, e)}
            draggable
            onDragStart={() => onDragStartFilm(index)}
            onDragOver={() => onDragOverFilm(index)}
            onDragEnd={onDragFinishFilm}
        >
            <div onClick={(e) => handleActiveFilm(film.id, e)}
                 className={activeFilm === film.id ? activeClass : "filmItem"}>
                <img src={'https://image.tmdb.org/t/p/w200/' + film.poster_path} alt={film.title}/>
                <div className='filmDescription'>
                    <h3>{film.original_title}</h3>
                    <p>{film.overview}</p>
                    <div className='date'><strong>Release date:</strong> <span>{film.release_date}</span></div>
                </div>
            </div>
        </li>
    );

    return (
        <ul>
            {films}
        </ul>
    )
};

export default Film;