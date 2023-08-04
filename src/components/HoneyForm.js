import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHoney } from '../api/honeyApi';
import '../css/HoneyForm.css'; // Liên kết tệp CSS

const HoneyForm = ({ fetchHoneyList }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Gửi yêu cầu POST đến API Node.js để tạo mới mật ong
      await createHoney(formData);
      // Cập nhật danh sách mật ong
      fetchHoneyList();
      // Reset form sau khi tạo mới thành công
      setFormData({
        name: '',
        price: '',
        description: '',
      });
      // Xử lý kết quả và thông báo thành công
      console.log('Mật ong đã được tạo mới thành công');
      // Chuyển hướng trở lại trang Dashboard
      navigate('/dashboard');
    } catch (error) {
      // Xử lý lỗi và thông báo lỗi
      console.error('Đã xảy ra lỗi khi tạo mới mật ong:', error.message);
    }
  };

  return (
    <div className="honey-form-container">
      <h2>Thêm mật ong mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên mật ong:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Giá (VND):</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Mô tả:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit">Thêm mật ong</button>
      </form>
    </div>
  );
};

export default HoneyForm;
