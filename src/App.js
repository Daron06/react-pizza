import React from 'react';
import './App.scss';

import BD from './assets/bd.json';
//components
import Header from './components/Header/Header';
import Assortment from './components/Assortment/Assortment';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Assortment state={BD} />
      </div>
    </div>
  );
}

export default App;
