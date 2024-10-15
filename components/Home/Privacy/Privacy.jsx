import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  Wrap,
  Title,
  Paragraph
} from './styles';
import Contact from '../Contacts';

const PrivacyPolicy = () => {
  return (
    <div>
      <ContentSection>
        <AnimateOnScreen>
          <Wrap>
            <Title>Privacy Policy</Title>
            <Paragraph>
              Your privacy is important to us. This policy explains how we handle and use your personal data.
            </Paragraph>
            <Paragraph>
              We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you 
              as to how we look after your personal data when you visit our website or use our services and tell you about 
              your privacy rights and how the law protects you.
            </Paragraph>

            <Title>Information Collection</Title>
            <Paragraph>
              We collect and process data about your usage of our augmented reality services, web development tools, and 
              object detection software, including but not limited to your interaction data and device information.
            </Paragraph>

            <Title>Use of Information</Title>
            <Paragraph>
              The information we collect is used to improve our services, provide customer support, communicate with you, 
              and comply with legal obligations.
            </Paragraph>

            <Title>Data Security</Title>
            <Paragraph>
              We implement a variety of security measures to maintain the safety of your personal information when you enter, 
              submit, or access your personal information.
            </Paragraph>

            <Title>Your Rights</Title>
            <Paragraph>
              You have rights under data protection laws in relation to your personal data, including the right to access, 
              correct, or delete your personal data.
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

export default React.memo(PrivacyPolicy);
