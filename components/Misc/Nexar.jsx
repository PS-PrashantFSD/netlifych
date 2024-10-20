import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../styles/shared/container';

const CTASection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  background-color: white;
  padding: 100px 0;
  border-radius: 66px;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Space sections evenly */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on mobile */
    align-items: center; /* Center align items in mobile view */
  }
`;

const Section = styled.div`
  flex: 1; /* Make each section take equal space */
  margin: 0 20px; /* Add some margin between sections */
  max-width: 300px; /* Set a max-width for better responsiveness */
  text-align: center; /* Center text in sections */

  @media (max-width: 768px) {
    margin: 20px 0; /* Add vertical margin for mobile */
    max-width: 80%; /* Allow full width on mobile */
  }
`;

const GIFIcon = styled.img`
  width: 160px; /* Adjust size as needed */
  height: auto;
  cursor: pointer; 
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); /* Slightly scale on hover */
  }
`;

const CTAHeading = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  margin: 20px 0; /* Adjust margin to create spacing */
  color: red;
`;

const CTADescription = styled.p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;

const CallToAction = () => {
  return (
    <CTASection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <SectionsContainer>
        <Section>
          <CTAHeading>nexAR</CTAHeading>
          <GIFIcon src="invent.png" alt="PNG Icon 1" onClick={() => window.location.href = "tel:8660449970"} />
          <CTADescription>
            <strong>Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR.</strong>
          </CTADescription>
        </Section>
        
        <Section>
          
          <CTAHeading>How</CTAHeading>
          <GIFIcon src="howit.png" alt="PNG Icon 2" onClick={() => window.location.href = "tel:8660449970"} />
          <CTADescription>
            <strong>nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface.</strong>
          </CTADescription>
        </Section>
        
        <Section>
          <CTAHeading>Works</CTAHeading>
          <GIFIcon src="worked.png" alt="PNG Icon 3" onClick={() => window.location.href = "tel:8660449970"} />
          <CTADescription>
            <strong>nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS.</strong>
          </CTADescription>
        </Section>
      </SectionsContainer>
      <p style={{color:'black', margin:'19px'}}><strong>"Differentiate yourself from competition" </strong></p> <h1 style={{color:'black', fontSize: '80px'}}>go viral!</h1>
    </CTASection>
  );
};

export default CallToAction;
