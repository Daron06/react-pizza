import React, { useState, useEffect } from 'react';

function Test() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

export default Test;

// const sortItems = [
//   {
//     id: 1,
//     name: 'Чизбургер-пицца',
//     url: cheezburgerPng,
//     count: 100,
//     thickness: [
//       {
//         name: 'тонкое',
//         count: 100,
//         size: [
//           { count: 100, size: 26, price: 395 },
//           { count: 100, size: 30, price: 420 },
//           { count: 100, size: 40, price: 600 },
//         ],
//       },
//       {
//         name: 'традиционное',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 430,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 470,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 700,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Сырная',
//     url: cheesePng,
//     count: 100,
//     thickness: [
//       {
//         name: 'тонкое',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 395,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 420,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 600,
//           },
//         ],
//       },
//       {
//         name: 'традиционное',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 430,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 470,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 700,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Креветки по-азиатски',
//     url: asianPng,
//     count: 100,
//     thickness: [
//       {
//         name: 'тонкое',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 395,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 420,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 600,
//           },
//         ],
//       },
//       {
//         name: 'традиционное',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 430,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 470,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 700,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: 'Сырный цыплёнок',
//     url: chikenPng,
//     count: 100,
//     thickness: [
//       {
//         name: 'тонкое',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 395,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 420,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 600,
//           },
//         ],
//       },
//       {
//         name: 'традиционное',
//         count: 100,
//         size: [
//           {
//             size: 26,
//             count: 100,
//             price: 430,
//           },
//           {
//             size: 30,
//             count: 100,
//             price: 470,
//           },
//           {
//             size: 40,
//             count: 100,
//             price: 700,
//           },
//         ],
//       },
//     ],
//   },
// ];
