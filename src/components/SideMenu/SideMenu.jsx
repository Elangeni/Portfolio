import './SideMenu.css'
import React, { useState } from 'react'

const SideMenu = ({ onMenuItemClick }) => {
  const [activeLink, setActiveLink] = useState('About'); // Initially, set the active link

  const handleClick = (menuItem) => {
    setActiveLink(menuItem); // Update the active link when a menu item is clicked
    onMenuItemClick(menuItem); // Pass the clicked menu item to the parent
  };
  return (
    <main className='menu'>
      <div className={`menu-item ${activeLink === 'About' ? 'is-active' : ''}`}
        onClick={() => handleClick('About')}>About Me</div>
      <div className={`menu-item ${activeLink === 'Skills' ? 'is-active' : ''}`}
        onClick={() => handleClick('Skills')}>Skills</div>
      <div className={`menu-item ${activeLink === 'Portfolio' ? 'is-active' : ''}`}
        onClick={() => handleClick('Portfolio')}>Portfolio</div>
      <div className={`menu-item ${activeLink === 'Contact' ? 'is-active' : ''}`}
        onClick={() => handleClick('Contact')}>Contact</div>
      <a href="https://drive.google.com/file/d/1haqOUQcRyv89f1qJt2LX5tbvL_TC7dP5/view?usp=sharing"><button class="content-button">Download Resume</button></a>
    </main>
  )
}

export default SideMenu
