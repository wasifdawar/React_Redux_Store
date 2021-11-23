import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  const dispatch = useDispatch();
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
