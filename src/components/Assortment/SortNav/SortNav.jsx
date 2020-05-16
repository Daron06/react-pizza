import React from 'react';
import './SortNav.scss';

const SortNav = (props) => {
  return (
    <ul className="sort-nav">
      {props.assortment.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default SortNav;
