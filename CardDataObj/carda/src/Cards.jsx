// Cards.js
import React from 'react';

function Cards({ product }) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default Cards;
