import React,{Component} from 'react'


class Film extends Component{

    render() {
        const {film} = this.props;
        const linkImg = 'https://image.tmdb.org/t/p/w200/' + film.poster_path;
        const title = film.title;
        const original_title = film.original_title;
        const overview = film.overview;
        const release_date = film.release_date;

        return(
            <li>
                <div className="row">
                    <div className="col-lg-2 col-4"><img src={linkImg}  alt={title}/></div>
                    <div className="col-lg-10 col-8">
                        <h3>{original_title}</h3>
                        <p>{overview}</p>
                        <div className='date'>Release date: <span>{release_date}</span></div>
                    </div>
                </div>

            </li>
        )
    }
}

export default Film