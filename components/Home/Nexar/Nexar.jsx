import React from 'react';
import Link from 'next/link';
import useCursorStyle from '../../../hooks/useCursorStyle';
import Cards from './../../Misc/Cards';
import Arrow from '../../Icons/Arrow';
import Contact from './../../Home/Contact';
import {
  ContentSection,
  TextWrapper,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  Text2,
  Text3,
  Text1
} from './styles';
import Scard from '../../Misc/Scard';
import Button from '../../Misc/Button'

const Nexar = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleAnchorHoverStart = () => {
    addCursorBorder();
  };

  const handleAnchorHoverEnd = () => {
    removeCursorBorder();
  };

  return (
    <ContentSection>
      <Link href="/nexar" passHref>
        <ProjectAnchor
          onMouseEnter={handleAnchorHoverStart}
          onMouseLeave={handleAnchorHoverEnd}
        >
          <ProjectInfo>
            <ProjectTitle>
              nexAR
              <span className="arrow">
                <Arrow />
              </span>
            </ProjectTitle>
          </ProjectInfo>
        </ProjectAnchor>
      </Link>

      {/* About Description */}
      <Text1>
        <Text2>
          <Text3>
          Luminexa providing, Image tracking and virtual software’s (nexAR) based on AR & XR. They aim to revolutionize  
digital content experiences by integrating it seamlessly with the real world, offering unique, interactive experiences  
that captivate audiences.


          </Text3>
        </Text2>
      </Text1>
      <TextWrapper>
      <Cards />
        <div>
        <img src="nexars.png" alt="Description of the image"  style={{ width: '300px', height: 'auto' , marginBottom: '20px'}}/>
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
        <h1 style={{ fontSize: '80px' }}>
          Explore~
        </h1>
      <Scard/>
      <h1 style={{ fontSize: '60px', marginBottom:'20px' }}>
         Featured Product - nexAR
        </h1>
        <Button/>
        <p style={{ marginBottom: '90px' }}> In today's competitive market, in every businesses (Small scale business to large scale business) seeks for innovative
solutions to engage their audience more effectively. Traditional methods often fail to capture attention and provide
interactive experiences. Luminexa addresses this gap by leveraging Augmented Reality (AR) & Mixed Realty (XR) to
enhance user engagement and interaction.</p>
      <Contact />
    </ContentSection>
  );
};

export default React.memo(Nexar);
