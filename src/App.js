import React from 'react';
import AddProduct from './pages/Admin/AddProduct';
import ListProduct from './pages/Admin/ListProduct';
import Dashboard from './pages/Admin/AdminDashboard';
import Cart from './pages/Cart';
import ProfileUser from './pages/ProfileUser';
import DetailProduk from './pages/DetailProduk';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from "react-router-dom";
 

export default function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/myCart' element={<Cart/>}/>
          <Route path='/profile' element={<ProfileUser />}/>
          <Route path='/detail' element={<DetailProduk/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/listProduct' element={<ListProduct/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}


