import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { productTypeObj } from '../types/types'

export const getProduct: any = createAsyncThunk(
   'product/getProduct',
   async (id) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      return response.data
   }
)

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
      removeSelectedProduct: () => initialState
   },
   extraReducers: (builder) => {
      // pending, fulfiled, rejected
      builder.addCase(getProduct.pending, (state) => {
         state.isLoading = true
      }),
      builder.addCase(getProduct.fulfilled, (state, {payload}: any) => {
         return {
            ...state,
            ...payload,
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