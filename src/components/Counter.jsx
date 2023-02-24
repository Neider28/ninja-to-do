import React from 'react';
import '../css/Counter.css';

const Counter = ({ totalToDo, completedToDo, loading }) => {
  return (
    <h2 className={`counter ${loading && "counter--loading"}`}>
      You have completed {completedToDo} of {totalToDo} TODOs
    </h2>
  );
};

export { Counter }; 