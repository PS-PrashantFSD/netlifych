import React from 'react';
import { FooterContainer } from './styles';
import SocialMedia from '../../SocialMedia';
import AnimationonScreen from './../../AnimateOnScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <AnimationonScreen>
      <FooterContainer>
        <div className="footer-columns">
          {/* First Column */}
          <div className="column">
            <div className="logo">
              <img src="gray.png" alt="Luminexa Company Logo" style={{ width: '160px' }} />
            </div>
            <h1>nex</h1>
            <p>Your go-to source for innovative solutions. We're here to help you achieve your goals.</p>
            <p>
            @ Address: 14 1st Stage Bhanashankari, Bangalore, KA IN
            </p>
            <div className="social-media">
              <SocialMedia />
            </div>
          </div>
          {/* Second Column */}
          <div className="column">
            <h3>Contact</h3>
            <p>Mobile: +91.866.044.9970</p>
            <p>Mobile: +91.123.456.7890</p>
            <p>Email: info@luminexa.in</p>
          </div>

          {/* Third Column */}
          <div className="column">
            <h3>Legal</h3>
            <p><a href="/privacy">Privacy Policy</a></p>
            <p><a href="/terms">Terms and Conditions</a></p>
            <p><a href="/disclaimer">Disclaimer</a></p>
          </div>

          {/* Fourth Column */}
          <div className="column">
            <h3>Other</h3>
            <p><a href="/blog">Blog</a></p>
            <p><a href="/careers">Career</a></p>
            <p><a href="/services">Services</a></p>
          </div>
        </div>

        <div className="footer-note">
          <p style={{ color: 'white' }}>&copy; Luminexa 2024</p>
        </div>
      </FooterContainer>
    </AnimationonScreen>
  );
};

export default React.memo(Footer);
