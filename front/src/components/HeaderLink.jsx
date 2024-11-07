import React from 'react';
import '../assets/style/main.css';

const HeaderLink = ({ href, children, target, rel }) => (
  <a className="jv-header__left-link" href={href} target={target} rel={rel}>
    {children}
  </a>
);

export default HeaderLink;
