import React, { useState } from 'react';
import '../../assets/styles/ownstyles.css';
import HamburgerModal from './HamburgerModal';


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className={`jv-hamburger-menu__button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
      </div>
      <HamburgerModal isOpen={isOpen} onClose={toggleMenu}/>      
    </>
  );
};


export default HamburgerMenu;