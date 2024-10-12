import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';
import Forms from './../Form'

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <AnimateOnScreen>
      <Forms/>
      </AnimateOnScreen>
      <ContactSection>
        
        <div className="column">
          <a
            className="contact-text"
            href="tel:+918660449970"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +91.866.044.9970
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:info@luminexa.in"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            info@luminexa.in
          </a>
        </div>
        <address className="column contact-text">
          14 1st Stage Bhanashankari<br /> Bangalore, KA IN
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
