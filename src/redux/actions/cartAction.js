import axios from "axios";
import {
  ADD_TO_CART,
  ADJUST_QUANTITY_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
} from "../constants";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const adjustQuantityCart = (id, value) => ({
  type: ADJUST_QUANTITY_CART,
  payload: { id, value },
});

export const fetchProduct = () => async (dispatch) => {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log(err));
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data.map((product) => {
      return product;
    }),
  });
};
