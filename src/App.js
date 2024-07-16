import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import ContactUs from './ContactUs';
import Products from './Products';
import logo from './staticImgs/audiologo.png';


function App() {
  return (
    <div>
      <header className='App-Header'>
        <Router className="navRouter">
          <div  className="nav">
            <nav>
              <img src={logo} alt="Logo" className='logo' />
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>

          </div>
        </Router>
      </header>
    </div>
  );
}


export default App;
