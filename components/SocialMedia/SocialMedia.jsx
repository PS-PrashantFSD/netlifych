
import React from 'react';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from '../Icons';
import StickyCursor from '../StickyCursor';
import { Container, Link } from './styles';

const medias = [
  { component: Instagram, url: 'instagram.com/_luminexa/' },
  { component: Facebook, url: 'https://www.facebook.com/arluminexa/' },
  { component: Youtube, url: 'https://youtube.com' },
  { component: Twitter, url: 'https://twitter.com/_luminexa' },
  { component: Linkedin, url: 'https://linkedin.com/company/luminexa-technology' },
];

const SocialMedia = props => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container {...props}>
      {medias.map(({ component: Component, url }) => (
        <StickyCursor key={url}>
          <Link
            target="_blank"
            href={url}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Component />
          </Link>
        </StickyCursor>
      ))}
    </Container>
  );
};

export default React.memo(SocialMedia);
