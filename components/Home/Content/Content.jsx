import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
          Innovation doesn’t simply emerge—
            <br />
            it’s cultivated. We sift through the layers of the ordinary to unearth 
            extraordinary ideas, embracing the grit and grind along the way.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
