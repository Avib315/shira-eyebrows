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
import Home from './admin/pages/Home/home';
import Orders from './admin/pages/Orders/orders';
import Products from './admin/pages/Products/products';
import CheckLogin from './admin/pages/CheckLogin/checkLogin';
import Dashboard from './admin/pages/Dashboard/dashboard';

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
            <Route path='/admin' element={<CheckLogin />}>
              <Route index element={<Home />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='orders' element={<Orders />} />
              <Route path='products' element={<Products />} />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </PopUpProvider>
    </div>
  );
}

export default App;
