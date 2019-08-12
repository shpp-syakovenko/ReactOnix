import React,{Component, Fragment} from 'react'
import YearItem from "./yearItem";


class YearsItems extends Component{

    render() {

        const{years,handleDeleteClick} = this.props;

        const arrList = [];
        for(let item in years){
            arrList.push(years[item]);
        }


        const yearsElement = arrList.map((item) =>

            <YearItem key={item.id} item={item}
                      onButtonClick = {handleDeleteClick.bind(this, item.id)}
            />
        );


        return(
            <Fragment>
                {yearsElement}
            </Fragment>

        )
    }

}


export default YearsItems;