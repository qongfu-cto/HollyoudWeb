import { Button } from '@mui/material';
import Img from 'components/Atoms/img';
import NewToast from 'components/Atoms/newToast';
import React, { useState } from 'react';
import { Branding } from 'utilities/branding';
import { useAuthenticatedLayoutStylesEN } from './style';

interface CustomToastProps {
  message?: string;
  btnMessage?: string;
  icon?: any;
  action: () => void;
  onMobile?: boolean;
}

const MyQloudNotificationBar = ({
  message,
  btnMessage,
  icon,
  action,
  onMobile
}: CustomToastProps) => {
  const styles = useAuthenticatedLayoutStylesEN();

  return (
    <div className={styles.snackbar}>
      {!onMobile && <Img source={icon} alt="icon" style={styles.icon} />}

      <p className={[styles.typography, onMobile && styles.pl12].join(' ')}>
        {message}
      </p>
      <div className={styles.resendBtnDiv}>
        <Button
          disableElevation
          style={{
            backgroundColor: Branding.Colors.notification,
            color: Branding.Colors.white,
            // border: `1px solid ${Branding.Colors.white}`,
            border: onMobile
              ? 'transparent'
              : `1px solid ${Branding.Colors.white}`,
            height: 32,
            width: 140,
            fontSize: 12,
            boxShadow: 'none !important',
            textTransform: onMobile ? 'capitalize' : 'uppercase'
          }}
          variant="outlined"
          onClick={action}
        >
          {btnMessage}
        </Button>
      </div>
    </div>
  );
};

export default MyQloudNotificationBar;
