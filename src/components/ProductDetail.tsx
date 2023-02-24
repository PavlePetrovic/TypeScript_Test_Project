import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import axios from 'axios';
import { productTypeObj } from '../redux/interfaces/interfaces';


const ProductDetail = () => {
  const { productId } = useParams()
  let product: productTypeObj = useAppSelector(state => state.product)
  const { image, title, price, category, description } = product
  const dispatch = useAppDispatch()
  
  const fetchProductDetail = async (id: string) => {
    const response: any = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch(err => {
        console.log(err);
      })
      dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId)
    // Clean up
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className='detailWrapperTest'>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
         <div className='detailTest'>
           <div>
             <img src={image} />
           </div>
           <div>
             <h1>{title}</h1>
             <h2>
               <a>${price}</a>
             </h2>
             <h3>{category}</h3>
             <p>{description}</p>
             <div>
               <div>Add to Cart</div>
             </div>
           </div>
         </div>
      )}
    </div>
  )
}

export default ProductDetail