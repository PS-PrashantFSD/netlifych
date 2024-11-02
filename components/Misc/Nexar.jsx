import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import containerStyles from '../../styles/shared/container';
import animation1 from './../Lottie/work.json'; 
import animation2 from './../Lottie/nexar.json';
import animation3 from './../Lottie/works.json';

const CTASection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  background-color: #302f2f;
  padding: 100px 0;
  border-radius: 66px;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allows wrapping for smaller screens */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  margin: 0 20px;
  max-width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 20px 0;
    max-width: 80%;
  }
`;

const LottieContainer = styled.div`
  width: 160px;
  height: 160px; /* Fixed height for uniformity */
  margin: 0 auto; /* Center the animation */
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CTAHeading = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  margin: 20px 0;
  color: white;
`;

const CTADescription = styled.p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: gray;
`;

const CallToAction = () => {
  return (
    <CTASection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <SectionsContainer>
        <Section>
          <CTAHeading>nexAR</CTAHeading>
          <LottieContainer onClick={() => window.location.href = "tel:8660449970"}>
            <Lottie animationData={animation2} loop={true} />
          </LottieContainer>
          <CTADescription>
            <strong>Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR.</strong>
          </CTADescription>
        </Section>
        
        <Section>
          <CTAHeading>How</CTAHeading>
          <LottieContainer onClick={() => window.location.href = "tel:8660449970"}>
            <Lottie animationData={animation1} loop={true} />
          </LottieContainer>
          <CTADescription>
            <strong>nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface.</strong>
          </CTADescription>
        </Section>
        
        <Section>
          <CTAHeading>Works</CTAHeading>
          <LottieContainer onClick={() => window.location.href = "tel:8660449970"}>
            <Lottie animationData={animation3} loop={true} />
          </LottieContainer>
          <CTADescription>
            <strong>nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS.</strong>
          </CTADescription>
        </Section>
      </SectionsContainer>
      <p style={{ color: '#e6e3e3 ', margin: '19px' }}><strong>"Differentiate yourself from competition"</strong></p>
      <h1 style={{ color: 'gray', fontSize: '80px' }}>go viral!</h1>
    </CTASection>
  );
};

export default CallToAction;
