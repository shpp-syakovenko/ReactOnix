import React,{Component} from 'react'
import water from '../images/water.png'


class Header extends Component{

    state = {
        openMenu: false
};

    render() {

        return(
            <header id="header">
                <div className="container">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-2">
                            <div className="logo">Sh<span>o</span>pno</div>
                        </div>
                        <div className="col-9">
                            <div className="menu">
                                <ul>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#information">My Information</a></li>
                                    <li><a href="#works">Featured Works</a></li>
                                    <li><a href="#service">Our service</a></li>
                                    <li><a href="#team">Small team</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <a href="#mobile-menu" className="toggle-mnu" onClick={this.handleMenu}><span></span></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 col-12">
                            <h1>Say Hello to <span>SHOPNO!</span><br/><span>Agency</span> CORPORATE SHOPNO Theme</h1>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-md-4 col-3"></div>
                        <div className="col-md-4 col-6">
                            <div className="wrapper">
                                <a href="#header" className="wrapper-button">contact us</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-3">
                            <img src={water} className="water" alt="water"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    handleMenu = () => {
        //console.log('1');
    }
}




export default Header