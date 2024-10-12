import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

const ContactSection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px 200px;
  color: ${({ theme }) => theme.colors.red};
  transform: translate3d(0, 60px, 0);
  width: 70%;

  & .column {
    width: 33.333%;

    &:last-child {
      justify-content: flex-end;
    }

    & a:hover {
      color: ${({ theme }) => theme.text};
    }
  }

  & .contact-text {
    ${secondaryFontStyle};
    line-height: 28px;
    display: inline-block;
  }

  & address {
    padding: 0 8px;
  }

  ${({ theme }) => theme.breakpoints.medium`
    & .column {
      width: 41.666%;

      &:last-child {
        width: 16.666%;
      }
    }
  `};

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & .column {
      width: 100%;

      &:last-child {
        width: 100%;
        justify-content: flex-start;
        padding: 1px 0;
      }
    }

    & address {
      padding: 0;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 0 0px 60px;

    & address {
      padding: 17px 0 42px;
    }

    & .contact-text {
      font-size: 1.125rem;
      line-height: 21px;
    }
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
        <div className="column">
        <address>
        <h1>Contact Us</h1>
          <p style={{ color:'white'}}>nexAR - Augmented Reality finds diverse applicatons across marketing and advertising, 
              retail and e-commerce</p>
          <p><strong>© Luminexa Technologies. Pioneering in web and augmented reality solutions,</strong> 
              we are dedicated to transforming digital experiences. Connect with us for innovative, 
              custom-tailored technology services that drive your business forward.</p>
        </address>

      </div>
      <div className="column">
        
        <p style={{ marginBottom:'10px'}}>We'd love to hear <strong>from you!</strong></p>
        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="5" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </div>
      
    </ContactSection>
  );
};

export default ContactForm;
