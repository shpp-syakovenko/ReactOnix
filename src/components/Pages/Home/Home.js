import React, {Component} from 'react';
import HomeView from './HomeView';
import startBio from "./startBio";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            biographyList: startBio,
            text: "",
            year: "",
            errorYear: false,
            startYear: null,
            overYear: null,
            filmList: null,
            activeFilm: null,
            ctrl: null,
            alt: null,
            filmStart: null,
            filmOver: null
        }
    }

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
        const {filmStart, filmOver, filmList} = this.state;
        if ((filmList === null) || (filmOver === null)) return;

        let startFilm = filmList[filmStart];
        filmList[filmStart] = filmList[filmOver];
        filmList[filmOver] = startFilm;

        this.setState({
            filmList,
            filmOver: null,
            filmStart: null
        })
    };

// Make active film(ctrl + MouseLeft or alt + MouseLeft)
    handleActiveFilm = (id, e) => {
        this.setState({
            activeFilm: (id === this.state.activeFilm) ? null : id,
            ctrl: e.ctrlKey,
            alt: e.altKey
        });
    };

// Save start Year item
    onStartYear = (index) => {
        this.setState({
            startYear: index
        })
    };
// Save item over Years
    onOverYear = (index) => {
        this.setState({
            overYear: index
        })
    };
// Replace start item on the finish item
    onFinishYear = () => {
        const {biographyList, startYear, overYear} = this.state;
        let temp = biographyList[startYear];
        biographyList[startYear] = biographyList[overYear];
        biographyList[overYear] = temp;

        this.setState({
            biographyList,
            startYear: null,
            overYear: null
        })
    };

// Active element in the biographyList
    activeYear = (e) => {
        let arrTr = e.currentTarget.childNodes;
        let currentTr = e.target.closest('tr');

        if (currentTr === null || e.target.type === 'button') return;

        for (let node of arrTr) {
            if (node !== currentTr) {
                node.classList.remove('activeYears');
            }
        }
        currentTr.classList.toggle('activeYears');
    };

// Add element in the biographyList

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.year.length || !this.state.text.length) {
            return;
        }
        if (isNaN(+this.state.year)) {
            this.setState({
                errorYear: true
            });
            return;
        } else {
            this.setState({
                errorYear: false
            });
        }
        const newItem = {
            years: +this.state.year,
            info: this.state.text,
        };

        this.setState({
            text: '',
            year: '',
            biographyList: {
                ...this.state.biographyList,
                [Object.keys(this.state.biographyList).length]: newItem
            }
        });
    };

// Change <input/> writes in state
    handleChangeYear = (e) => {
        e.preventDefault();

        this.setState({
            year: e.target.value
        });
    };

// Change <textarea/> writes in state
    handleChangeText = (e) => {
        e.preventDefault();

        this.setState({
            text: e.target.value
        })
    };

// Reset form
    handleReset = () => {
        this.setState({
            text: "",
            year: ""
        });
    };

// Sort biography LIst

    handleSort = () => {
        const biographyList = {...this.state.biographyList};
        const arrList = Object.values(biographyList);

        const sortArrList = arrList.sort((a, b) => a.years - b.years);

        this.setState({
            biographyList: {...sortArrList}
        })
    };

// Sort Bubble biography List

    handleSortBubble = () => {
        const biographyList = {...this.state.biographyList};
        const arrList = Object.values(biographyList);
        let n = arrList.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (arrList[j + 1].years < arrList[j].years) {
                    let t = arrList[j + 1];
                    arrList[j + 1] = arrList[j];
                    arrList[j] = t;
                }
            }
        }

        this.setState({
            biographyList: {...arrList}
        })
    };

// Delete element from biography

    handleDelete = (id) => {
        const biographyList = {...this.state.biographyList};
        delete biographyList[id];

        this.setState({
            biographyList: {...Object.values(biographyList)}
        })
    };


// Get promise with api.themoviedb.org and set state data.
    componentDidMount() {

        fetch(process.env.REACT_APP_API_URL)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    filmList: result.results
                })
            })
            .catch(error => alert(error.message))
    };

    render() {
        return (
            <HomeView biographyList={this.state.biographyList}
                      filmList={this.state.filmList}
                      handleDelete={this.handleDelete}
                      handleSort={this.handleSort}
                      handleSortBubble={this.handleSortBubble}
                      handleChangeYear={this.handleChangeYear}
                      handleChangeText={this.handleChangeText}
                      handleReset={this.handleReset}
                      year={this.state.year}
                      text={this.state.text}
                      errorYear={this.state.errorYear}
                      handleSubmit={this.handleSubmit}
                      activeYear={this.activeYear}
                      onStartYear={this.onStartYear}
                      onOverYear={this.onOverYear}
                      onFinishYear={this.onFinishYear}
                      handleActiveFilm={this.handleActiveFilm}
                      alt={this.state.alt}
                      ctrl={this.state.ctrl}
                      activeFilm={this.state.activeFilm}
                      onDragStartFilm={this.onDragStartFilm}
                      onDragFinishFilm={this.onDragFinishFilm}
                      onDragOverFilm={this.onDragOverFilm}
            />
        )
    }
}

export default Home;