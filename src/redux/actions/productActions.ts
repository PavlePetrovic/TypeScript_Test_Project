import { ActionTypes } from "../enums/action-types";

export const setProducts = (products: any) => {
   return {
      type: ActionTypes.SET_PRODUCTS,
      peyload: products
   }
}

export const selectedProduct = (product: any) => {
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