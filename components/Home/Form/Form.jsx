import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

const ContactSection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 200px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.medium`
    width: 100%;
  `};

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  `};
`;

const TextWrapper = styled.div`
  
  width: 58.333%;

  & h1 {
    font-size: 90px;
    color: white;
    margin-bottom: 6px
  }

  & p {
    grid-column: span 2; 
    font-size: 1.5rem; 
    text-align: left; 
    transition: color 0.3s;
    color: white;
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    width: 100%;
  `};
`;

const FormWrapper = styled.div`

  width: 33.333%;

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    width: 100%;
  `};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0px;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.red};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0px;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.red};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 0px;
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;

const ContactForm = () => {
  return (
    <ContactSection>
      <TextWrapper>
        <h1 style={{fontSize: '69px'}}>Contact Us</h1>
        <p>
          nexAR - Augmented Reality finds diverse applications across marketing and advertising,
          retail and e-commerce.
        </p>
        <p>
          <strong>© Luminexa Technologies.</strong> Pioneering in web and augmented reality solutions,
          we are dedicated to transforming digital experiences. Connect with us for innovative,
          custom-tailored technology services that drive your business forward.
        </p>
      </TextWrapper>
      <FormWrapper>
        <p style={{ marginBottom: '10px' }}>
          We'd love to hear <strong>from you!</strong>
        </p>
        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="5" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </FormWrapper>
    </ContactSection>
  );
};

export default ContactForm;
