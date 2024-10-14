import React from 'react';
import { FooterContainer } from './styles'; // Import the styled component
import SocialMedia from '../../SocialMedia'; // Ensure you have a SocialMedia component
import AnimationonScreen from './../../AnimateOnScreen';
import Form from './../../Home/Form';

const Footer = () => {
  return (
    <AnimationonScreen>
      <FooterContainer>
        <AnimationonScreen>
          <Form />
        </AnimationonScreen>
        <div className="logo">
          <img src="logo.png" alt="Logo" style={{ width: '160px' }} /> {/* Replace with your logo path */}
        </div>
        <div>
          <p>Your go-to source for innovative solutions. We're here to help you achieve your goals.</p>
        </div>
        <div className="contact-info">
          <div className="column contact-text1" >
            <p>Address: 14 1st Stage Bhanashankari, Bangalore, KA IN</p>
          </div>
          {/* Image inserted here */}
          <h1 >nex</h1>{/* Adjust path and styles as needed */}
          <div className="column contact-text">
            <p>Phone: +91.866.044.9970 <br /> Email: info@luminexa.in</p>
          </div>
        </div>
        <div className="footer-links">
          <p>
            <a href="/services">Our Services</a> | 
            <a href="/privacy-policy"> Privacy Policy</a> | 
            <a href="/about"> About Us</a> | 
            <a href="/terms"> Terms and Conditions</a>
          </p>
        </div>
        <div className="social-media">
          <SocialMedia />
        </div>
        <div className="footer-note">
          <p style={{color: 'gray'}}>@luminexa 2024</p>
        </div>
      </FooterContainer>
    </AnimationonScreen>
  );
};

export default React.memo(Footer);
