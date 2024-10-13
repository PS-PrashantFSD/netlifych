import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from './../../../styles/shared/text';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  position: relative;
  display: block;
  margin-top: 200px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-top: 100px;
  `};
`;

export const Wrap = styled(motion.div)`
  margin: 40px 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.red};

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 2.5rem;
  `};
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: white;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.2rem;
  `};
`;

