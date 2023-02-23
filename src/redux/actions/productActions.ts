import { ActionTypes } from "../enums/action-types";
import { productsType, productType } from "../interfaces/interfaces";

export const setProducts = (products: productsType) => {
   return {
      type: ActionTypes.SET_PRODUCTS,
      peyload: products
   }
}

export const selectedProduct = (product: productType) => {
   return {
      type: ActionTypes.SELECTED_PRODUCT,
      peyload: product
   }
}

export const removeSelectedProduct = (): {type: string} => {
   return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT
   }
}