import React from 'react';

const NavMenu = ({ color, font, logo }) => {
  return (
    <header style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <nav style={{ paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1180px', minHeight: '80px' }}>
        <a href="main.html#home">
          <img src={logo} alt="Logo" className={logo} style={{ width: 100, height: 'auto', display: 'inline-block' }} />
        </a>
        <ul className="menu" style={{ display: 'flex', listStyleType: 'none' }}>
          <li><a href="main.html#home" style={{ color: color, fontFamily: font, fontSize: '16px', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: '600', paddingRight: 30 }}>Home</a></li>
          <li><a href="main.html#products" style={{ color: color, fontFamily: font, fontSize: '16px', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: '600', paddingRight: 30 }}>Prodotti</a></li>
          <li><a href="main.html#about" style={{ color: color, fontFamily: font, fontSize: '16px', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: '600', paddingRight: 30 }}>Chi Siamo</a></li>
          <li><a href="main.html#contact" style={{ color: color, fontFamily: font, fontSize: '16px', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: '600', paddingRight: 30 }}>Contatti</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
