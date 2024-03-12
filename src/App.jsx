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

          <TwoBoxes classname={''} text1={'BASIC'} text2={'PRO'}/>

        <div class="containerWhyUs">
          <h1 class="headerWhyUs">WHY US?</h1>

          <TwoBoxes classname={'WhyUs'} text1={'PRICING'} text2={'SPEED'}/>
          <TwoBoxes classname={'WhyUs'} text1={'RELIABILITY'} text2={'YAKI'}/>
        </div>

      </body>
    </>
  )
}

export default App
