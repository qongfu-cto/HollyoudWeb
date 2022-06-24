import { Button, Divider, Box } from '@mui/material';
import Img from 'components/Atoms/img';
import NewToast from 'components/Atoms/newToast';
import Image from 'next/image';
import React, { useState } from 'react';
import { Branding } from 'utilities/branding';
import { useAuthenticatedLayoutStylesEN } from './style';
import { isEmpty } from 'lodash';

interface MyQloudNavBarProps {
  backBottonText?: string;
  title?: string;
  icon: any;
  firstBotton?: string;
  secondBotton?: string;
  firstBottonStyle?: any;
  secondBottonStyle?: any;
  firstAction?: () => void;
  secondAction?: () => void;
  backAction?: () => void;
  disabled?: boolean;
  secondButtonType?: 'text';
  hideButtons?: boolean;
}

const MyQloudNavBar = ({
  backBottonText,
  title,
  icon,
  firstBotton,
  secondBotton,
  firstBottonStyle,
  secondBottonStyle,
  firstAction,
  secondAction,
  backAction,
  disabled,
  secondButtonType,
  hideButtons
}: MyQloudNavBarProps) => {
  const styles = useAuthenticatedLayoutStylesEN();

  console.log('firstBotton', isEmpty(firstBotton));
  return (
    <Box className={styles.snackbar}>
      <div className={styles.leftSideContainer}>
        <div className={styles.buttonLeft}>
          <Button
            disableElevation
            style={{
              backgroundColor: Branding.Colors.white,
              color: Branding.Colors.primary.normal,
              border: `1px solid ${Branding.Colors.primary.normal}`,
              borderRadius: 4,
              padding: 7,
              height: 32,
              width: 160,
              fontSize: 14,
              boxShadow: 'none !important',
              textAlign: 'left',
              fontFamily: 'Outfit',
              fontWeight: '600',
              textTransform: 'none'
            }}
            variant="outlined"
            onClick={backAction}
            startIcon={icon}
          >
            {backBottonText}
          </Button>
        </div>

        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ marginLeft: '16px' }}
        />
        <p className={styles.typography}>{title}</p>
        {/* <p className={styles.typography}></p>
        <p className={styles.typography}></p>
        <p className={styles.typography}></p> */}
      </div>

      <Box
        className={
          isEmpty(firstBotton) ? styles.btnContainer : styles.updateContainer
        }
      >
        {!hideButtons ? (
          <>
            {!isEmpty(firstBotton) && (
              <Button
                disableElevation
                className={firstBottonStyle}
                style={{ textTransform: 'none' }}
                variant="text"
                onClick={firstAction}
              >
                {firstBotton}
              </Button>
            )}

            <Button
              disableElevation
              className={secondBottonStyle}
              style={{ textTransform: 'none' }}
              variant={secondButtonType ?? 'contained'}
              onClick={secondAction}
              disabled={disabled}
            >
              {secondBotton}
            </Button>
          </>
        ) : (
          <div />
        )}
      </Box>
    </Box>
  );
};

export default MyQloudNavBar;
