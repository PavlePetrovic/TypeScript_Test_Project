import { createSlice } from '@reduxjs/toolkit'

import { productTypeObj } from '../types/types'

const initialState: productTypeObj = {
   id: 0,
   title: '',
   image: '',
   price: 0,
   category: ''
}

const product = createSlice({
   name: 'product',
   initialState,
   reducers: {
      selectedProduct(state, { payload }: any) {
         return {
            ...state,
            ...payload
         }
      },
      removeSelectedProduct: () => initialState
   }
})

export const { selectedProduct, removeSelectedProduct } = product.actions

export default product.reducer