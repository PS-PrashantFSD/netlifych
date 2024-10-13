import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import AppBar from '../../components/AppBar';

const variants = {
  hidden: isTabletView => ({ y: isTabletView ? -81 : -131 }),
  show: { y: 0 },
};

const Footer = () => {
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  return (
    <AppBar
      
    />
  );
};

export default React.memo(Footer);
