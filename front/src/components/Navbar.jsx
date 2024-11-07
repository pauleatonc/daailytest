import React from 'react';
import Logo from './Navbar/Logo';
import NavigationMenu from './NavigationMenu';
import SearchForm from './SearchForm';
import DarkModeButton from './Navbar/DarkModeButton';
import HamburgerMenu from './Navbar/HamburgerMenu';
import SiteSelector from './Navbar/SiteSelector';

const Navbar = () => {
  return (
    <header className="jv-header jv-container">
      <div className="jv-header__top">
        <div className="jv-header__left">
          <a className="jv-header__left-link" href="https://www.archdaily.com/contact">Submit a Project</a>
          <a className="jv-header__left-link" href="https://www.archdaily.com/advertise">Advertise</a>
          <a className="jv-header__left-link" href="https://www.architonic.com/" target="_architonic">Architonic</a>
          <div className="jv-header__hider">
            <span className="jv-header__separator"></span>
            <SiteSelector />
          </div>           
        </div>
        <div className="jv-header__logo">
          <h1 className="afd-site-name clearfix">
            <Logo /> 
            <span className="afd-site-name__slogan afd-desktop-e">The world's most visited architecture platform</span>
          </h1>
        </div>
      
        <div className="jv-header__right"> 
        <div className="jv-header__right">
          <DarkModeButton />
        </div>  
        <span className="jv-header__separator"></span>
          <HamburgerMenu />
        </div>
      </div>
      <div className="jv-header__bottom" id="js-header__bottom-nav-search">
        <div className="jv-container jv-header__bottom-container">
          <NavigationMenu />
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
