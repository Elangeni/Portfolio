import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import About from './components/finder/About';
import HeaderLinks from './components/header/HeaderLinks';
import React, {useState} from 'react'

const App  = () => {
  const [selectedMenu, setSelectedMenu] = useState('About');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenu(menuItem);
    console.log(menuItem);
  };
  return (
    <div className="App">
      <div className='app'>
        <div class="header">
          <div class="menu-circle"></div>
          <HeaderLinks onMenuItemClick={handleMenuItemClick}/>
          {/* <img class="profile-img" src="" alt=""/> */}
        </div>
        <div className="finder">
          <SideMenu />
          {selectedMenu === 'About' ? <About /> : <About />}
        </div>
      </div>
    </div>
  );
}

export default App;
