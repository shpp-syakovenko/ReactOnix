import React from 'react'


const YearItem = (props) => {
    const {item, onButtonClick, index, onStartYear, onOverYear, onFinishYear} = props;
    return (
        <tr draggable
            onDragStart={() => onStartYear(index)}
            onDragOver={() => onOverYear(index)}
            onDragEnd={onFinishYear}
        >
            <td className='yearItem'>{item.years}</td>
            <td className='infoItem'>{item.info}</td>
            <td className='td-delete'>
                <button type='button' className='bth-delete' onClick={onButtonClick}>delete</button>
            </td>
        </tr>
    )
};

export default YearItem