import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';

function App() {
  const [menuVisible, setMenuVisible] = useState(true)
  return (
    <div className="App">
      <MobileMenu 
      menuVisible={menuVisible}
      setMenuVisible={setMenuVisible} 
      />
      <Navbar setMenuVisible={setMenuVisible} />
      <Header />
    </div>
  );
}

export default App;
