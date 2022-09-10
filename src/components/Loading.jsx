import React from 'react';
import '../css/Loading.css';

const Loading = () => {
  return (
    <div id="spinner">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export { Loading };