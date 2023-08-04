import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <i style={{ color: '#333' }} className="fa-brands fa-forumbee fa-bounce"></i>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/gifts">Quà tặng</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </nav>
      <div className="navigation-icons">
        <div className="search-icon" onClick={toggleSearch}>
          <i style={{ color: '#333' }} className="fas fa-search"></i>
        </div>
        <div className="user-icon">
          <Link to="/login">
            <i style={{ color: '#333' }} className="fa-solid fa-user"></i>
          </Link>
        </div>
        <div className="cart-icon">
          <Link to="/cart">
            <i style={{ color: '#333' }} className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
      {isSearchOpen && <SearchBar />}
    </header>
  );
};

export default Header;
