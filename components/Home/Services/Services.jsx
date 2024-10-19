import React from 'react';
import Link from 'next/link';
import useCursorStyle from '../../../hooks/useCursorStyle';
import Card from './../../Misc/Card';
import Arrow from '../../Icons/Arrow';
import Contact from './../../Home/Contacts';
import AnimateOnScreen from './../../AnimateOnScreen';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  TextWrapper,
  Text1,
  Text2,
  Text3
} from './styles';
import Scard from '../../Misc/Scard';
import Button from '../../Misc/Button';

const Services = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <div>
      <ContentSection>
        <Link href="/services" passHref>
          <ProjectAnchor
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
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

        <Text1>
          <Text2>
            <Text3>
              We offer a range of services tailored to meet the unique needs of our clients, 
              including web development, augmented reality solutions, and innovative design services.
            </Text3>
          </Text2>
        </Text1>

        <TextWrapper>
          <Card />
          <div>
            <h2>
              Our target is to revolutionize visual experiences, 
              bridging the gap between the physical and digital worlds.
            </h2>
            <p>
              Our company specializes in cutting-edge digital solutions, including advanced Augmented 
              Reality software, user-friendly Web Development, and innovative AI-based object detection 
              systems for smart recognition.
            </p>
          </div>
        </TextWrapper>

        <h1 style={{ fontSize: '80px', marginBottom:'9px' }}>Explore</h1>
        <p >
          In today's competitive market, every business(from small to large scale) , seeks innovative
          solutions to engage their audience effectively. 
        </p>
        
        <Scard />
        <p>
        Traditional methods often fail to capture 
          attention and provide interactive experiences. Luminexa addresses this gap by leveraging 
          Augmented Reality (AR) & Mixed Reality (XR) to enhance user engagement and interaction.
        </p>
        <h1 style={{ fontSize: '20px', marginBottom: '20px', color:'red',  marginBottom:'60px'}} classNmae= 'bottomtext'>
          Featured Product nexAR
        </h1>
        
      </ContentSection>

      <AnimateOnScreen>
        <Contact />
      </AnimateOnScreen>
    </div>
  );
};

export default React.memo(Services);
