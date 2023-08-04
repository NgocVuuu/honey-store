import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div>
      <div className="free-ship">
        <p>Freeship khi giá trị đơn hàng đạt hơn 500.000 VNĐ</p>
      </div>
      <Header />

      {/* Carousel */}
      <Carousel>
        <div>
          <img src="/img/carousel.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/img/carousel.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/img/carousel.jpg" alt="Slide 3" />
        </div>
      </Carousel>

      <section className="welcome-section">
        <div className="welcome-image">
          <img src="/img/flower chìm.jpg" alt="Ong in chìm" />
          <div className="welcome-text">
            <h2>CHÀO MỪNG ĐẾN VỚI MẬT ONG NHÀ PHƯỢNG</h2>
            <p style={{ color: 'yellowgreen' }}>
              <em> - Nơi chất lượng đáp ứng sự xuất sắc - </em>
            </p>
            <p>
            Chúng tôi là một công ty chỉ chuyên về mật ong. Bằng cách thu thập mật ong từ
              rất cơ bản, và với cách tiếp cận có đạo đức và trung thực, chúng tôi đã thực hiện
              có sẵn mật ong chất lượng tốt nhất và các sản phẩm khác từ Mật Phượng.
            </p>
          </div>
        </div>
      </section>

      {/* category-section */}
      <section className="categories-section">
        <div className="category">
          <img src="/img/category1.png" alt="Danh mục 1" />
          <h3>Các loại mật ong</h3>
          <div className="divider"></div>
          <p>Số lượng sản phẩm: 10</p>
        </div>
        <div className="category">
          <img src="/img/category2.png" alt="Danh mục 2" />
          <h3>Từ mật ong</h3>
          <div className="divider"></div>
          <p>Số lượng sản phẩm: 20</p>
        </div>
        <div className="category">
          <img src="/img/category3.png" alt="Danh mục 3" />
          <h3>Chăm sóc da</h3>
          <div className="divider"></div>
          <p>Số lượng sản phẩm: 15</p>
        </div>
        <div className="category">
          <img src="/img/category4.png" alt="Danh mục 4" />
          <h3>Dược phẩm</h3>
          <div className="divider"></div>
          <p>Số lượng sản phẩm: 12</p>
        </div>
        <div className="category">
          <img src="/img/category5.png" alt="Danh mục 5" />
          <h3>Quà tặng</h3>
          <div className="divider"></div>
          <p>Số lượng sản phẩm: 8</p>
        </div>
      </section>    

      {/* banner-section */}
      <section className="banner-section">
        <div className="banner">
          <div><img src="/img/banner.jpg" alt="banner" /></div>
          <div className="banner-text">
            <p>Your source for high-quality honey products</p>
            <p>Shop now and experience the natural goodness!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;