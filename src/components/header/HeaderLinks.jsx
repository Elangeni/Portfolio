/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './HeaderLinks.css'

const HeaderLinks = ({ onMenuItemClick }) => {
  const [activeLink, setActiveLink] = useState('About'); // Initially, set the active link

  const handleClick = (menuItem) => {
    setActiveLink(menuItem); // Update the active link when a menu item is clicked
    onMenuItemClick(menuItem); // Pass the clicked menu item to the parent
  };
  return (
    <div className='header-menu'>
      <a
        className={`menu-link ${activeLink === 'About' ? 'is-active' : ''} main-header-link`}
        onClick={() => handleClick('About')}
      >
        About Me
      </a>
      <a
        className={`menu-link ${activeLink === 'Portfolio' ? 'is-active' : ''}`}
        onClick={() => handleClick('Portfolio')}
      >
        Portfolio
      </a>
      <a
        className={`menu-link ${activeLink === 'Skills' ? 'is-active' : ''}`}
        onClick={() => handleClick('Skills')}
      >
        Skills
      </a>
    </div>
  )
}

export default HeaderLinks