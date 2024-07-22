import React, { useState, useRef } from 'react';
import './scripts_css/across.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './jsxClient/home';
import ContactUs from './jsxClient/ContactUs';
import Products from './jsxClient/Products';
import Error404 from './jsxClient/404';
import logo from './staticImgs/audiologo.png';
import './scripts_css/Navigation.css';
import Footer from './jsxClient/footer';
import HamburgerMenu from './jsxClient/hamburgerMenu';
import backgroundMusic from './staticImgs/jazz123.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <header className='App-Header'>
        <Router className="navRouter">
          <div className="WholePage">
            <nav className="navBar">
              <Link to="/" className="LogoLink">
                <img src={logo} alt="Logo" className='LogoImg' />
              </Link>
              <div className='LinksDiv'>
                <ul className='navBarUl'>
                  <li>
                    <Link className='NavLinks' to="/">Home</Link>
                  </li>
                  <li>
                    <Link className='NavLinks' to="/products">Products</Link>
                  </li>
                  <li>
                    <Link className='NavLinks' to="/contact">Contact</Link>
                  </li>
                </ul>
                <HamburgerMenu />
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </Router>
      </header>
      <Footer />
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop />
      <div className="audio-controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
      </div>
    </div>
  );
}

export default App;
