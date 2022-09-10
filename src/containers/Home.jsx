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
import { AppContext } from '../context/AppContext.js';

const Home = () => {
  const {openModal, searchedToDo, completeToDo, deleteToDo, error, loading} = useContext(AppContext);

  return (
    <section className="Main">
      <Counter />
      <Search />
      <CreateTODO />
      <List>
        {error && <Error />}
        {loading && <Loading />}
        {(!loading && !searchedToDo.length) && <Nothing />}
        {searchedToDo.map(todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </List>
      {openModal && (
        <Modal>
          <FormTODO />
        </Modal>
      )}
    </section>
  );
};

export { Home };