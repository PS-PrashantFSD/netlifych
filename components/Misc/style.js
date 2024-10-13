import styled from 'styled-components';
import { motion } from 'framer-motion';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center; // Center items horizontally
  margin-left: 4%;
  padding: 40px 0px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.red};

  & .logo {
    margin-bottom: 20px;
    align-self: center; // Center logo
  }

  & .description {
    text-align: center; // Center description
    margin-bottom: 40px;
    ${secondaryFontStyle};
  }

  & .contact-info {
    display: flex;
    flex-wrap: wrap; // Allow wrapping on smaller screens
    justify-content: flex-start; // Align items to the start
    width: 100%;
    max-width: 800px; // Limit the width for better readability
    margin-bottom: 20px;

    & .column {
      flex: 1;
      text-align: center; // Center text in columns
      ${secondaryFontStyle}; // Include secondary font style
      margin-bottom: 10px; // Add spacing between rows on smaller screens
    }
  }

  & .footer-links {
    text-align: center; // Center footer links
    margin-bottom: 20px;

    & a {
      color: ${({ theme }) => theme.colors.red}; // Link color
      text-decoration: none; // Remove underline
      margin: 0 10px; // Spacing between links

      &:hover {
        text-decoration: underline; // Underline on hover
      }
    }
  }

  & .social-media {
    margin-bottom: 20px;
    align-self: center; // Center social media
  }

  & .footer-note {
    font-size: 14px;
    align-self: center; // Center footer note
  }

  // Media queries for responsive design
  @media (max-width: 600px) {
    padding: 20px 10px;

    & .contact-info {
      flex-direction: column; // Stack columns on smaller screens
    }

    & .column {
      margin-bottom: 15px; // Adjust spacing for smaller screens
    }
  }
`;
