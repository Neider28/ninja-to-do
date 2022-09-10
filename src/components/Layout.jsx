import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };