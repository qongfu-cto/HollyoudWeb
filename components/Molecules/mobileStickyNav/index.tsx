import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Branding } from 'utilities/branding';
import { Styles } from './style';
import Notification from '../../../assets/images/notification.svg';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import QloudCitySimpleLogo from '../../../assets/images/myQloud.svg';
import Buildings from '../../../assets/images/buildings.svg';
import router from 'next/router';

interface Props {
  toggleDrawer: () => void;
}

const MobileStickyNav = ({ toggleDrawer }: Props) => {
  const styles = Styles();

  return (
    <div className={styles.nav}>
      <div
        className={[styles.spaceBetween, styles.flex7].join(' ')}
        style={{
          flex: 1
        }}
      >
        <Button
          disableElevation
          sx={{
            backgroundColor: Branding.Colors.offWhite,
            color: Branding.Colors.primary.normal,
            fontSize: '10px',
            height: 32,
            textTransform: 'capitalize',
            width: 130,
            border: `1px solid ${Branding.Colors.black[6]}`,
            '&:hover': {
              backgroundColor: Branding.Colors.offWhite,
              color: Branding.Colors.primary.normal
            },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '8px 10px !important',
            borderRadius: 2
          }}
          className={styles.exploreCityBtn}
          variant="contained"
          onClick={() => {
            router.push('/');
          }}
        >
          <Image alt="" src={Buildings} width="16" height="16" />
          EXPLORE CITY
        </Button>
        <div className={styles.logoContainer}>
          <Image src={QloudCitySimpleLogo} alt="" width="90" height="29" />
        </div>
        <div className={styles.actionsContainer}>
          <LinearScaleIcon onClick={toggleDrawer} className={styles.menu} />
          <div style={{ width: 16 }} />
          {/* TODO: Add bell icon back */}
          {/* <Image src={Notification} alt="" width="18" height="24" /> */}
        </div>
      </div>
    </div>
  );
};

export default MobileStickyNav;
