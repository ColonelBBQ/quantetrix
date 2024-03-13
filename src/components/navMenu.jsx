import React, { useState } from 'react';


const NavMenu = ({ color, font, logo, colorhover }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const style = {
    normal: {
      color: color,
      fontFamily: font,
      fontSize: '16px',
      textDecoration: 'none',
      fontWeight: '600',
      paddingRight: 30,
      transition: 'color 0.3s ease',
    },
    hover: {
      color: colorhover,
    },
  };

  return (
    <header style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <nav style={{ paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1180px', minHeight: '80px' }}>
        <a href="main.html#home">
          <img src={logo} alt="Logo" className={logo} style={{ width: 100, height: 'auto', display: 'inline-block' }} />
        </a>
        <ul className="menu" style={{ display: 'flex', listStyleType: 'none' }}>
          <li 
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href="main.html#home"
              style={hoveredItem === 'home' ? { ...style.normal, ...style.hover } : style.normal}
            >
              Home
            </a>
          </li>
          <li 
            onMouseEnter={() => setHoveredItem('products')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href="main.html#products"
              style={hoveredItem === 'products' ? { ...style.normal, ...style.hover } : style.normal}
            >
              Prodotti
            </a>
          </li>
          <li 
            onMouseEnter={() => setHoveredItem('about')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href="main.html#about"
              style={hoveredItem === 'about' ? { ...style.normal, ...style.hover } : style.normal}
            >
              Chi Siamo
            </a>
          </li>
          <li 
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href="main.html#contact"
              style={hoveredItem === 'contact' ? { ...style.normal, ...style.hover } : style.normal}
            >
              Contatti
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;

