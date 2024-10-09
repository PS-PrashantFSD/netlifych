import React from 'react';
import Link from 'next/link';
import useCursorStyle from '../../../hooks/useCursorStyle';
import Card from './../../Misc/Card';
import Arrow from '../../Icons/Arrow';
import Contact from './../../Home/Contact';
import {
  ContentSection,
  TextWrapper,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  AboutDescription,
} from './styles';
import Scard from '../../Misc/Scard';

const Services = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleAnchorHoverStart = () => {
    addCursorBorder();
  };

  const handleAnchorHoverEnd = () => {
    removeCursorBorder();
  };

  return (
    <ContentSection>
      <Link href="/services" passHref>
        <ProjectAnchor
          onMouseEnter={handleAnchorHoverStart}
          onMouseLeave={handleAnchorHoverEnd}
        >
          <ProjectInfo>
            <ProjectTitle>
              OUR <br /> SERVICES
              <span className="arrow">
                <Arrow />
              </span>
            </ProjectTitle>
          </ProjectInfo>
        </ProjectAnchor>
      </Link>

      {/* About Description */}
      <AboutDescription>
        <h2>
          We offer a range of services tailored to meet the unique needs of our clients, 
          including web development, augmented reality solutions, and innovative design services. 
          Our team is dedicated to delivering exceptional results that drive success and engagement.
        </h2>
      </AboutDescription>

      <TextWrapper>
      <Card />
        <div>
          <h2>
          Our target is to revolutionize visual experiences, 
          bridging the gap between the physical and digital worlds
          </h2>
          <p>
          Our company specializes in cutting-edge digital solutions, including advanced Augmented 
          Reality software, user-friendly Web Development, and innovative AI-based object detection 
          systems for smart recognition.
          </p>
        </div>
        
      </TextWrapper>
        <h1 style={{ fontSize: '100px' }}>
          Explore
        </h1>
      <Scard/>
      <Contact />
     
    </ContentSection>
  );
};

export default React.memo(Services);
