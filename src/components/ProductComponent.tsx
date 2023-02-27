import { useAppSelector } from '../redux/hooks/hooks'
import { Link } from 'react-router-dom'
import { productTypeObj } from '../redux/types/types'
import { FaReact } from 'react-icons/fa';

import './ProductComponent.css'

const ProductComponent = () => {
   const products = useAppSelector(state => state.allProducts.products)
   const renderList = products.map((product: productTypeObj) => {

      const { id, title, image, price, category } = product

      return (
         <div className='flex flex-col w-full shadow-md text-center rounded-xl bg-white p-5 items-center md:w-1/3 lg:w-1/4 xl:w-1/5' key={id}>
            <div className='flex justify-center w-40 h-40'>
               <img src={image} className='w-auto h-full' alt={title} />
            </div>
            <div className='max-w-full'>
               <h3 className='truncate text-sm mt-4 font-light'>{title}</h3>
               <p className='text-green-900 text-2xl font-semibold mt-2 mb-2'>$ {price}</p>
               <Link to={`/product/${id}`}>
                  <button className='py-1.5 px-12 shadow-md font-light rounded-lg bg-blue-400 text-white transition hover:bg-blue-100 hover:text-blue-900'>Details</button>
               </Link>
               <p className='shadow-md bg-green-100 font-extralight text-green-700 mt-4 w-fit mx-auto px-3 py-0.5 rounded-lg text-xs'>{category}</p>
            </div>
         </div>
      )
   })

   return (
      <>
         {products.length === 0 &&
            <div className='flex justify-center h-screen -mt-28 items-center'>
               <span className='animate-spin text-blue-500 text-7xl'><FaReact /></span>
            </div>
         }
         {renderList}
      </>
   )
}

export default ProductComponent