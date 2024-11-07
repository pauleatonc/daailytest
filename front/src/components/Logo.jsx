import React from 'react';
import '../assets/style/main.css';

const Logo = () => (
  <a className="afd-site-name__logo-container" href="https://www.archdaily.com" rel="home" title="ArchDaily">
    <picture>
      <source
        className="dark-alt afd-site-name__logo"
        media="(prefers-color-scheme: dark)"
        srcSet="https://assets.adsttc.com/doodles/flat/logo-white-full.svg"
      />
      <img
        alt="ArchDaily"
        className="afd-site-name__logo"
        data-pin-nopin="true"
        height="75"
        src="https://assets.adsttc.com/doodles/flat/logo-blue-full.svg"
        style={{ width: '145px', height: '75px' }}
        width="145"
      />
    </picture>
  </a>
);

export default Logo;
