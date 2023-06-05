import React from "react";
import { Button } from "react-bootstrap";
import { CartState } from "../Context/Context";

import "./styles.css";
const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div class="card">
      <div class="card-img"></div>
      <div class="card-info">
        <p class="text-title">{prod.product} </p>
        <p class="text-body">
          {" "}
          <span class="text-title">inStock {prod.instock}</span>
        </p>
      </div>
      <div class="card-footer">
        <span class="text-title"> ₹ {prod.price}</span>
      </div>
      {cart.some((p) => p._id === prod._id) ? (
        <Button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            });
          }}
          variant="warning"
        >
          Remove item
        </Button>
      ) : (
        <Button
          variant="success"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: prod,
            });
          }}
          disabled={!prod.instock}
        >
          {!prod.instock ? "Out of stock" : "Add to cart"}
        </Button>
      )}
    </div>
  );
};

export default SingleProduct;
