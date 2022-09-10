import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/Search.css';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="search-container">
      <input className="search-input" type="text" placeholder="Search" value={searchValue} onChange={onSearchValueChange}/>
      <span><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /></span>
    </section>
  );
};

export { Search };