import React from 'react';
import './Sort.scss';
import triangleSvg from '../../../assets/img/triangle.svg';

const Sort = () => {
  return (
    <div className="sort">
      <i>
        <img src={triangleSvg} alt="triangleSvg" />
      </i>
      <p>
        Сортировка по: <span>популярности</span>
      </p>
    </div>
  );
};

export default Sort;
