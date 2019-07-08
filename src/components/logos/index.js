import React from 'react'
import logos from '../images/logo.png'


function Logos(){
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
}

export default Logos