import React from 'react';
import PropTypes from 'prop-types';

const ProductElement = ({ name, number, id, onRemoveProduct }) => {
  return (
    <li key={id} className="product-box">
        <p className="product-name">{name}</p>
        <p className="product-name">{number}</p>
        <button className="product-btn" onClick={()=>onRemoveProduct(id)}>Delete</button>
    </li>
  );
};

ProductElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ProductElement;