import styled from 'styled-components';
import { motion } from 'framer-motion';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center; // Corrected to align-items for centering
  padding: 40px 20px;
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
    justify-content: center; // Center contact info
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

  & .social-media {
    margin-bottom: 20px;
    align-self: center; // Center social media
  }

  & .footer-note {
    font-size: 14px;
    align-self: center; // Center footer note
  }
`;
