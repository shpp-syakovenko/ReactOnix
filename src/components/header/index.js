import React,{Component} from 'react'
import water from '../../assets/images/water.png'


class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            openMenu: false
        }
    }

// Open or close menu
    handleMenu = () =>{
        this.setState({
            openMenu: !this.state.openMenu
        })
    };

    render() {
        const menuToggle = this.state.openMenu ? <a href="#mobile-menu" className="toggle-mnu on" onClick={this.handleMenu}><span/></a>
                                               : <a href="#mobile-menu" className="toggle-mnu" onClick={this.handleMenu}><span/></a>
        const menu = this.state.openMenu &&
            <div className="menu">
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#information">My Information</a></li>
                    <li><a href="#works">Featured Works</a></li>
                    <li><a href="#service">Our service</a></li>
                    <li><a href="#team">Small team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>;

        return(
            <header id="header">
                <div className="container">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-2">
                            <div className="logo">Sh<span>o</span>pno</div>
                        </div>
                        <div className="col-9">
                            {menu}
                        </div>
                        <div className="col-1">
                            {menuToggle}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"/>
                        <div className="col-md-10 col-12">
                            <h1>Say Hello to <span>SHOPNO!</span><br/><span>Agency</span> CORPORATE SHOPNO Theme</h1>
                        </div>
                        <div className="col-md-1"/>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-md-4 col-3"/>
                        <div className="col-md-4 col-6">
                            <div className="wrapper">
                                <a href="\#" className="wrapper-button">contact us</a>
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
}

export default Header