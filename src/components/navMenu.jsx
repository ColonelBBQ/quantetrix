import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo-quantetrix.png'


const NavMenu = () => {
  return (
    <header>
        <nav>
            <a href="main.html#home">
                <img src={Logo} alt="Logo" class="logo" />
            </a>
            <ul class="menu">
                <li><a href="main.html#home">Home</a></li>
                <li><a href="main.html#products">Prodotti</a></li>
                <li><a href="main.html#about">Chi Siamo</a></li>
                <li><a href="main.html#contact">Contatti</a></li>
            </ul>
        </nav>
    </header>

  );
};

export default NavMenu;