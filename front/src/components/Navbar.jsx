import React from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import SearchForm from './SearchForm';
import DarkModeButton from './DarkModeButton';
import Login from './Login';
import HamburgerMenu from './HamburgerMenu';
import SiteSelector from './SiteSelector';

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
          <DarkModeButton />
        </div>
        <div className="jv-header__right">
          <div className="jv-header__right">
            <span className="jv-header__separator"></span>
            <Login />
          </div>
          
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
