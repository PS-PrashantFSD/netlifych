import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useMediaQuery from '../../../hooks/useMediaQuery';
import AnimateOnScreen from '../../AnimateOnScreen';
import Arrow from '../../Icons/Arrow';
import Contact from './../../Home/Contacts';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  ImagePreview,
  AboutDescription,
  Wrap
} from './styles';

const transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1],
};

const words = ["Our Story", "Our Mission", "Our Vision"];

const AboutUs = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const controlsInfo = useAnimation();
  const controlsArrow = useAnimation();
  const {
    addCursorBorder,
    removeCursorBorder,
  } = useCursorStyle();
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  useEffect(() => {
    const typingEffect = () => {
      if (isTyping) {
        setCurrentWord((prev) => {
          const nextCharIndex = prev.length < words[wordIndex].length 
            ? prev.length + 1 
            : prev.length;
          return words[wordIndex].slice(0, nextCharIndex);
        });
      } else {
        setCurrentWord((prev) => prev.slice(0, -1));
      }
    };

    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentWord.length === words[wordIndex].length) {
          setIsTyping(false);
          setTimeout(() => setIsTyping(false), 1000); // wait before starting to delete
        }
      } else {
        if (currentWord.length === 0) {
          setWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }
      }
      typingEffect();
    }, isTyping ? 150 : 100);

    return () => clearTimeout(timeout);
  }, [currentWord, isTyping, wordIndex]);

 

  const handleAnchorHoverStart = () => {
    addCursorBorder();
    controlsInfo.start({ opacity: 1 });
    controlsArrow.start({ x: 0 });
  };

  const handleAnchorHoverEnd = () => {
    removeCursorBorder();
    controlsInfo.start({ opacity: 0 });
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  };

  useEffect(() => {
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [controlsArrow, isTabletView]);

  return (
    <div>
    <ContentSection>
      <AnimateOnScreen>
        <motion.div>
          <Link href="/about" passHref>
            <ProjectAnchor
              onHoverStart={handleAnchorHoverStart}
              onHoverEnd={handleAnchorHoverEnd}
            >
              <ProjectInfo>
                <h3>{currentWord}</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controlsInfo}
                  transition={transition}
                  className="project-info"
                >
                  <h4>Join Us on a Journey</h4>
                  <h4>003</h4>
                </motion.div>
                <ProjectTitle>
                  ABOUT <br/> US
                  <span className="arrow">
                    <Arrow animate={controlsArrow} transition={transition} />
                  </span>
                </ProjectTitle>
              </ProjectInfo>
              <ImagePreview>
                <img src="2386.jpg" alt="About Us" />
              </ImagePreview>
            </ProjectAnchor>
          </Link>
        </motion.div>
      </AnimateOnScreen>

      {/* About Description */}
      <AnimateOnScreen>
        <AboutDescription>
          <p>
            We are trailblazers in visual technology, specializing in augmented reality applications 
            and web application design. Our mission is to revolutionize visual experiences, bridging 
            the gap between the physical and digital worlds. With cutting-edge solutions like image 
            tracking, 3D image tracking, and avatar creation, we empower businesses and creators to 
            redefine how we interact with the visual world.
          </p>
          
        </AboutDescription>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <Wrap>
        <h1>
            Our Mission
          </h1>
          <p>
          <strong>Contribute to our community by pioneering innovative solutions that enhance everyday experiences. </strong>
          We are dedicated to delivering unparalleled value to our customers, guided by principles of 
          integrity, sustainability, and continuous improvement.
          </p>
          
          <h1>
            Our Vision
          </h1>
          <p>
          Empower positive change through cutting-edge technologies. <strong>Our vision is to be the 
          leading force in our industry, </strong>
          driving global impact and inspiring a future where possibilities are limitless.
          </p>
        </Wrap>
      </AnimateOnScreen>
      
      
        
      
    </ContentSection>
    <AnimateOnScreen>
    <Contact />
    </AnimateOnScreen>
      
    </div>
  );
};

export default React.memo(AboutUs);