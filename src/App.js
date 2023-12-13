import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/shop';
import ShopCategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory category="men"/>} />
          <Route path='/womens' element={<ShopCategory category="women"/>} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<Product/>} />
            <Route path='/productId' element={<Product />} />
          <Route />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/Login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
