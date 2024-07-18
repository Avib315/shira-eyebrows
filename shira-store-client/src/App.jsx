// App.jsx
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import { PopUpProvider } from './functions/PopUpContext'
import { CartProvider } from './functions/CartContext'
import ItemPage from './pages/ItemPage/itemPage';
import CheckoutPage from './pages/CheckoutPage/checkoutPage';
import NotFound from './pages/NotFound/notFound';
import ShopPage from './pages/ShopPage/shopPage';
import Login from './admin/pages/Login/login';
import Admin from './admin/pages/Admin/admin';
import Home from './admin/pages/Home/home';
import Orders from './admin/pages/Orders/orders';
import Products from './admin/pages/Products/products';

function App() {
  return (
    <div className='App'>
      <PopUpProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/shop/:itemId' element={<ItemPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/admin'>
              <Route path='login' element={<Login />} />
              <Route path='home' element={<Admin><Home /></Admin>} />
              <Route path='orders' element={<Admin><Orders /></Admin>} />
              <Route path='products' element={<Admin><Products /></Admin>} />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </PopUpProvider>
    </div>
  );
}

export default App;
