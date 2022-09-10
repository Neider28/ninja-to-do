import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext.js';
import { Layout } from '../components/Layout.jsx';
import { Home } from '../containers/Home.jsx';
import { useAppContext } from '../hooks/useAppContext.js';
import { NotFound } from '../containers/NotFound.jsx';
import '../css/App.css';

const App = () => {
  const initialState = useAppContext();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
