import React from 'react'
import logos from '../../assets/images/logo.png'


const Logos = () =>{
    return(
        <div id="logo-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={logos} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Logos