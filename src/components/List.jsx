import React from 'react';
import '../css/List.css';

const List = (props) => {
  return (
    <div className="list-container">
      <ul>
        {props.children}
      </ul>
    </div>
  );
};

export { List };