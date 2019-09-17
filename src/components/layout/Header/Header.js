import React, {Component} from 'react';
import HeaderView from './HeaderView.js';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    };

    // Close or open menu
    handleMenu = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <HeaderView isOpen={this.state.isOpen} handleMenu={this.handleMenu}/>

        )
    }
}

export default Header;