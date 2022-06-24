import { Avatar, Button, Typography } from '@mui/material';
import MobileStickyNav from 'components/Molecules/mobileStickyNav';
import Image from 'next/image';
import React from 'react';
import { Styles } from './style';

interface Props {
  toggleDrawer: () => void;
}

const MobileQloudNavbar = ({ toggleDrawer }: Props) => {
  const styles = Styles();

  return (
    <div>
      <MobileStickyNav toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default MobileQloudNavbar;
