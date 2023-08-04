import React from 'react';

const ComboCard = (props) => {
  const { image, name, originalPrice, currentPrice, isOnSale, rating, inStock } = props;

  const renderPrice = () => {
    if (originalPrice !== currentPrice) {
      return (
        <div className="price">
          <span className="original-price">${originalPrice}</span>
          <span className="current-price">${currentPrice}</span>
        </div>
      );
    } else {
      return <div className="price">${currentPrice}</div>;
    }
  };

  return (
    <div className="combo-card">
      <div className="image-container">
        <img src={image} alt={name} className="image" />
        <div className="hover-overlay">
          <button className="detail-button">Xem chi tiết</button>
          <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className="combo-info">
        <h3 className="combo-name">{name}</h3>
        <div className="divider"></div>
        {renderPrice()}
        {isOnSale && <div className="sale-label">Sale</div>}
        <div className="rating">{rating} Đánh giá</div>
        <div className="stock-status">{inStock} còn hàng</div>
        <button className="wishlist-button">Yêu thích</button>
      </div>
    </div>
  );
};

export default ComboCard;
