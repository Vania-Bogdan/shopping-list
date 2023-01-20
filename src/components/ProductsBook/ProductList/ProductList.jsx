import React from 'react';
import PropTypes from 'prop-types';
import ProductElement from './ProductElement/ProductElement';

const ProductList = ({ products, onRemoveProduct }) => (
    <ul className='products-list'>
        {products.map(({ name, number, id }) => (
            <ProductElement name={name} number={number} id={id} onRemoveProduct={onRemoveProduct} />
        ))}
    </ul>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,      
    })
    ),
};

export default ProductList;