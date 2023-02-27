import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { initialStateType } from '../types/types'

export const getProducts: any = createAsyncThunk(
   'allProducts/getProducts',
   async () => {
      const response: any = await axios.get('https://fakestoreapi.com/products')
      return response.data
   }
)

const initialState: initialStateType = {
   products: [],
   isLoading: false
}

const allProducts = createSlice({
   name: 'allProducts',
   initialState: initialState,
   reducers: { },
   extraReducers: (builder) => {
      // pending, fulfiled, rejected
      builder.addCase(getProducts.pending, (state) => {
         state.isLoading = true
      }),
      builder.addCase(getProducts.fulfilled, (state, {payload}: any) => {
         return {
            ...state,
            products: payload,
            isLoading: false
         }
      }),
      builder.addCase(getProducts.rejected, (state) => {
         state.isLoading = false
      })
   }
})

export const {  } = allProducts.actions

export default allProducts.reducer