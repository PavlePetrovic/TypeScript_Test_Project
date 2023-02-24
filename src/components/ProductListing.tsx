import { useEffect } from 'react'
import axios from "axios";
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useAppDispatch } from '../redux/hooks/hooks';
import { productTypeObj } from '../redux/interfaces/interfaces'

import './ProductListing.css'

type test = {
  data: productTypeObj[]
}

const ProductListing = () => {
   const dispatch = useAppDispatch()

   const fetchProducts = async () => {
      const response: any = await axios
        .get<test>('https://fakestoreapi.com/products')
        .catch(err => {
          console.log(`Error: ${err}`);
        })

      // const test: productTypeObj[] = response.data
        
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