import { useEffect } from 'react'
import axios from "axios";
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useAppDispatch } from '../redux/hooks/hooks';

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
      <div className='testWrapper'>
        <ProductComponent />
      </div>
   )
}

export default ProductListing