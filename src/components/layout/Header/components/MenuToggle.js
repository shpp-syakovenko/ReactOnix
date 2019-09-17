import React from 'react';


const MenuToggle = (props) => {
    const {isOpen, handleMenu} = props;

    const buttonToggle = isOpen ?
        <a href="/" className="toggle-mnu on" onClick={handleMenu}><span/></a>
        : <a href="/" className="toggle-mnu" onClick={handleMenu}><span/></a>;
    return (
        <div className='menu'>
            {buttonToggle}
        </div>

    )
};

export default MenuToggle;