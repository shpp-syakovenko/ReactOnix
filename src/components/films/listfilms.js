import React from 'react';
import Film from './film'


const ListFilms = (props) => {

    const {data, handleActive, active, onDragStartFilm, onDragFinishFilm, onDragOverFilm, ctrl, alt} = props;
    // Take the first 10 elements
    const dataNew = data.slice(0, 10);

    const films = dataNew.map((film, index) =>
        <Film key={film.id} film={film}
              handleActive={handleActive}
              activeBool={active === film.id}
              onDragStartFilm={onDragStartFilm}
              onDragFinishFilm={onDragFinishFilm}
              onDragOverFilm={onDragOverFilm}
              index={index}
              ctrl={ctrl}
              alt={alt}
        />
    );

    return (
        <ul className='listFilm'>
            {films}
        </ul>
    )

};

export default ListFilms;