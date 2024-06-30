import React, { useState } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/main.scss';
import Product from './pages/products'
import Footer from './components/Footer';
import RegisterForm from './auth/RegisterForm';
import LoginForm from './auth/LoginForm';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
// import ProtectedRoute from './middleware/ProtectedRoute';
// import { isAuthenticated } from './services/authService'



const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };
  

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/products" element={<Product />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      {/* <Route element={isAuthenticated() ? <Navigate to="/products" /> : <Navigate to="/login" />}
    /> */}
    </Routes>
    {/* <Routes>
      <ProtectedRoute path="/products" element={<Product />} /> 
    </Routes> */}
   
    <Footer/>
    </div>
    
  );
};

export default App;
