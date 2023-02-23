import { ActionTypes } from "../enums/action-types";
import { initialStateType, reducerActionType } from "../interfaces/interfaces";

interface actionType {
   type: string,
   peyload: []
}

const initialState: initialStateType = {
   products: [] 
}

export const productReducer = (state = initialState, { type, peyload }: reducerActionType) => {
   switch (type) {
      case ActionTypes.SET_PRODUCTS:
         
         return {...state, products: peyload}
      default:
         return state
   }
}

export const selectedProductReducer = (state = initialState, {type, peyload}: reducerActionType) => {
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
         return {...state, ...peyload}
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {}
      default:
         return state
   }
}