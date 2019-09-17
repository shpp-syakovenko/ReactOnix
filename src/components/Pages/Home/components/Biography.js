import React from 'react';
import Button from "../../../elements/Button/Button";


const Biography = (props) => {

    const {years, handleDelete, handleSort, handleSortBubble, activeYear, onStartYear, onOverYear, onFinishYear} = props;

    const yearsElements = Object.entries(years).map(([key, item]) =>

        <tr key={key} draggable
            onDragStart={() => onStartYear(key)}
            onDragOver={() => onOverYear(key)}
            onDragEnd={onFinishYear}

        >
            <td className='yearItem'>{item.years}</td>
            <td className='infoItem'>{item.info}</td>
            <td className='delete'>
                <button type='button' onClick={() => {
                    handleDelete(key)
                }}>&times;</button>
            </td>
        </tr>
    );
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <div>
                        Year <Button title={'sort'} onButtonClick={handleSort}/>
                        <Button title={'sortBubble'} onButtonClick={handleSortBubble}/>
                    </div>
                </th>
                <th colSpan="2">Information</th>
            </tr>
            </thead>
            <tbody onClick={activeYear}>
            {yearsElements}
            </tbody>
        </table>
    )
};

export default Biography;