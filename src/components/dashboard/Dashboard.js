import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AddProduct from './AddProduct'; // Đảm bảo bạn đã import đúng đường dẫn
import HoneyForm from '../HoneyForm';
import HoneyList from '../HoneyList';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/add-product">Add Product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/dashboard/" element={<DashboardContent />} />
        <Route path="/dashboard/add-product" element={<AddProduct />} /> {/* Thêm Route này */}
      </Routes>

      <Footer />
    </div>
  );
};

const DashboardContent = () => {
  const [honeyList, setHoneyList] = useState([]);

  useEffect(() => {
    // Lấy danh sách sản phẩm từ API và cập nhật honeyList
    fetchHoneyList();
  }, []);

  const fetchHoneyList = async () => {
    try {
      // Gọi API để lấy danh sách sản phẩm
      const response = await fetch('/api/honey');
      const data = await response.json();
      setHoneyList(data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sản phẩm:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <HoneyList honeyList={honeyList} /> {/* Truyền danh sách sản phẩm */}
      <HoneyForm fetchHoneyList={fetchHoneyList} />
    </div>
  );
};

export default Dashboard;
