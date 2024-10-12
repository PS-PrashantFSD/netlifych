import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <h2 style={{ color: 'white'}}>Get in Touch</h2>
          <p style={{ color: 'white'}}>If you have any questions or would like to work together, feel free to reach out!</p>
          <a
            className="contact-text"
            href="tel:+1.902.417.0634"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +91.866.044.9970
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:info@furrow.studio"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            info@luminexa.in
          </a>
        </div>
        
        <div className="column">
          <SocialMedia />
          <address className="contact-text">
            14 1st Stage Bhanashankari<br /> Bangalore, KA IN
          </address>
        </div>
        
        <div className="column">
          <form className="contact-form">
            <h3>Contact Form</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
