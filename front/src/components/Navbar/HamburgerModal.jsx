import React from 'react';
import '../../assets/styles/ownstyles.css';

const HamburgerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  console.log('Rendering modal:', isOpen);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="jv-hamburger-menu__container" onClick={(e) => e.stopPropagation()}>
        <div className="jv-container">
          <div className="jv-hamburger-menu__header">
            <a className="jv-header__left-link" href="https://www.archdaily.com/contact?ad_source=jv-header&ad_name=hamburger_menu">Submit a Project</a>
            <a className="jv-header__left-link" href="https://www.archdaily.com/advertise?ad_source=jv-header&ad_name=hamburger_menu">Advertise</a>
            <a className="jv-header__left-link" href="https://www.architonic.com/" target="_architonic">Architonic</a>
            <div className="jv-header__hider">
              <span className="jv-header__separator"></span>
              <div className="afd-site-selector afd-desktop-e">
                <div className="afd-site-selector__country">
                  <i className="afd-site-selector__flag afd-site-selector__flag--us"></i>
                  <span className="afd-site-selector__country-name">World</span>
                </div>
                <ul className="afd-site-selector__list">
                  <li className="afd-site-selector__item">
                    <a className="afd-site-selector__link" href="//www.archdaily.com.br/br?ad_source=jv-header">Brasil</a>
                  </li>
                  <li className="afd-site-selector__item">
                    <a className="afd-site-selector__link" href="//www.archdaily.cl/cl?ad_source=jv-header">Hispanoamérica</a>
                  </li>
                  <li className="afd-site-selector__item">
                    <a className="afd-site-selector__link" href="//www.archdaily.mx/mx?ad_source=jv-header">México</a>
                  </li>
                  <li className="afd-site-selector__item">
                    <a className="afd-site-selector__link" href="//www.archdaily.cn/cn?ad_source=jv-header">中国</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nav className="jv-hamburger-menu__categories-container">
            <ul className="jv-hamburger-menu__categories">
              <li>
                <a className="jv-hamburger-menu__category" href="https://www.archdaily.com/articles?ad_source=jv-header&ad_name=hamburger_menu">Articles</a>
              </li>
              <li>
                <a className="jv-hamburger-menu__category" href="https://www.archdaily.com/architecture-news?ad_source=jv-header&ad_name=hamburger_menu">News</a>
              </li>

            </ul>
          </nav>

          <div className="jv-hamburger-menu__footer">
            <a className="jv-hamburger-menu__footer-logo" href="//www.archdaily.com?ad_source=jv-header&ad_name=hamburger_menu">
              <picture>
                <source className="dark-alt" media="(prefers-color-scheme: dark)" srcSet="" />
                <img alt="Home" height="48" src="https://assets.adsttc.com/doodles/flat/logo-blue-full.svg" width="70" />
              </picture>
            </a>
            <div className="afd-footer__rights">
              <div className="afd-footer__rights__txt-wrap">
                <span className="afd-footer__rights__txt">© All rights reserved. ArchDaily, part of DAAily platforms AG 2008-2024</span>
                <span className="afd-footer__rights__txt">ISSN 0719-8884</span>
                <span className="afd-footer__rights__txt">All images are © each office/photographer mentioned.</span>
              </div>
            </div>
            <ul className="afd-footer__links">
              <li className="afd-footer__links__item">
                <a className="afd-footer__links__link" href="//www.archdaily.com/content/about?ad_source=jv-header&ad_name=hamburger_menu">About</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerModal;
