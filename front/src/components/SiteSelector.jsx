import React from 'react';

const SiteSelector = () => (
    <div className="afd-site-selector afd-desktop-e">
        <div className="afd-site-selector__country">
        <i className="afd-site-selector__flag afd-site-selector__flag--us"></i>
        <span className="afd-site-selector__country-name">World</span>
        </div>
        <ul className="afd-site-selector__list">
            <li className="afd-site-selector__item">
                <a className="afd-site-selector__link" href="//www.archdaily.com.br/br?ad_source=jv-header">
                    <i className="afd-site-selector__flag afd-site-selector__flag--br"></i>
                    <span className="afd-site-selector__label">Brasil</span>
                </a>
            </li>
            <li className="afd-site-selector__item">
                <a className="afd-site-selector__link" href="//www.archdaily.cl/cl?ad_source=jv-header">
                    <i className="afd-site-selector__flag afd-site-selector__flag--br"></i>
                    <span className="afd-site-selector__label">Hispanoamérica</span>
                </a>
            </li>
            <li className="afd-site-selector__item">
                <a className="afd-site-selector__link" href="//www.archdaily.mx/mx?ad_source=jv-header">
                    <i className="afd-site-selector__flag afd-site-selector__flag--br"></i>
                    <span className="afd-site-selector__label">México</span>
                </a>
            </li>
            <li className="afd-site-selector__item">
                <a className="afd-site-selector__link" href="//www.archdaily.cn/cn?ad_source=jv-header">
                    <i className="afd-site-selector__flag afd-site-selector__flag--br"></i>
                    <span className="afd-site-selector__label">中国</span>
                </a>
            </li>
        </ul>
    </div>
);

export default SiteSelector;
