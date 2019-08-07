import React,{Component} from 'react'
import YearsItems from './yearsItems'
import years from './year'
import FormAdd from "./formAdd";

class Biography extends Component{
    constructor(props){
        super(props);

        this.state = {
            errorYear: false,
            text: '',
            year: '',
            id: years.length,
            years: years
        };
    }

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
            year: +this.state.year,
            info: this.state.text,
            id: this.state.id
        };

        this.setState({
            years: this.state.years.concat(newItem),
            id: this.state.id + 1,
            text: '',
            year: ''
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
        this.setState({
            years: this.state.years.sort((a,b) => a.year - b.year)
        })
    };
// Sorting array with bubble sort
    handleSortBubble = () => {

        let n = this.state.years.length;
        const arr = this.state.years;
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (arr[j+1].year < arr[j].year){
                    let t = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = t;
                }
            }
        }
        this.setState({
            years: arr
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

// Sort array and delete element
    handleDelete = (id) => {
        for(let i = 0; i < this.state.years.length; i++){
            if(id === this.state.years[i].id){
                this.state.years.splice(i,1);
            }
        }

        this.setState({
            years: this.state.years
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

                                     <YearsItems years={this.state.years}
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

