import React from 'react';
import { FooterContainer } from './styles'; // Import the styled component
import SocialMedia from '../../SocialMedia'; // Ensure you have a SocialMedia component
import AnimationonScreen from './../../AnimateOnScreen'
import Form from './../../Home/Form'

const Footer = () => {
  return (
    <FooterContainer>
      <AnimationonScreen>
        <Form/>
      </AnimationonScreen>
      <div className="logo">
        <img src="logo.png" alt="Logo" style={{ width: '160px'}}/> {/* Replace with your logo path */}
      </div>
      <div>
        <p>Your go-to source for innovative solutions. We're here to help you achieve your goals.</p>
      </div>
      <div className="contact-info">
        <div className="column contact-text">
        <p>Address: 14 1st Stage Bhanashankari, Bangalore, KA IN</p>
        </div>
        <div className="column contact-text">
        <p>Phone: +91.866.044.9970</p>
        </div>
      </div>
      <div className="contact-info">
        <div className="column contact-text">
          <p>Email: info@luminexa.in</p>
        </div>
        
      </div>
      <div className="social-media">
        <SocialMedia />
      </div>
      <div className="footer-note">
        <p>@luminexa 2024</p>
      </div>
    </FooterContainer>
  );
};

export default React.memo(Footer);
