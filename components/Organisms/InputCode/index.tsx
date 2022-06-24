import { Button } from '@mui/material';
import QText from 'components/Atoms/text';
import React, { useEffect } from 'react';

import Countdown from 'react-countdown';
import { Branding } from 'utilities/branding';
import { Styles } from './style';
import dynamic from 'next/dynamic';
import { inputCodeProps } from 'utilities/hook/InputCodeProps';
import { onMobile } from 'utilities/utils';
const ReactCodeInput = dynamic(import('react-code-input'));

interface InputCodeProps {
  countdown: any;
  renderer: any;
  restartCounter: any;
  handleResetPassword: any;
  isValidForgotPassword: any;
  showNewPasswordContent: any;
  resendCodeForPassword: any;
  closeAll: any;
  containerStyle: any;
  userTypedCode: string;
  timeUpForCode: boolean;
  setCurrentTime: any;
  currentTime: any;
}

const InputCode = ({
  countdown,
  renderer,
  restartCounter,
  handleResetPassword,
  isValidForgotPassword,
  showNewPasswordContent,
  resendCodeForPassword,
  closeAll,
  containerStyle,
  userTypedCode,
  timeUpForCode,
  setCurrentTime,
  currentTime
}: InputCodeProps) => {
  const styles = Styles();

  return (
    <div className={containerStyle}>
      <QText
        label={'We have sent you an email with a code'}
        labelStyle={{ fontSize: 16, marginBottom: 6 }}
        labelColor={Branding.Colors.black[86]}
      />
      <div className={styles.mb6}>
        <Countdown
          ref={countdown}
          // 300000
          date={(currentTime ? currentTime : Date.now()) + 300000}
          // now
          renderer={renderer}
          onStart={e => {
            setCurrentTime(Date.now());
          }}
          onMount={time => {
            console.log('MOUNTED');
          }}
          onComplete={time => {
            console.log('COMPLETED');
          }}
          key={restartCounter}
        />
      </div>
      <ReactCodeInput
        value={userTypedCode}
        name="resetPassword"
        inputMode="numeric"
        fields={6}
        type="text"
        onChange={handleResetPassword}
        isValid={isValidForgotPassword}
        {...inputCodeProps}
      />

      <Button
        onClick={resendCodeForPassword}
        variant="text"
        style={{
          backgroundColor: Branding.Colors.white,
          color: Branding.Colors.primary.normal,
          width: '100%',
          height: 32,
          borderRadius: 12,
          marginTop: 30
        }}
        sx={{
          '&:hover': {
            color: Branding.Colors.primary.normal,
            backgroundColor: 'transparent'
          }
        }}
      >
        <p className={styles.label}>Resend Code again</p>
      </Button>
      {onMobile() ? (
        <div className={styles.mobileRow}>
          <Button
            onClick={closeAll}
            variant="text"
            style={{
              color: Branding.Colors.black[60],
              backgroundColor: Branding.Colors.white,
              width: '45%',
              height: 48,
              borderRadius: 12,
              // marginTop: 30,
              border: `1px solid ${Branding.Colors.black[60]}`,
              // marginRight: 24
            }}
            sx={{
              '&:hover': {
                color: Branding.Colors.primary.normal,
                backgroundColor: 'transparent'
              }
            }}
          >
            <p className={styles.label}>CANCEL</p>
          </Button>
          <Button
            onClick={showNewPasswordContent}
            variant="contained"
            disabled={!isValidForgotPassword && timeUpForCode}
            style={{
              width: window.outerHeight / 5,
              height: 48,
              borderRadius: 12,
              // marginTop: 30
            }}
            sx={{
              color: Branding.Colors.white,
              backgroundColor: Branding.Colors.primary.normal,
              '&.Mui-disabled': {
                color: Branding.Colors.white,
                backgroundColor: Branding.Colors.black[16]
              },
              '&:hover': {
                color: Branding.Colors.white,
                backgroundColor: Branding.Colors.primary.normal
              }
            }}
          >
            <p className={styles.label}>NEXT</p>
          </Button>
        </div>
      ) : (
        <>
          <Button
            onClick={showNewPasswordContent}
            variant="contained"
            disabled={!isValidForgotPassword && timeUpForCode}
            style={{
              width: 208,
              height: 48,
              borderRadius: 12,
              marginTop: 30
            }}
            sx={{
              color: Branding.Colors.white,
              backgroundColor: Branding.Colors.primary.normal,
              '&.Mui-disabled': {
                color: Branding.Colors.white,
                backgroundColor: Branding.Colors.black[16]
              },
              '&:hover': {
                color: Branding.Colors.white,
                backgroundColor: Branding.Colors.primary.normal
              }
            }}
          >
            <p className={styles.label}>NEXT</p>
          </Button>
          <Button
            onClick={closeAll}
            variant="text"
            style={{
              color: Branding.Colors.primary.normal,
              backgroundColor: Branding.Colors.white,
              width: 208,
              height: 32,
              borderRadius: 12,
              marginTop: 30
            }}
            sx={{
              '&:hover': {
                color: Branding.Colors.primary.normal,
                backgroundColor: 'transparent'
              }
            }}
          >
            <p className={styles.label}>CANCEL</p>
          </Button>
        </>
      )}
    </div>
  );
};

export default InputCode;
