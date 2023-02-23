import { ActionTypes } from "../enums/action-types";

interface stateType {
   products: {
      id: number,
      title: string,
      price: number,
      description: string,
      category: string,
      image: string,
      rating?: {}
   }[]
}

interface actionType {
   type: string,
   peyload: []
}

const initialState: stateType = {
   products: [] 
}

export const productReducer = (state = initialState, { type, peyload }: actionType) => {
   switch (type) {
      case ActionTypes.SET_PRODUCTS:
         
         return {...state, products: peyload}
      default:
         return state
   }
}

export const selectedProductReducer = (state = initialState, {type, peyload}: actionType) => {
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
         return {...state, ...peyload}
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {}
      default:
         return state
   }
}