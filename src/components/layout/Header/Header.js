import React, { useState } from 'react';
import HeaderView from './HeaderView';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close or open menu
  const handleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <HeaderView isOpen={isOpen} handleMenu={handleMenu} />
  );
};
export default Header;
