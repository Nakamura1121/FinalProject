import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/main.scss';
import Product from './pages/products'




const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/products" element={<Product />}/>
    </Routes>
    </div>
    
  );
};

export default App;
