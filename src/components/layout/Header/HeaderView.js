import React from 'react';
import MenuToggle from './components/MenuToggle';
import '../../../scss/layout/header.scss';
import water from '../../../assets/images/water.png';
import MenuItem from "./components/MenuItem";

const HeaderView = (props) => {
    const {isOpen, handleMenu} = props;

    return (
        <div className='wrapperHeader'>
            <div className='header'>
                <div className='topHeader'>
                    <div className="logo">
                        Sh<span>o</span>pno
                    </div>
                    <MenuToggle isOpen={isOpen} handleMenu={handleMenu}/>
                    <MenuItem isOpen={isOpen}/>

                </div>
                <div className='titleHeader'>
                    <h1>Say Hello to <span>SHOPNO!</span><br/><span>Agency</span> CORPORATE SHOPNO Theme</h1>
                </div>
                <div className='bottomHeader'>
                    <a href='/'>contact us</a>
                    <img src={water} alt="water"/>
                </div>
            </div>
        </div>
    )
};

export default HeaderView;