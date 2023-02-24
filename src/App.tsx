import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Header />   
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
