import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { RootState } from '../redux/store'


const ProductDetail = () => {
  const { productId } = useParams()
  let product = useSelector((state: RootState) => state.product)
  const { image, title, price, category, description } = product
  const dispatch = useDispatch()
  
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