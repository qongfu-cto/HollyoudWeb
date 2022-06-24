import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Styles } from './style';
import VerifyIcon from '../../../assets/images/verify-icon.svg';
import { Branding } from 'utilities/branding';

const GetVerified = () => {
  const styles = Styles();
  return (
    <div className={styles.mlr}>
      <div className={styles.verified}>
        <Image
          alt=""
          src={VerifyIcon}
          layout="fixed"
          width="48"
          height="48"
          className={styles.image}
        />
        <p className={styles.getVerified}>Get Verified!</p>
        <Button
          sx={{
            marginLeft: 'auto',
            textTransform: 'capitalize',
            color: Branding.Colors.blue.variant_4
          }}
          className={styles.applyHereBtn}
          variant="text"
        >
          Apply here
        </Button>
      </div>
    </div>
  );
};

export default GetVerified;
