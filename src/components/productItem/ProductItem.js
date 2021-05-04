import React from "react";
import PropTypes from 'prop-types';

const ProductItem = ({ produit,handleClick }) => {
//   const clickMe = (name) => alert(`the product is ${name}`);
  return (
    <tr>
      <td>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handleClick(produit.name)}
        >
          Click me
        </button>
      </td>
      <td>
        <img src={produit.imgSrc} alt={produit.name} />
      </td>
      <td>{produit.name}</td>
      <td>{produit.price}</td>
    </tr>
  );
};

ProductItem.propTypes = {
    produit:PropTypes.object,
    handleClick:PropTypes.func
}

export default ProductItem;
