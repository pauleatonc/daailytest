import React from 'react';
import searchIcon from '../assets/images/search_icon.svg';

const SearchForm = () => {
  return (
    <form className="jv-header__main-search-form" id="afd-search-actions">
      <img
        src={searchIcon}
        alt="Search"
        className="jv-header__main-search-icon"
      />
      <input
        aria-controls="top-search"
        aria-label="Search"
        autoComplete="off"
        className="embeded_search_text jv-header__main-search js-afd-search-focus"
        data-insights-category="jv-header"
        data-insights-label="main-search"
        data-insights-value="search"
        name="text"
        type="text"
        placeholder="Search ArchDaily"
      />
    </form>
  );
};

export default SearchForm;