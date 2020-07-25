import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={467}
      viewBox="0 0 280 467"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="131" cy="131" r="131" />
      <rect x="0" y="272" rx="0" ry="0" width="262" height="28" />
      <rect x="0" y="320" rx="6" ry="6" width="262" height="83" />
      <rect x="1" y="418" rx="0" ry="0" width="66" height="35" />
      <rect x="40" y="425" rx="0" ry="0" width="6" height="15" />
      <rect x="112" y="415" rx="21" ry="21" width="155" height="42" />
    </ContentLoader>
  );
};

export default LoadingBlock;
