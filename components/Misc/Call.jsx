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
  padding: 100px 0px 100px 0px;
  border-radius: 66px;
`;

const CTAHeading = styled.h2`
    width:80%;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: red;
`;

const CTADescription = styled.p`
  width:82%;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;

const CTAButton = styled.a`
  padding: 15px 30px;
  font-size: 1rem;
  color: black;
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;

const ButtonIcon = styled.img`
  width: 20px; /* Adjust the size of the GIF icon */
  height: 20px; /* Adjust the size of the GIF icon */
  margin-right: 10px; /* Space between the icon and text */
`;

const CallToAction = () => {
  return (
    <CTASection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <CTAHeading>Unlock the potential of nexAR and AI in your business</CTAHeading>
      <CTADescription>
        <strong>Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. 
        Start your digital revolution now!</strong>
      </CTADescription>
      <CTAButton href="tel:8660449970">
        <ButtonIcon src="gif.gif" alt="GIF Icon" /> 
        Call to Action
      </CTAButton>
    </CTASection>
  );
};

export default CallToAction;
