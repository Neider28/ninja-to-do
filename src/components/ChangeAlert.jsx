import React from 'react';
import { useStorageListener } from '../hooks/useStorageListener.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import '../css/ChangeAlert.css';

const ChangeAlert = ({ synchronize }) => {
  const { show, toggleShow } = useStorageListener(synchronize);

  if(show) {
    return (
      <div className="modal">
        <div className="alert-container">
          <h3>There were changes, you should update</h3>
          <button
            onClick={() => {
              toggleShow(false);
            }}
          >
            <FontAwesomeIcon icon={faArrowsRotate} className="update-icon" />
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangeAlert };