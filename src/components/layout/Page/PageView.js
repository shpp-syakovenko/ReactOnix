import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const PageView = (props) => {
    return (
        <div className='page'>
            <Header/>
            {props.page}
            <Footer/>
        </div>
    )

};

export default PageView;