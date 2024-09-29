import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: relative; /* Ensure positioning context */
        /* Adjust as needed */
  right: 28px;
  bottom: 17px;  /* Adjust as needed */
`;

const StyledLogo = styled.img`
  cursor: pointer;
  width: 250px;
  height: auto;
  margin: 0;

  @media (max-width: 768px) {
    width: 150px;
    margin: 10px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo
        src="/logo.png" // Reference directly from the public folder
        alt="Luminexa Logo"
      />
    </LogoContainer>
  );
};

export default Logo;
