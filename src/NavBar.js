import React from 'react'
import "./App.css"
import SignIn from './SignIn';
import { useState } from 'react';
import HomeBody from './HomeBody';
import AboutUs from './AboutUs';
import Service from './Service';


function NavBar() {
    const [selectedOption, setSelectedOption] = useState('Accueil');
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <><div className="menu">
            <img src="/TUNISIA-Logo.png" className="logo" alt="" />

            <ul className='nav-ul'>
                <li onClick={() => handleOptionChange('Accueil')}>Home</li>
                <li onClick={() => handleOptionChange('Services')}>Services</li>
                <li onClick={() => handleOptionChange('À Propos')}>About Us</li>
            </ul>
            <div className="nav-language">
                <img src="/us_flag.png" width="25" alt="" />
                <p>EN</p>
                <img src="/dropdown_icon.png" width="8" alt="" />
                <img src="/search_icon.png" alt="" className="search" />
                <button type="button" onClick={() => handleOptionChange('Sign In')} className='signInButton'>Sign In</button> 
            </div>
        </div>
        <div>
            {selectedOption === 'Accueil' && <Accueil />}
            {selectedOption === 'Services' && <Services />}
            {selectedOption === 'À Propos' && <APropos />}
            {selectedOption === 'Sign In' && <SignIn />}
        </div>
        </>
    );
}
function Accueil() {
    return <HomeBody></HomeBody>;
}

function Services() {
    return <h2><Service></Service></h2>;
}

function APropos() {
    return <AboutUs></AboutUs>;
}


export default NavBar ;