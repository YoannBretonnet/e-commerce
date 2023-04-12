import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import Product from './pages/ProductPage';
import ProductList from './pages/ProductListPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"


function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route key="homePage" path="/" element={<Home/>} />
        <Route key="cartPage" path="/cart" element={<Cart/>} />
        <Route key="loginPage" path="/login" element={user?  <Navigate to="/" /> : <Login/> } />
        <Route key="registerPage" path="/register" element={user?  <Navigate to="/" /> : <Register/> } />
        <Route key="productPage" path="/product/:id" element={<Product/>} />
        <Route key="productsPage" path="/products/:category" element={<ProductList/>} />
      </Routes>
    </Router>
  )
}

export default App;
