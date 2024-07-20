import React from 'react';
import '../scripts_css/footer.css';


const Footer = () => {
  return (
    <footer className='FooterR'>
      <div className='footerC'>
        <div className='footerAbout'>
          <h2>About Us</h2>
          <p>Audio Shack LLC is your go-to place for premium audio equipment and accessories. <br/> We offer a wide range of products to suit every audiophile's needs.</p>
        </div>
      </div>
      <div className='footerSocial'>
        <h2>Follow Us</h2>
        <ul>
          <li><a href='https://facebook.com'><i className='face'></i> Facebook</a></li>
          <li><a href='https://twitter.com'><i className='Twit'></i> Twitter</a></li>
          <li><a href='https://instagram.com'><i className='IG'></i> Instagram</a></li>
          <li><a href='https://linkedin.com'><i className='linkedin'></i> LinkedIn</a></li>
        </ul>
      </div>
      <div className='footerBottom'>
        <p>&copy; {new Date().getFullYear()} Audio Shack LLC. All rights reserved.</p>
        <p>Designed by Bryandmr | Powered by React</p>
      </div>
    </footer>
  );
};

export default Footer;
