import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const useAppContext = () => {
    const { item: ToDo, saveItem: saveToDo, loading, error, synchronize: synchronizeTODOS } = useLocalStorage('ToDo_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedToDo = ToDo.filter(toDo => !!toDo.completed).length;
    const totalToDo = ToDo.length;

    let searchedToDo = [];

    if(!searchValue.length >= 1) {
        searchedToDo = ToDo;
    } else {
        searchedToDo = ToDo.filter(toDo => {
        const toDoText = toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return toDoText.includes(searchText);
        });
    }

    const addToDo = (text) => {
        const newToDo = [...ToDo];
        newToDo.push({ completed: false, text: text });
        saveToDo(newToDo);
    };

    const completeToDo = (text) => {
        const toDoIndex = ToDo.findIndex(toDo_ => toDo_.text === text);

        const newToDo = [...ToDo];
        newToDo[toDoIndex].completed = !newToDo[toDoIndex].completed;
        saveToDo(newToDo);
    };

    const deleteToDo = (text) => {
        const toDoIndex = ToDo.findIndex(toDo_ => toDo_.text === text);

        const newToDo = [...ToDo];
        newToDo.splice(toDoIndex, 1);
        saveToDo(newToDo);
    };

    return {
        loading,
        error,
        totalToDo,
        completedToDo,
        searchValue,
        setSearchValue,
        searchedToDo,
        addToDo,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal,
        synchronizeTODOS
    };
};

export { useAppContext };