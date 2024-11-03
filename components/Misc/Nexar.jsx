import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import containerStyles from '../../styles/shared/container';
import animation1 from './../Lottie/work.json'; 
import animation2 from './../Lottie/nexar.json';
import animation3 from './../Lottie/works.json';

const CTASection = styled(motion.section)`
  ${containerStyles};
  position: relative; /* Required for the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 80px;
  padding: 60px 0;
  border-radius: 66px;
  color: white; /* Text color for visibility on dark background */

  background-image: url('rbg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    border-radius: 66px; /* Match the border-radius */
    z-index: 1;
  }

  /* Ensures text appears above the overlay */
  * {
    position: relative;
    z-index: 2;
  }
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
    margin: 8px 0;
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
  font-size: 4.75rem;
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

const Button = styled.button`
  padding: 20px 50px;
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: #302f2f;
  padding: 40px;
  border-radius: 36px;
  max-width: 400px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Relative for close button positioning */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`;

const FormButton = styled.button`
  padding: 15px 30px; /* Adjust padding as needed */
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px; /* Adjust margin to reduce gap */
  width: 100%; /* Full width for better alignment */

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;


const CallToAction = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <CTASection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 style={{ fontSize: '69px', marginBottom: '60px', fontStyle: 'italic' }}>What's New</h1>
        <p style={{ width: '80%', marginBottom: '20px' }}>
          Augmented Reality (AR) integrates digital information with the real world, enhancing user experiences.
          It overlays images, videos, or 3D models onto the physical environment in real-time. AR is utilized in 
          smartphones, tablets, and smart glasses, offering applications in gaming, navigation, education, 
          and retail. It relies on sensors, cameras, and computer vision to track objects and provide interactive 
          content. Challenges include hardware limitations and content creation complexities. 
          AR's ongoing evolution holds promise for diverse industries
        </p>

        <SectionsContainer>
          <Section>
            <CTAHeading>nexAR</CTAHeading>
            <LottieContainer>
              <Lottie animationData={animation2} loop={true} />
            </LottieContainer>
            <CTADescription>
              <strong>Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR.</strong>
            </CTADescription>
          </Section>
          
          <Section>
            <CTAHeading>How</CTAHeading>
            <LottieContainer>
              <Lottie animationData={animation1} loop={true} />
            </LottieContainer>
            <CTADescription>
              <strong>nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface.</strong>
            </CTADescription>
          </Section>
          
          <Section>
            <CTAHeading>Works</CTAHeading>
            <LottieContainer>
              <Lottie animationData={animation3} loop={true} />
            </LottieContainer>
            <CTADescription>
              <strong>nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS.</strong>
            </CTADescription>
          </Section>
        </SectionsContainer>
        <p style={{ color: 'white', margin: '19px' }}><strong>Differentiate </strong> yourself from competition</p>
        <h1 style={{ color: 'white', fontSize: '80px' }}>Spark a Trend!</h1>
        <p style={{ color: 'gray', margin: '19px' }}><strong>#nexAR #AugmentedReality #webAR</strong> Innovative Solution</p>
        <Button onClick={openModal}><strong>Book Demo</strong></Button> 
      </CTASection>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h1 style={{fontSize: '30px', marginBottom: '20px'}}>Book a Demo</h1>
            <form>
              <FormField>
                <label>Name:</label>
                <Input type="text" name="name" required placeholder="John Wick" />
              </FormField>
              <FormField>
                <label>Mobile Number:</label>
                <Input type="tel" name="mobile" required placeholder="08660449970"/>
              </FormField>
              <FormField>
                <label>Email ID:</label>
                <Input type="email" name="email" required placeholder="info@luminexa.in"/>
              </FormField>
              <FormField>
                <label>Message:</label>
                <TextArea name="message" rows="4" required placeholder="I would like to request a demo session for the nexAR product."/>
              </FormField>
              <FormButton type="submit">Submit</FormButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default CallToAction;
