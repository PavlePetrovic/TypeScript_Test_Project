import { useAppSelector } from '../redux/hooks/hooks'
import { Link } from 'react-router-dom'
import { productTypeObj } from '../redux/interfaces/interfaces'

const ProductComponent = () => {
   const products = useAppSelector(state => state.allProducts.products)
   const renderList = products.map((product: productTypeObj) => {
   
      const {id, title, image, price, category} = product

      return (
         <div className='testCard' key={id}>
            <Link to={`/product/${id}`}>
               <div>
                  <div>
                     <img src={image} alt={title} />
                  </div>
                  <div>
                     <p>{title}</p>
                     <p>$ {price}</p>
                     <p>{category}</p>
                  </div>
               </div>
            </Link>
         </div>
      )
   })

   return (
      <>
         {renderList}
      </>
   )
}

export default ProductComponent