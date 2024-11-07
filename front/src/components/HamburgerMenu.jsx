import React from 'react';

const HamburgerMenu = () => {
  return (
    <div className="jv-hamburger-menu__container">
      <div className="jv-hamburger-menu__button" data-insights-category="jv-header" data-insights-label="hamburger-btn" data-insights-value="open">
        <span></span>
      </div>
      {/* Hamburger Menu */}
      <nav className="jv-hamburger-menu__categories-container">
        <ul className="jv-hamburger-menu__categories">
          <li>
            <a className="jv-hamburger-menu__category" href="https://www.archdaily.com/articles">Articles</a>
          </li>
          <li>
            <a className="jv-hamburger-menu__category" href="https://www.archdaily.com/architecture-news">News</a>
          </li>
          {/* Content*/}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
