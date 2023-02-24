import React from 'react';
import '../css/List.css';

const List = (props) => {
  return (
    <div className="list-container">
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.totalToDo) && props.onEmpty()}
        {(!!props.totalToDo && !props.searchedToDo.length) && props.onEmptySearchResults()}

        {(!props.loading && !props.error) && props.searchedToDo.map(props.children)}
      </ul>
    </div>
  );
};

export { List };