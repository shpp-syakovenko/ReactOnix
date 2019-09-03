import React,{Component} from 'react'
import YearsItems from './yearsItems'
import FormAdd from "./formAdd";
import startBio from "./startBio";

class Biography extends Component{
    constructor(props){
        super(props);


        this.state = {
            errorYear: false,
            text: '',
            year: '',
            biographyList: startBio
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
            years: +this.state.year,
            info: this.state.text,
        };

        this.setState({
            text: '',
            year: '',
            biographyList: {
                ...this.state.biographyList,
                [Object.keys(this.state.biographyList).length] : newItem
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

        let obj = {...this.state.biographyList};
        let arr = Object.values(obj);

        arr = arr.sort((a,b) => a.years - b.years);

        this.setState({
            biographyList: {...arr}

        })
    };
// Sorting array with bubble sort
    handleSortBubble = () => {

        let obj = {...this.state.biographyList};
        let arr = Object.values(obj);

        let n = arr.length;

        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (arr[j+1].years < arr[j].years){
                    let t = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = t;
                }
            }
        }

        this.setState({
            biographyList: {...arr}

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
        let biography = {...this.state.biographyList};
        delete biography[id];

        this.setState({
            biographyList: {...Object.values(biography)}
        })
    };

activeYears = (e) => {
    let arrTr = e.currentTarget.childNodes;
    let currentTr = e.target.closest('tr');
    if(currentTr === null || arrTr[0] === currentTr) return;
    for(let node of arrTr){
        if(node !== currentTr){
            node.classList.remove('activeYears');
        }
    }
    currentTr.classList.toggle('activeYears');
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
                            <table className="myBiography" >
                                <tbody onClick={this.activeYears}>
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
                                                 //activeYear = {this.activeYear}
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

