import React, { useState, useEffect } from 'react'
import './App.css'
import headerImage from '../src/assets/header-image.png'
import Logo from '../src/assets/logo-quantetrix.png'
import TwoBoxes from '../src/components/twoBoxes.jsx'
import restaurantPortfolfio from './components/restaurantPortfolio.jsx'
import NavMenu from './components/navMenu.jsx';
import ButtonIndustry from './components/buttonsIndustry.jsx'
import RestaurantPortfolio from './components/restaurantPortfolio.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [industry, setIndustry] = useState('');


  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>


      <body>
        <div className='headContainer'>
          <NavMenu />

          <div className='h1HeadContainer'>
            <h1 className='h1Title'>BUILD YOUR <br /> WEBSITE TODAY</h1>
            <img className='imageHead' src={headerImage} alt="Header Image" />
          </div>
        </div>




        <div className="containerPortfolio">
          <div className="containerBackgroundPortfolio">
            <ButtonIndustry industry={industry} setIndustry={setIndustry} />
            {industry === 'restaurantPortfolio' && <RestaurantPortfolio />}
            {industry === 'ecommercePortfolio' && <RestaurantPortfolio />}
            {industry === 'professionalPortfolio' && <RestaurantPortfolio />}
            {industry === 'healthPortfolio' && <RestaurantPortfolio />}
            {industry === 'other' && <RestaurantPortfolio />}

          </div>
        </div>



      </body>
    </>
  )
}

export default App
