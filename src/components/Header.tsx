import { FaReact } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    // bg-gradient-to-r from-blue-300 to-blue-500
   <div className="flex flex-row items-center gap-3 justify-center text-center shadow-md bg-white">
      <span className='text-3xl tracking-widest text-blue-400 py-4'>
        <FaReact />
      </span>
      <h1 className='text-3xl font-light tracking-widest text-blue-400 py-4'>React Shop</h1>
   </div>
  )
}

export default Header