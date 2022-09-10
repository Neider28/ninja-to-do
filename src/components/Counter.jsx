import React from 'react';
import { AppContext } from '../context/AppContext.js';
import '../css/Counter.css';

const Counter = () => {
  const { totalToDo, completedToDo } = React.useContext(AppContext);

  return (
    <h2 className="counter">You have completed {completedToDo} of {totalToDo} TODOs</h2>
  );
};

export { Counter }; 