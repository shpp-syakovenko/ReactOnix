import React,{Component} from 'react'
import YearsItems from './yearsItems'
import FormAdd from "./formAdd";

class Biography extends Component{
    constructor(props){
        super(props);

        this.element = 0;

        this.state = {
            errorYear: false,
            text: '',
            year: '',
            element: 0,
            biographyList: {
                ...this.createStartList(1988, 'Дата рождения'),
                ...this.createStartList(1995, 'Первый день в школе №29'),
                ...this.createStartList(2010, 'Срочная служба в армии в/ч 3007'),
                ...this.createStartList(2005, 'Поступление в ГЛАУ'),
                ...this.createStartList(2017, 'Учеба в школе програмирования Ш++'),
                ...this.createStartList(2011, 'Контрактная служба в Национально гвардии в/ч 3011'),
            }
        };
    }

// Add start list information for me
    createStartList = (year, info) => {
       return  this.createObj('element' + this.element, {id: this.element, year: year, info: info})
    };

// Create element by list
    createObj = (index, v) => {
        let obj ={};
        obj[index] = v;
        this.element++;
        return obj;
    };

// Add new element in array
    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.year.length || !this.state.text.length){
            return;
        }
        if(isNaN(+this.state.year)){
            this.setState({
                errorYear: true
            });
            return;
        }else{
            this.setState({
                errorYear: false
            });
        }

        const newItem = {
            id: this.element,
            year: +this.state.year,
            info: this.state.text,

        };

        this.setState({
            text: '',
            year: '',
            biographyList: {
                ...this.state.biographyList,
                ...this.createObj('element' + this.element, newItem)
            }
        });
    };

// Change <input/> writes in state
    handleChangeYear = (e) =>{
        e.preventDefault();
        this.setState({
            year: e.target.value
        })
    };

// Change <textarea/> writes in state
    handleChangeInfo = (e) =>{
        e.preventDefault();
        this.setState({
            text: e.target.value
        })
    };

// Sort array
    handleSort = () => {

        let obj = this.state.biographyList;
        let arr = [];
        for(let key in obj){
            arr.push(obj[key])
        }

        arr = arr.sort((a,b) => a.year - b.year);

        obj = {...arr};
        this.sortById(obj);

        this.setState({
            biographyList: obj

        })
    };
// Sorting array with bubble sort
    handleSortBubble = () => {


        let obj = this.state.biographyList;
        let arr = [];
        for(let key in obj){
            arr.push(obj[key])
        }

        let n = arr.length;


        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (arr[j+1].year < arr[j].year){
                    let t = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = t;
                }
            }
        }
        obj = {...arr};
        this.sortById(obj);

        this.setState({
            biographyList: obj

        })
    };

// Reset form
    handelReset = (e) => {
        e.preventDefault();
        this.setState({
            text: '',
            year: ''
        });

    };
// Sort keys and id
    sortById = (obj) => {
        this.element = 0;

        for(let key in obj){
            obj['element' + this.element] = obj[key];
            if('element' + this.element !== key){
                delete obj[key];
            }
            obj['element' + this.element].id = this.element;
            this.element++;
        }

    };

// Sort array and delete element
    handleDelete = (id) => {
        let biography = this.state.biographyList;
        delete biography['element' + id];

        this.sortById(biography);

        this.setState({
            biography: biography
        })
    };

    render() {
        return(
            <section id="biography">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="title-section">My biography</h2>
                            <p className="title-description">The information about me!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="myBiography">
                                <tbody>
                                    <tr>
                                        <th>
                                            <div>
                                                Year <button className='bth-sort' onClick={this.handleSort}>sort</button>
                                                <button className='bth-sort' onClick={this.handleSortBubble}>sortBubble</button>
                                            </div>

                                        </th>
                                        <th colSpan="2">Information</th>
                                    </tr>

                                     <YearsItems years={this.state.biographyList}
                                                 handleDeleteClick = {this.handleDelete}
                                     />

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-12">

                            <FormAdd handleSubmit = {this.handleSubmit}
                                     handleChangeYear = {this.handleChangeYear}
                                     year = {this.state.year}
                                     errorYear = {this.state.errorYear}
                                     handleChangeInfo = {this.handleChangeInfo}
                                     text = {this.state.text}
                                     handelReset = {this.handelReset}
                            />

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Biography;

