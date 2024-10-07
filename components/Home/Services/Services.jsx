import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useMediaQuery from '../../../hooks/useMediaQuery';
import AnimateOnScreen from '../../AnimateOnScreen';
import Card from './../../Misc/Card'
import Arrow from '../../Icons/Arrow';
import Contact from './../../Home/Contact';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  ImagePreview,
  AboutDescription,
} from './styles';

const transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1],
};

const services = ["nexNet", "nexAR", "nexAI"];

const Services = () => {
  const [currentService, setCurrentService] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const controlsInfo = useAnimation();
  const controlsArrow = useAnimation();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  useEffect(() => {
    const typingEffect = () => {
      if (isTyping) {
        setCurrentService((prev) => {
          const nextCharIndex = prev.length < services[serviceIndex].length 
            ? prev.length + 1 
            : prev.length;
          return services[serviceIndex].slice(0, nextCharIndex);
        });
      } else {
        setCurrentService((prev) => prev.slice(0, -1));
      }
    };

    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentService.length === services[serviceIndex].length) {
          setIsTyping(false);
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (currentService.length === 0) {
          setServiceIndex((prev) => (prev + 1) % services.length);
          setIsTyping(true);
        }
      }
      typingEffect();
    }, isTyping ? 150 : 100);

    return () => clearTimeout(timeout);
  }, [currentService, isTyping, serviceIndex]);

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
    <ContentSection>
      <AnimateOnScreen>
        <motion.div>
          <Link href="/services" passHref>
            <ProjectAnchor
              onHoverStart={handleAnchorHoverStart}
              onHoverEnd={handleAnchorHoverEnd}
            >
              <ProjectInfo>
                <h3>{currentService}</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controlsInfo}
                  transition={transition}
                  className="project-info"
                >
                  <h4>Explore Our Offerings</h4>
                  <h4>001</h4>
                </motion.div>
                <ProjectTitle>
                  OUR <br/> SERVICES
                  <span className="arrow">
                    <Arrow animate={controlsArrow} transition={transition} />
                  </span>
                </ProjectTitle>
              </ProjectInfo>
              <ImagePreview>
                <img src="108502.jpg" alt="Our Services" />
              </ImagePreview>
            </ProjectAnchor>
          </Link>
        </motion.div>
      </AnimateOnScreen>

      {/* About Description */}
      <AnimateOnScreen>
        <AboutDescription>
          <h2>
            We offer a range of services tailored to meet the unique needs of our clients, 
            including web development, augmented reality solutions, and innovative design services. 
            Our team is dedicated to delivering exceptional results that drive success and engagement.
          </h2>
        </AboutDescription>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <Card/>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <Contact />
      </AnimateOnScreen>
    </ContentSection>
  );
};

export default React.memo(Services);
