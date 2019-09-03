import React, {Component} from 'react'
import ListFilms from './listfilms'
import Loader from './loader'


class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            active: null,
            ctrl: null,
            alt: null,
            filmStart: null,
            filmOver: null
        }
    }

// Make active film(ctrl + MouseLeft or alt + MouseRight)
    handleActive = (id, e) => {
        this.setState({
            active: (id === this.state.active) ? null : id,
            ctrl: e.ctrlKey,
            alt: e.altKey
        });
    };

// Save index for start film
    onDragStartFilm = (index) => {
        this.setState({
            filmStart: index
        })
    };

// Save index for over film
    onDragOverFilm = (index) => {
        this.setState({
            filmOver: index
        })
    };

// Replace start film on the finish film
    onDragFinishFilm = () => {
        const {filmStart, filmOver, data} = this.state;
        if ((data === null) || (filmOver === null)) return;

        let startFilm = data[filmStart];
        data[filmStart] = data[filmOver];
        data[filmOver] = startFilm;

        this.setState({
            data,
            filmOver: null,
            filmStart: null
        })
    };


// Get promise with api.themoviedb.org and set state data.
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?apikey=' + process.env.APY_KEY + '&language=en-US&page=1')
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    data: result.results
                })
            })
            .catch(error => alert(error.message))
    };

    render() {

        const {data} = this.state;
        const films = data ? <ListFilms data={data}
                                        handleActive={this.handleActive}
                                        active={this.state.active}
                                        onDragStartFilm={this.onDragStartFilm}
                                        onDragFinishFilm={this.onDragFinishFilm}
                                        onDragOverFilm={this.onDragOverFilm}
                                        ctrl={this.state.ctrl}
                                        alt={this.state.alt}
        /> : <Loader/>;

        return (
            <section id='films'>
                <div className='container'>
                    <h2 className="title-section">Popular films</h2>
                    <p className="title-description">The information films!</p>
                    {films}
                </div>
            </section>
        )
    }
}

export default Films;