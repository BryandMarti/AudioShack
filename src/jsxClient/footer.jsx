import React from 'react';
import '../scripts_css/footer.css';
import facebookIcon from '../staticImgs/facebook.png'; 
import twitterIcon from '../staticImgs/xtwitter.png';
import instagramIcon from '../staticImgs/instagram.png';
import linkedinIcon from '../staticImgs/linked.png'; 


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
          <li>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <img src={facebookIcon} alt='Facebook' className='social-icon' /> Facebook
            </a>
          </li>
          <li>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <img src={twitterIcon} alt='Twitter' className='social-icon' /> Twitter
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <img src={instagramIcon} alt='Instagram' className='social-icon' /> Instagram
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/bmarti2899/' target='_blank' rel='noopener noreferrer'>
              <img src={linkedinIcon} alt='LinkedIn' className='social-icon' /> LinkedIn
            </a>
          </li>
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
