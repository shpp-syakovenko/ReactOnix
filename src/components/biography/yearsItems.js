import React, {Component, Fragment} from 'react'
import YearItem from "./yearItem";


class YearsItems extends Component {

    render() {

        const {years, handleDeleteClick, onStartYear, onOverYear, onFinishYear} = this.props;

        const yearsElement = Object.entries(years).map(([key, item]) =>

            <YearItem key={key}
                      item={item}
                      index={key}
                      onButtonClick={handleDeleteClick.bind(this, key)}
                      onStartYear={onStartYear}
                      onOverYear={onOverYear}
                      onFinishYear={onFinishYear}
            />
        );

        return (
            <Fragment>
                {yearsElement}
            </Fragment>
        )
    }
}

export default YearsItems;