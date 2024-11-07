import React, { useContext } from 'react';
import HeaderLink from './HeaderLink';
import SiteSelector from './SiteSelector';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import SearchForm from './SearchForm';
import { DarkModeContext } from '../context/DarkModeContext';
import '../assets/style/main.css';

const Header = () => {
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);

  return (
    <header className="jv-header jv-container">
      <div className="jv-header__top">
        <div className="jv-header__left">
          <HeaderLink href="https://www.archdaily.com/contact?ad_source=jv-header&ad_name=hamburger_menu">Submit a Project</HeaderLink>
          <HeaderLink href="https://www.archdaily.com/advertise?ad_source=jv-header&ad_name=hamburger_menu">Advertise</HeaderLink>
          <HeaderLink href="https://www.architonic.com/" target="_architonic" rel="noopener noreferrer">Architonic</HeaderLink>
          {/* Dark Mode Toggle Button */}
          <button className="jv-header__left-link" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <SiteSelector />
        </div>
        <div className="jv-header__logo">
          <h1 className="afd-site-name clearfix">
            <Logo />
            <span className="afd-site-name__slogan afd-desktop-e">The world's most visited architecture platform</span>
          </h1>
        </div>
        {/* Other header content */}
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