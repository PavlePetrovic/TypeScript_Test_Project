import { useSelector } from 'react-redux'
// First, you must install npm install --save @types/react-redux, then:
import { RootState } from '../redux/store'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
   const products = useSelector((state: RootState) => state.allProducts.products)
   const renderList = products.map((product: { id: number; title: string; image: string; price: number; category: string }) => {
   
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