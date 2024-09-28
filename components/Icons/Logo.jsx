import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
 

  return (
    <div
      
    >
      <img
        src="/logo.png"  // Reference directly from the public folder
        alt="Luminexa Logo"
        style={{ cursor: 'pointer', width: '250px', height: 'auto' }}
        
      />
    </div>
  );
};

export default Logo;