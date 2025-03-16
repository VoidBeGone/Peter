//note this the home page 
"use client";
//import "../styles/navbarold.css";

import { Cedarville_Cursive } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';
import { useState } from 'react';

const robotoSlab = Roboto_Slab({
  weight: ['100', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const cedarvilleCursive = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Navbar({handleNavClick}) {
  const [activeNav, setActiveNav] = useState('Home');

  const navPressed = (navName) => {
    setActiveNav(navName);
  };

  const handleClick = (navName) => {
    setActiveNav(navName);
    handleNavClick(navName);
  }
  
  return (
    <div className="navbarcontainer">
      <div className="navcontent">
        <span className={`navName ${cedarvilleCursive.className}`}>Peter</span>
      </div>
      <div className="navcontent">
        {['Options', 'Home', 'About', 'Work', 'Contact'].map((navItem) => (
          <div
            key={navItem}
            className={`navOptions ${activeNav === navItem ? 'active' : ''} font-roboto`}
            onClick={() => handleClick(navItem)}
          >
            {navItem}
          </div>
        ))}
      </div>
      <div className="navcontent">
        <div className="navSpecialContent"></div>
      </div>
    </div>
  );
}
