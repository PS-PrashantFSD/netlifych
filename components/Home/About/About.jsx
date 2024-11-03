import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import Call from './../../Misc/Call'
import Nexar from './../../Misc/Nexar'
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <AnimateOnScreen>
      <Nexar/>
      </AnimateOnScreen>
    
      <ContentSection>
        <TextWrapper>
          <h1 style={{fontSize: '69px', marginBottom:'9px'}}>Luminexa</h1>
          <h2>
          Our mission is to revolutionize visual experiences, 
          bridging the gap between the physical and digital worlds.
          </h2>
        </TextWrapper>
        <ServicesWrapper>
          <h1 style={{fontSize: '69px', marginBottom:'9px'}}> Innovative Digital Solutions</h1>
          <p>
          We specialize in a range of cutting-edge digital solutions. 
          Our services include advanced Augmented Reality software that transforms your 
          digital interactions, comprehensive Web Development to create user friendly online 
          platforms, <strong>innovative Image Tracking And Object detection</strong> system designed to streamline 
          processes through smart recognition.
          </p>
        </ServicesWrapper>
      </ContentSection>
      <Call/>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
