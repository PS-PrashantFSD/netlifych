import styled from 'styled-components';
import { motion } from 'framer-motion';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.red};
  

  & .logo {
    margin-bottom: 20px;
    align-self: center; // Center logo
  }

  & .description {
    text-align: center;
    margin-bottom: 40px;
    ${secondaryFontStyle};
  }

  & .contact-info {
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;
    width: 100%;
    max-width: 800px; 
    margin-bottom: 20px;

    & .column {
      flex: 1;
      text-align: center; 
      ${secondaryFontStyle}; 
      margin-bottom: 10px; 
    }
  }

  & .footer-links {
    text-align: center; 
    margin-bottom: 20px;
    font-size: 10px;

    & a {
      color: ${({ theme }) => theme.colors.red}; 
      text-decoration: none; 
      margin: 0 10px; 

      &:hover {
        text-decoration: underline; 
      }
    }
  }

  & .social-media {
    margin-bottom: 20px;
    align-self: center; 
  }

  & .footer-note {
    font-size: 14px;
    align-self: center; 
  }

  // Media queries for responsive design
  @media (max-width: 600px) {
    padding: 0px;

    & .contact-info {
      flex-direction: column; 
      align-items: center; 
      font-size: 10px;
    }

    & p {
        font-size: 15px;
    }

    & .column {
      width: 100%; 
      text-align: center; 
    }

    & .footer-links,
    & .social-media,
    & .footer-note {
      width: 100%; 
      text-align: center; 
    }
  }
`;
