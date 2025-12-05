import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="college-header">
      <div className="header-top">
        <div className="container">
          <div className="brand">
            <h1 className="vietnamese-name">TRƯỜNG CAO ĐẲNG ĐÀ NẴNG</h1>
            <p className="english-name">DA NANG COLLEGE</p>
          </div>
          <div className="header-actions">
            <nav className="quick-links">
              <a href="#bang-nhap">Đăng nhập </a>
              <span>|</span>
              <a href="#lien-he">Liên hệ</a>
            </nav>
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm" />
              <button type="button">Q</button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="campuses">
            <div className="campus">
              <strong>Cơ sở chính:</strong> 99 Tô Hiến Thành, P. An Hải, TP. Đà Nẵng
            </div>
            <div className="campus">
              <strong>Cơ sở 2:</strong> 130 Lê Quang Đạo, P. Ngũ Hành Sơn, TP. Đà Nẵng
            </div>
            <div className="campus">
              <strong>Cơ sở 3:</strong> Lô số 3, Đường Mai Băng Châu, P. Ngũ Hành Sơn, TP. Đà Nẵng
            </div>
          </div>
          <div className="contact-info">
            <div className="email">
              📧 <a href="mailto:danavtc@danavtc.edu.vn">danavtc@danavtc.edu.vn</a>
            </div>
            <div className="phone">
              📞 <a href="tel:02363942790">02363.942.790</a> - <a href="tel:02363940946">02363.940.946</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



