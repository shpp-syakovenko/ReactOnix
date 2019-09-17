import React from 'react';
import {NavLink} from 'react-router-dom';


const MenuItem = (props) => {
    const {isOpen} = props;

    const menu = isOpen ? <ul>
                            <li><NavLink exact activeClassName='activeMenuItem' to="/">Home</NavLink></li>
                            <li><NavLink exact activeClassName='activeMenuItem' to="/about">About</NavLink></li>
                          </ul> : null;

    return (
        <div className='menuItem'>
            {menu}
        </div>
    )
};

export default MenuItem;