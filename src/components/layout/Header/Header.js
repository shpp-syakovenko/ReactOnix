import React, { Component } from 'react';
import HeaderView from './HeaderView';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  // Close or open menu
  handleMenu = (e) => {
    e.preventDefault();
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <HeaderView isOpen={isOpen} handleMenu={this.handleMenu} />
    );
  }
}
export default Header;
