import React, { useState } from 'react';



const ButtonIndustry = ({ industry, setIndustry }) => {
    return (
        <ul className="containerButtonsPortfolio" style={{ display: industry !== '' ? 'none' : 'flex' }}>
            <li onClick={() => setIndustry('restaurantPortfolio')}>RESTAURANTS AND CAFES</li>
            <li onClick={() => setIndustry('ecommercePortfolio')}>E-COMMERCE AND RETAILS</li>
            <li onClick={() => setIndustry('professionalPortfolio')}>PROFESSIONAL SERVICES</li>
            <li onClick={() => setIndustry('healthPortfolio')}>HEALTHCARE AND MEDICAL SERVICES</li>
            <li onClick={() => setIndustry('other')}>OTHER</li>
        </ul>
    );
};

export default ButtonIndustry;