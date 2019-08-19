import React,{Component} from 'react';
import Film from './film'


class ListFilms extends Component{
    render(){

        const{data} = this.props;
        // Take the first 10 elements
        const dataNew = data.slice(0,10);

        const films = dataNew.map(film =>
            <Film key={film.id} film={film} />
        );

        return(
            <ul className='listFilm'>
                {films}
            </ul>
        )
    }
}

export default ListFilms;