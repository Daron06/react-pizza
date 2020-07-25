import React from 'react';

const SortNav = React.memo(function SortNav({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul className="sort-nav">
        {items &&
          items.map((item, id) => (
            <li
              className={activeCategory === id ? 'active' : ''}
              onClick={() => onClickCategory(id)}
              key={`${item}_${id}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default SortNav;
