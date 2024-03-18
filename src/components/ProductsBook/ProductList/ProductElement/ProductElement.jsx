import React from 'react';
import PropTypes from 'prop-types';

const ProductElement = ({ name, number, id, onRemoveProduct }) => {
  return (
    <li key={id} className="product-box">
      <div className="product-content">
        <p className="product-name">{name}</p>
        <p className="product-name">{number}</p>
      </div>
      <button className="active" onClick={() => onRemoveProduct(id)}>
        ✓
      </button>
    </li>
  );
};

ProductElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ProductElement;
