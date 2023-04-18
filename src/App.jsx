import "./App.css";
import Cart from "./pages/Cart";
import Wishes from "./pages/Wishes";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Product from "./pages/ProductPage";
import ProductList from "./pages/ProductListPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { publicRequest } from "./requestMethods";
import { setAllProducts } from "./redux/productsRedux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await publicRequest.get(`/products/`);
      dispatch(setAllProducts(response.data));
    };
    fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route key="homePage" path="/" element={<Home />} />
        <Route key="cartPage" path="/cart" element={<Cart />} />
        <Route
          key="loginPage"
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          key="registerPage"
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route key="productPage" path="/product/:id" element={<Product />} />
        <Route
          key="productsPage"
          path="/products/:category"
          element={<ProductList />}
        />
        <Route key="wishesPage" path="/wishes" element={<Wishes />} />
      </Routes>
    </Router>
  );
}

export default App;
