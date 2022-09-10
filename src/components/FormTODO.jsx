import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import '../css/FormTODO.css';

const FormTODO = () => {
  const [newTextValue, setNewTextValue] = useState('');
  const {setOpenModal, addToDo, searchedToDo} = useContext(AppContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const verify = searchedToDo.find(item => item.text.toLowerCase() === newTextValue.toLowerCase());

  const onSubmit = (event) => {
    event.preventDefault();

    if(!verify) {
      addToDo(newTextValue);
      setOpenModal(false);
    }
  };

  const onWrite = (event) => {
    setNewTextValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <button 
        className="form-button--cancel" 
        type="button"
        onClick={onCancel}
      >
        <FontAwesomeIcon icon={faXmark} className="cancel-icon" />
      </button>
      <label className="form-image"></label>
      <section className="form-input-container">
        <textarea 
          className="form-input"
          placeholder="Type a new TODO..." 
          maxLength="25" required
          value={newTextValue}
          onChange={onWrite}
        />       
        <button 
          className="form-input-button--save" 
          type="submit"
        >
          <FontAwesomeIcon icon={faFloppyDisk} className="save-icon" />
        </button>
      </section>
      {
        verify && (<p>THIS TASK ALREADY EXISTS</p>)
      }
    </form>
  );
};

export { FormTODO };