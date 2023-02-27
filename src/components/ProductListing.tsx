import { useEffect } from 'react'
import axios from "axios";
import { setProducts } from '../redux-toolkit/slices/allProducts-slice';
import ProductComponent from './ProductComponent';
import { useAppDispatch } from '../redux-toolkit/hooks/hooks';

import './ProductListing.css'

const ProductListing = () => {
  const dispatch = useAppDispatch()

  const fetchProducts = async () => {
    const response: any = await axios
      .get('https://fakestoreapi.com/products')
      .catch(err => {
        console.log(`Error: ${err}`);
      })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container flex flex-wrap justify-center gap-6 mx-auto mt-10 pb-16 lg:gap-12 xl:gap-6'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing