import React,{Component} from 'react'


class YearItem extends Component{

    render() {
        const {item, onButtonClick} = this.props;
        return(
            <tr>
                <td className='yearItem'>{item.year}</td>
                <td className='infoItem'>{item.info}</td>
                <td className='td-delete'><button className='bth-delete' onClick={onButtonClick}>delete</button></td>
            </tr>
        )
    }
}

export default YearItem