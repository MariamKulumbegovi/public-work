import React from 'react';
import searchIcon from '../../../images/Search.svg';
import './Table.css';
export const GlobalFilter = ({ filter, setGlobalFilter }) => {
  return (
    <div className="search-wrapper">
      <img className="search-icon" src={searchIcon} />
      <input
        value={filter || ''}
        onChange={({ target }) => setGlobalFilter(target.value)}
        className="global-search"
        placeholder="საძიებო სიტყვა..."
      />
    </div>
  );
};
