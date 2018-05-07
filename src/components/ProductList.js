import React from 'react';
import PropTypes from 'prop-types';

function ProductList (props) {
  return (
    <ul>
    {
      props.products.map(product => (
        <li key={product.id} onClick={() => props.onProductSelect(product)}>
          {product.description}
        </li>
      ))
    }
    </ul>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductSelect: PropTypes.func.isRequired
};

export default ProductList;
