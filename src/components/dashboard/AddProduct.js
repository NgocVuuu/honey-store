import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HoneyForm from '../HoneyForm';

const AddProduct = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <h1>Add Product</h1>
        <HoneyForm fetchHoneyList={() => {}} />
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
