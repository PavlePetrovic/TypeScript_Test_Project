import { ActionTypes } from "../enums/action-types";
import { productTypeObj } from "../types/interfaces";

export const setProducts = (products: productTypeObj[]) => {
   return {
      type: ActionTypes.SET_PRODUCTS,
      peyload: products
   }
}

export const selectedProduct = (product: productTypeObj) => {
   return {
      type: ActionTypes.SELECTED_PRODUCT,
      peyload: product
   }
}

export const removeSelectedProduct = () => {
   return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT
   }
}