// src/pages/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Page</h1>
      <p>Details of product {id}</p>
    </div>
  );
};

export default Product;
