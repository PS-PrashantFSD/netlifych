import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const ContactSection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Align items at the top */
  justify-content: space-between;
  padding: 0 0 200px;
  color: ${({ theme }) => theme.colors.red};
  transform: translate3d(0, 60px, 0);
  width: 70%; /* Adjusted to full width */

  & .column {
    width: 30%; /* Adjusted for better alignment */
    display: flex;
    flex-direction: column; /* Ensure content stacks vertically */
    
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

  & .contact-form {
    display: flex;
    flex-direction: column;

    & input,
    & textarea {
      margin: 8px 0;
      padding: 10px;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      border-radius: 4px;
    }

    & button {
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.red};
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkRed};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.medium`
    & .column {
      width: 30%; /* Maintain consistent widths */
    }
  `};

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;

    & .column {
      width: 100%; /* Full width on small screens */
    }

    & address {
      padding: 0;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 0 0 60px;

    & address {
      padding: 17px 0 42px;
    }

    & .contact-text {
      font-size: 1.125rem;
      line-height: 21px;
    }
  `};
`;
