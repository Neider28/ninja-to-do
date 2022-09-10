import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/CreateTODO.css';

const CreateTODO = () => {
  const { openModal, setOpenModal } = useContext(AppContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="create-container" onClick={onClickButton}>
      <span>
        <FontAwesomeIcon icon={faPlus} />
      </span>
      <p>Create new TODO</p>
    </button>
  );
};

export { CreateTODO };