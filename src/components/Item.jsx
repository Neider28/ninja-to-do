import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-regular-svg-icons';
import '../css/Item.css';

const Item = (props) => {
  return (
    <li className="item-container">
      <button className="item-button--check" onClick={props.onComplete}>
        <span><span className={`${props.completed && "check-todo"}`}></span></span>
      </button>
      <p className={`${props.completed && "item-text--completed"} item-text`}>{props.text}</p>
      <button className="item-button--delete" onClick={props.onDelete}>
        <span><FontAwesomeIcon icon={faTrashCan} /></span>
      </button>
    </li>
  );
};

export { Item };