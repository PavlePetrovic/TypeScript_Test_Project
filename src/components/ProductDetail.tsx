import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { FaReact } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc'

import axios from 'axios';
import { productTypeObj } from '../redux/types/types';
import './ProductDetail.css'


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
    <div className='container flex mx-auto mt-9 mb-10 justify-center'>
      {Object.keys(product).length === 0 ? (
        <div className='flex justify-center h-screen -mt-28 items-center'>
          <span className='animate-spin text-blue-500 text-7xl'><FaReact /></span>
        </div>
      ) : (
        <div className='flex flex-col shadow-md items-center justify-center text-center rounded-xl p-6 bg-white max-w-4xl'>
          <Link to={`/`} className='ml-auto'>
            <button className='py-3 px-3.5 shadow-md font-light rounded-full bg-blue-400 text-white transition hover:bg-blue-100 hover:text-blue-900'><VscChromeClose /></button>
          </Link>
          <div className='flex justify-center w-1/4 h-auto'>
            <img src={image} className='w-auto h-full' alt={title} />
          </div>
          <div className=''>
            <p className='shadow-md bg-green-100 font-extralight text-green-700 mt-5 w-fit mx-auto px-3 py-0.5 rounded-lg text-xs'>{category}</p>
            <h3 className='text-2xl mt-4 font-light text-gray-600'>{title}</h3>
            <p className='text-3xl mt-2 text-green-900 font-semibold'>${price}</p>
            <p className='text-sm mt-4 font-extralight text-gray-400'>{description}</p>
            <button className='py-2 px-12 mt-7 shadow-lg font-light rounded-lg bg-red-400 text-white transition hover:bg-red-100 hover:text-red-900'>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail