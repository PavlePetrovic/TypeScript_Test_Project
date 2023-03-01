import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { initialStateType } from '../types/types'

export const getProducts = createAsyncThunk(
   'allProducts/getProducts',
   async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
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
      builder.addCase(getProducts.fulfilled, (state, actions: PayloadAction<[]>) => {
         return {
            ...state,
            products: actions.payload,
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