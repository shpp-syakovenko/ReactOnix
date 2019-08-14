import React,{Component, Fragment} from 'react'
import YearItem from "./yearItem";


class YearsItems extends Component{

    render() {

        const{years,handleDeleteClick} = this.props;

        const yearsElement = Object.entries(years).map(([key,item]) =>

            <YearItem key={key} item={item}
                                onButtonClick = {handleDeleteClick.bind(this, key)}
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