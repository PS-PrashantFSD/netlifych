import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useWindowSize from '../../../hooks/useWindowSize';
import useStyledTheme from '../../../hooks/useStyledTheme';
import CanvasEraser from '../../CanvasEraser';
import { BannerSection, BannerTitle, VideoContainer } from './styles';

const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemTitleAnimation = {
  initial: { opacity: 0, scale: 0.8 }, // Start with opacity 0 and scale down
  animate: {
    opacity: 1, // Fade in
    scale: 1,   // Scale up to full size
    transition: {
      duration: 0.3, // Duration of the animation
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const texts = ['AR', 'Net', 'Ai'];

const Banner = () => {
  const canvasRef = React.useRef(null);
  const windowSize = useWindowSize();
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const isMobile = windowSize.width < 768; // Adjust breakpoint as needed

  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 500); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index]);

  return (
    <BannerSection style={{ height: windowSize.height }}>
      <VideoContainer>
        <video
          src="/videos/banner.mp4"
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
        />
      </VideoContainer>
      {!isMobile && (
        <CanvasEraser
          ref={canvasRef}
          width={windowSize.width}
          height={windowSize.height}
          size={120}
          background={theme.background}
          onMouseEnter={addCursorBorder}
          onMouseLeave={removeCursorBorder}
        />
      )}
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={itemTitleAnimation}>nex</motion.span>
        <motion.span variants={itemTitleAnimation} key={currentText}>
          {currentText}
        </motion.span>
      </BannerTitle>
    </BannerSection>
  );
};

export default React.memo(Banner);
