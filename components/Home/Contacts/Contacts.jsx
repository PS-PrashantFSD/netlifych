import React from 'react';
import { FooterContainer } from './styles';
import SocialMedia from '../../SocialMedia';
import AnimationonScreen from './../../AnimateOnScreen';
import Form from './../../Home/Form'
import browserslist from 'browserslist';


const Footer = () => {
  return (
    <AnimationonScreen>
    
      <FooterContainer>
        <div className="footer-columns">
          {/* First Column */}
          <div className="column">
            <div className="logo">
              <img src="logo.png" alt="Luminexa Company Logo" style={{ width: '160px' }} />
            </div>
            <p style={{color: 'white'}}><strong>Luminexa Technologies</strong>, NB's Group of Company</p>
            <h1 style={{color: 'red'}}>nex</h1>
            <p >Your go-to source for innovative solutions. We're here to help you achieve your goals.</p>
            
            <div className="social-media">
              <SocialMedia />
            </div>
          </div>
          {/* Second Column */}
          <div className="column">
            <h3 style={{color: 'white'}}>Contact</h3>
            <p>Mobile: +91.866.044.9970</p>
            <p>Mobile: +91.948.161.5582</p>
            <p>Email: info@luminexa.in</p>
            <p>
            Address: 14 1st Stage Bhanashankari, Bangalore, KA IN
            </p>
          </div>

          {/* Third Column */}
          <div className="column">
            <h3 style={{color: 'white'}}>Legal</h3>
            <p><a href="/privacy">Privacy Policy</a></p>
            <p><a href="/terms">Terms and Conditions</a></p>
            <p><a href="/disclaimer">Disclaimer</a></p>
          </div>

          {/* Fourth Column */}
          <div className="column">
            <h3 style={{color: 'white'}}>Other</h3>
            <p><a href="/blog">Blog</a></p>
            <p><a href="/careers">Career</a></p>
            <p><a href="/services">Services</a></p>
          </div>
        </div>

        <div className="footer-note">
          <p style={{ color: 'Gray' }}>&copy; Copyright <strong>Luminexa Technologies</strong> 2024. All Right Reserved</p>
        </div>
      </FooterContainer>
    </AnimationonScreen>
  );
};

export default React.memo(Footer);
