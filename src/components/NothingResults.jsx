import React from 'react';
import '../css/NothingResults.css';

const NothingResults = ({ searchText }) => {
  return (
    <div className="no-results-container">
      <h3>No matches for {searchText}</h3>
      <div className="no-results-image"></div>
    </div>
  );
};

export { NothingResults };