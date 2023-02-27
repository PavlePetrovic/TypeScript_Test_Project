import { ActionTypes } from "../enums/action-types";
import { initialStateType } from "../types/interfaces";

const initialState: initialStateType = {
   products: []
}

export const productReducer = (state = initialState, { type, peyload }: any) => {
   switch (type) {
      case ActionTypes.SET_PRODUCTS:

         return { ...state, products: peyload }
      default:
         return state
   }
}

export const selectedProductReducer = (state = initialState, { type, peyload }: any) => {
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
         return { ...state, ...peyload }
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {}
      default:
         return state
   }
}