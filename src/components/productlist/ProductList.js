import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../productItem/ProductItem";
import PropTypes from 'prop-types';

const ProductList = ({ produits }) => {
  // props={
  //     produits:[]
  // }
  // produits = props.produits
  // {produits}=props
  console.log(produits);
  const clickMe = (name) => alert(`the product is ${name}`);
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit, index) => (
            <ProductItem key={index} produit={produit} handleClick={clickMe} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
ProductList.propTypes = {
    produits:PropTypes.array
}
export default ProductList;
