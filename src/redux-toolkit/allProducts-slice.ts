import { createSlice } from '@reduxjs/toolkit'

import { initialStateType } from './types/types'

const initialState: initialStateType = {
   products: []
}

const allProducts = createSlice({
   name: 'allProducts',
   initialState: initialState,
   reducers: {
      setProducts(state, { payload }: any) {
         return {
            ...state,
            products: payload
         }
      }
   }
})

export const { setProducts } = allProducts.actions

export default allProducts.reducer