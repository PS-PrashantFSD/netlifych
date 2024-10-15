import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  Wrap,
  Title,
  Paragraph
} from './styles';
import Contact from '../Contacts';

const TermsAndConditions = () => {
  return (
    <div>
      <ContentSection>
        <AnimateOnScreen>
          <Wrap>
            <Title>Terms and Conditions</Title>

            <Title>General Terms</Title>
            <Paragraph>
              By accessing and using this website, you agree to comply with the following terms and conditions of use, 
              which together with our privacy policy govern our relationship with you in relation to this website.
            </Paragraph>
            <Paragraph>
              If you do not agree to these terms, please do not use our site. We reserve the right to modify these terms 
              at any time, and your continued use of the website following any changes will constitute your acceptance of 
              those changes.
            </Paragraph>

            <Title>Use of the Site</Title>
            <Paragraph>
              The content of the pages of this website is for your general information and use only. It is subject to 
              change without notice. We do not guarantee the accuracy, completeness, or usefulness of this information. 
              You rely on such information at your own risk.
            </Paragraph>
            <Paragraph>
              Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </Paragraph>

            <Title>Disclaimer</Title>
            <Paragraph>
              The information contained in this website is for general information purposes only. We endeavor to keep 
              the information up to date and correct; however, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability with 
              respect to the website or the information, products, services, or related graphics contained on the 
              website for any purpose.
            </Paragraph>
            <Paragraph>
              Any reliance you place on such information is therefore strictly at your own risk. In no event will we 
              be liable for any loss or damage including without limitation, indirect or consequential loss or damage, 
              or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection 
              with, the use of this website.
            </Paragraph>

            <Title>Governing Law</Title>
            <Paragraph>
              These terms and conditions are governed by and construed in accordance with the laws of Luminexa Technologies, 
              and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction 
              of the courts of Karnataka, India.
            </Paragraph>
          </Wrap>
        </AnimateOnScreen>
        <AnimateOnScreen>
          <Contact/>
        </AnimateOnScreen>
      </ContentSection>
    </div>
  );
};

export default React.memo(TermsAndConditions);
