// Header.js
import React from 'react';
import './Header.css';

const Header = ({ onSearch, onFilter }) => {
  return (
    <div className="header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="filter-container">
        <button
          onClick={() => onFilter('All')}
          className="filter-button active"
        >
          All
        </button>
        <button onClick={() => onFilter('Planning')} className="filter-button">
          Planning
        </button>
        <button onClick={() => onFilter('Content')} className="filter-button">
          Content
        </button>
      </div>
    </div>
  );
};

export default Header;
