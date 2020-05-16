import React from 'react';
import './SortItem.scss';
// import cheezburgerPng from '../../../assets/img/cheezburger.png';
// import cheesePng from '../../../assets/img/cheese.png';
import chikenPng from '../../../assets/img/chiken.png';
// import asianPng from '../../../assets/img/asian.png';

const SortItem = (props) => {
  return (
    <div className="sort-wrapper">
      {props.sortItems.map((item) => (
        <div className="sort-item" key={item.id}>
          <img src={chikenPng} alt={item.name} />
          <p className="sort-item-name">{item.name}</p>
          <div className="sort-item-block">
            <div>
              <button
                disabled={!item.thickness[0].count}
                onClick={() => console.log(item.thickness[0].count)}
              >
                {item.thickness[0].name}
              </button>
              <button disabled={!item.thickness[1].count}>
                {item.thickness[1].name}
              </button>
            </div>
            <div>
              <button disabled={!item.thickness[0].size[0].count}>
                {item.thickness[0].size[0].size} см.
              </button>
              <button disabled={!item.thickness[0].size[1].count}>
                {item.thickness[0].size[1].size} см.
              </button>
              <button disabled={!item.thickness[0].size[2].count}>
                {item.thickness[0].size[2].size} см.
              </button>
            </div>
          </div>
          <div className="sort-item-price">
            <p> от 395 &#8381; </p>
            <button> + Добавить </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortItem;
