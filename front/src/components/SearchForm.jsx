import React from 'react';
import '../assets/style/main.css';

const SearchForm = () => {
  return (
    <form className="jv-header__main-search-form" id="afd-search-actions">
      <div className="search-icon"></div>
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
      />
    </form>
  );
};

export default SearchForm;