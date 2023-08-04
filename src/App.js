import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import AddProduct from './components/dashboard/AddProduct';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
