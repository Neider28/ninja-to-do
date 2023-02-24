import React, { useContext } from 'react';
import { Counter } from '../components/Counter.jsx';
import { Search } from '../components/Search.jsx';
import { FormTODO } from '../components/FormTODO.jsx';
import { List } from '../components/List.jsx';
import { Item } from '../components/Item.jsx';
import { CreateTODO } from '../components/CreateTODO.jsx';
import { Modal } from '../components/Modal.jsx';
import { Error } from '../components/Error.jsx';
import { Loading } from '../components/Loading.jsx';
import { Nothing } from '../components/Nothing.jsx';
import { NothingResults } from '../components/NothingResults.jsx';
import { ChangeAlert } from '../components/ChangeAlert.jsx';
import { AppContext } from '../context/AppContext.js';

const Home = () => {
  const {
    openModal, 
    searchedToDo, 
    completeToDo, 
    deleteToDo, 
    error, 
    loading,
    totalToDo, 
    completedToDo,
    searchValue, 
    setSearchValue,
    synchronizeTODOS
  } = useContext(AppContext);

  return (
    <main className="Main">
      <Counter
        totalToDo={totalToDo}
        completedToDo={completedToDo}
        loading={loading}
      />
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        loading={loading}
      />
      <CreateTODO />
      <List 
        error={error}
        loading={loading}
        searchedToDo={searchedToDo}
        totalToDo={totalToDo}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmpty={() => <Nothing />}
        onEmptySearchResults={() => <NothingResults searchText={searchValue} />}
      >
        {(todo) => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        )}
      </List>
      {openModal && (
        <Modal>
          <FormTODO />
        </Modal>
      )}
      <ChangeAlert 
         synchronize={synchronizeTODOS}
      />
    </main>
  );
};

export { Home };