import React from 'react';
import logoPizza from '../../../assets/img/logoPizza.png';

const Logo = () => {
  return (
    <div className="header-logo">
      <img src={logoPizza} alt="logo pizza" />
      <div>
        <h1 className="header-title">React pizza</h1>
        <p className="header-suptitle">самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};

export default Logo;
