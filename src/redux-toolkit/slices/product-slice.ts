import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productTypeObj } from '../types/types'

export const getProduct = createAsyncThunk(
   'product/getProduct',
   async (id: string) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      return response.data
   }
)

const initialState: productTypeObj = {
   id: 0,
   title: '',
   image: '',
   price: 0,
   category: '',
   description: '',
   isLoading: false
}

const product = createSlice({
   name: 'product',
   initialState,
   reducers: {
      removeSelectedProduct: () => initialState
   },
   extraReducers: (builder) => {
      // pending, fulfiled, rejected
      builder.addCase(getProduct.pending, (state) => {
         state.isLoading = true
      }),
      builder.addCase(getProduct.fulfilled, (state, actions: PayloadAction<productTypeObj>) => {
         return {
            ...state,
            ...actions.payload,
            isLoading: false
         }
      }),
      builder.addCase(getProduct.rejected, (state) => {
         state.isLoading = false
      })
   }
})

export const { removeSelectedProduct } = product.actions

export default product.reducer