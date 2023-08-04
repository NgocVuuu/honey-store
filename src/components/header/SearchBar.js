import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Gọi hàm onSearch và truyền giá trị searchTerm để xử lý tìm kiếm
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;
