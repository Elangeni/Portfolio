import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import About from './components/finder/About';
import Skills from './components/finder/Skills';
import React, {useState} from 'react'

const App  = () => {
  const [selectedMenu, setSelectedMenu] = useState('About');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenu(menuItem);
    console.log(menuItem);
  };

  // Map selectedMenu values to corresponding components
  const componentMap = {
    About: <About />,
    Skills: <Skills />, // Add other components here
    // Portfolio: <Portfolio />, // Add other components here
    // Contact: <Contact />, // Add other components here
  };

  return (
    <div className="App">
      <div className='app'>
        <div className="header">
          <div className="menu-circle"></div>
        </div>
        <div className="finder">
          <SideMenu onMenuItemClick={handleMenuItemClick}/>
          {componentMap[selectedMenu]}
        </div>
      </div>
    </div>
  );
}

export default App;
