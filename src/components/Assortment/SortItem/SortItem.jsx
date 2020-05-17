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
              <input
                type="radio"
                disabled={!item.thickness[0].count}
                id="radio1"
                name="radio_group_1"
              />
              <label htmlFor="radio1">{item.thickness[0].name}</label>

              <input
                type="radio"
                disabled={!item.thickness[1].count}
                id="radio2"
                name="radio_group_1"
              />
              <label htmlFor="radio2">{item.thickness[1].name}</label>
            </div>
            <div>
              <input
                type="radio"
                disabled={!item.thickness[0].size[0].count}
                id="radio3"
                name="radio_group_2"
              />
              <label htmlFor="radio3">{`${item.thickness[0].size[0].size} см.`}</label>

              <input
                type="radio"
                disabled={!item.thickness[0].size[1].count}
                id="radio4"
                name="radio_group_2"
              />
              <label htmlFor="radio4">{`${item.thickness[0].size[1].size} см.`}</label>
              <input
                type="radio"
                disabled={!item.thickness[0].size[2].count}
                id="radio5"
                name="radio_group_2"
              />
              <label htmlFor="radio5">{`${item.thickness[0].size[2].size} см.`}</label>
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
