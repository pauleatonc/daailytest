import React from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import SearchForm from './SearchForm';
import DarkModeButton from './DarkModeButton';
import Login from './Login';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="jv-header jv-container">
      <div className="jv-header__top">
        <div className="jv-header__left">
          <a className="jv-header__left-link" href="https://www.archdaily.com/contact">Submit a Project</a>
          <a className="jv-header__left-link" href="https://www.archdaily.com/advertise">Advertise</a>
          <a className="jv-header__left-link" href="https://www.architonic.com/" target="_architonic">Architonic</a>
          <DarkModeButton />
        </div>
        <div className="jv-header__right">
          <Login />
          <HamburgerMenu />
        </div>
      </div>
      <div className="jv-header__bottom" id="js-header__bottom-nav-search">
        <div className="jv-container jv-header__bottom-container">
          <Logo />
          <NavigationMenu />
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
