import {
  ADD_TO_CART,
  ADJUST_QUANTITY_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
} from "../constants";

const initialState = {
  products: [],
  carts: [],
  selectedProduct: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload);
      const inCart = state.carts.find((prod) => prod.id === action.payload);
      return {
        ...state,
        carts: inCart
          ? state.carts.map((prod) =>
              prod.id === action.payload
                ? { ...prod, quantity: prod.quantity + 1 }
                : prod
            )
          : [...state.carts, { ...item, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((prod) => prod.id !== action.payload),
      };
    case ADJUST_QUANTITY_CART:
      return {
        ...state,
        carts: state.carts.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, quantity: action.payload.value }
            : prod
        ),
      };
    default:
      return state;
  }
};
