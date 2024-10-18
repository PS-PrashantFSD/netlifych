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
  background-color: ${({ theme }) => theme.colors.red};
  padding: 100px 0px 100px 0px;
`;

const CTAHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
`;

const CTADescription = styled.p`
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;

const CTAButton = styled.a`
  padding: 15px 30px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  background-color: black;;
  border: none;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;

const CallToAction = () => {
  return (
    <CTASection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <CTAHeading>Unlock the potential of nexAR and AI in your business</CTAHeading>
      <CTADescription>
        Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. 
        Start your digital revolution now!
      </CTADescription>
      <CTAButton href="tel:8660449970">Call to Action</CTAButton>
    </CTASection>
  );
};

export default CallToAction;
