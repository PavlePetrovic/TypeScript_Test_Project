import { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { useAppDispatch } from '../redux-toolkit/hooks/hooks';
import { getProducts } from '../redux-toolkit/slices/allProducts-slice';

import './ProductListing.css'

const ProductListing = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='container flex flex-wrap justify-center gap-6 mx-auto mt-10 pb-16 lg:gap-12 xl:gap-6'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing