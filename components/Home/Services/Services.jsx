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
        <div>
          <h2>
            Our mission is to revolutionize visual experiences, 
            bridging the gap between the physical and digital worlds.
          </h2>
          <p>
            At our company, we specialize in a range of cutting-edge digital solutions. 
            Our services include advanced Augmented Reality software that transforms your 
            digital interactions, comprehensive Web Development to create user-friendly online 
            platforms, innovative Image Tracking and Object Detection systems designed to streamline 
            processes through smart recognition.
          </p>
        </div>
        <Card />
      </TextWrapper>

      <Contact />
    </ContentSection>
  );
};

export default React.memo(Services);
