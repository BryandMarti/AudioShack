import React, { useState, useEffect } from 'react';
import '../scripts_css/across.css';
import BouncyBalls from '../scripts_css/bouncyBalls';
import '../scripts_css/audioslave.css';
import Slider from './slider';
import '../scripts_css/home.css';
// import Hero from '../staticImgs/image.png';
import TheOnly from '../staticImgs/theonly.png';
import PlayBackVid from '../staticImgs/videoplayback.mp4';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='homeIndex'>
      <BouncyBalls />
      <main className="home">
        <div className='Home-Div'>
          <img src={TheOnly} alt="TheOnly" className='Slogan' />
          <video autoPlay loop muted className='Hero'>
            <source src={PlayBackVid} type="video/mp4" />
          </video>
        </div>
        <section className='Facts-Section'>
        <div className='fact'>
          <h3>Fact about Audio</h3>
          <p>Audio quality is measured by bit rate, sample rate, and bit depth. Higher values generally mean better sound quality.</p>
        </div>
        <div className='fact'>
          <h3>Fact about Headphones</h3>
          <p>Noise-cancelling headphones use active noise control to reduce unwanted ambient sounds, making them ideal for travel.</p>
        </div>
        <div className='fact'>
          <h3>Fact about Speakers</h3>
          <p>Speakers convert electrical energy into mechanical energy to produce sound, and their quality is influenced by materials and design.</p>
        </div>
      </section>
        <section className='Slider-Section'>
          <Slider products={products} />
        </section>
      </main>
    </div>
  );
}
