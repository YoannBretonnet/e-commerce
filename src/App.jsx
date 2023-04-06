import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route key="homePage" path="/" element={<Home/>} />
        <Route key="cartPage" path="/cart" element={<Cart/>} />
        <Route key="loginPage" path="/login" element={<Login/>} />
        <Route key="registerPage" path="/register" element={<Register/>} />
        <Route key="productPage" path="/product/:id" element={<Product/>} />
        <Route key="productsPage" path="/products" element={<ProductList/>} />
      </Routes>
    </Router>
  )
}

export default App;
