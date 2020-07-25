import React from 'react';
import { Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/Cart" component={Cart} />
    </div>
  );
}

export default App;
