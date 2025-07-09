import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ViewPage } from './pages/ViewPage';
import { SearchPage } from './pages/SearchPage';
import { ProfilePage } from './pages/ProfilePage';
import { SignupPage } from './pages/SignupPage';
import { CartPage } from './pages/CartPage';
import { NotFound } from './pages/NotFound';

const App=()=>{
  useState();
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/view-page" element={< ViewPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/signup-page" element={<SignupPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
  )
}
export default App
