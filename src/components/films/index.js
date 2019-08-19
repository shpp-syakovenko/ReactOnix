import React,{Component} from 'react'
import ListFilms from './listfilms'
import Loader from './loader'


class Films extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: null
        }
    }

// Get promise with api.themoviedb.org and set state data.
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?apikey=d71194ebc35d4c006794a0ccdd01b5e0&language=en-US&page=1')
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    data: result.results
                })
            })
            .catch(error => alert(error.message))
    };

    render() {

        const{data} = this.state;
        const films = data ? <ListFilms data={data}/> : <Loader/>;

        return(
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