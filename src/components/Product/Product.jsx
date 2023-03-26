import React from 'react';
import './Product.css';

const Product = (props) => {
  console.log(props.product)
  const {name, img, seller, price, quantity, ratings} = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <h5>{name}</h5>
      <h6>Price: ${price}</h6>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings}</p>
    </div>
  );
};

export default Product;