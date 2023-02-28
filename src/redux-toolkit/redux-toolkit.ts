import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from './slices/allProducts-slice'
import productReducer from "./slices/product-slice";

const store = configureStore({
   reducer: {
      allProducts: allProductsReducer,
      product: productReducer
   }
})

// First, you must install npm install --save @types/react-redux, then:
// type declaration for useSelector(state: RootState => ...)
export type RootState = ReturnType<typeof store.getState>
// type declaration for useDispatch
export type AppDispatch = typeof store.dispatch

export default store