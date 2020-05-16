import React from 'react';
import './Assortment.scss';

//components
import SortNav from './SortNav/SortNav';
import Sort from './Sort/Sort';
import SortItem from './SortItem/SortItem';

const Assortment = (props) => {
  return (
    <div>
      <div className="assortment">
        <SortNav assortment={props.state.assortment} />
        <Sort />
      </div>
      <h2>Все пиццы</h2>
      <SortItem sortItems={props.state.sortItems} />
      <SortItem sortItems={props.state.sortItems} />
    </div>
  );
};

export default Assortment;
