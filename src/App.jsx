import { useState } from 'react'
import './App.css'
import headerImage from '../src/assets/header-image.png'
import Logo from '../src/assets/logo-quantetrix.png'
import TwoBoxes from '../src/components/twoBoxes.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>


      <body>
        <div className='headContainer'>
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


          <div className='h1HeadContainer'>
            <h1 className='h1Title'>BUILD YOUR <br /> WEBSITE TODAY</h1>
            <img className='imageHead' src={headerImage} alt="Header Image" />
          </div>
        </div>


        <div className="containerPortfolio">
          <div className="containerBackgroundPortfolio">
            <ul>
              <li>Restaurants and Cafes</li>
              <li>E-commerce and Retail</li>
              <li>Professional Services</li>
              <li></li>
              <li>Altro</li>

            </ul>


          </div>


        </div>

      </body>
    </>
  )
}

export default App
