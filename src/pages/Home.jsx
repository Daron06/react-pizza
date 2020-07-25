import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SortNav, Sort, SortItem, LoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';
import { addPizzaToCart } from '../redux/action/cart';

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];
const categoryNames = [
  'Все',
  'Мясные',
  'Вегатерианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(cartItems);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <SortNav
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <Sort
            activeSortType={sortBy.type}
            onClickSortType={onSelectSortType}
            items={sortItems}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (
                <SortItem
                  key={obj.id}
                  onClickAddPizza={handleAddPizzaToCart}
                  addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                  {...obj}
                />
              ))
            : Array(10)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
