import React from 'react';

const Button = (props) => {
    const {title, onButtonClick} = props;
    return(
        <button type='button' onClick={onButtonClick}>{title}</button>
    )
};

export default Button;