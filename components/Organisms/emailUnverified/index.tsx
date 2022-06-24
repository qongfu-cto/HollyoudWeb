import { Button } from '@mui/material';
import LottieAnimation from 'components/Atoms/lottie';
import QText from 'components/Atoms/text';
import React from 'react';
import Countdown from 'react-countdown';
import { Branding } from 'utilities/branding';
import { onMobile } from 'utilities/utils';
import { Styles } from './style';
import * as NotVerified from '../../../assets/lotties/loaders/not-verified.json';

const EmailUnverified = ({
  countdown,
  currentTime,
  renderer,
  setCurrentTime,
  restartCounter,
  handleResendVerification,
  closeAllModal
}: any) => {
  const styles = Styles();
  return (
    <div
      className={[
        styles.container,
        onMobile() ? styles.minHeightMobile : styles.minHeight
      ].join(' ')}
    >
      <QText
        label={`We have sent a verification to the email you registered during signup.
    Please verify your email address to
    continue rating.
    `}
        labelStyle={{
          fontSize: 16,
          marginTop: 10,
          fontFamily: 'Roboto',
          textAlign: 'center'
        }}
        labelColor={Branding.Colors.primary.dark}
      />
      <LottieAnimation animationData={NotVerified} height={256} width={256} />

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

      <Button
        onClick={handleResendVerification}
        variant="text"
        style={{
          backgroundColor: Branding.Colors.white,
          color: Branding.Colors.primary.normal,
          width: 156,
          height: 48,
          borderRadius: 12,
          marginTop: 'auto',
          marginBottom: 12
        }}
      >
        <p className={styles.label}>Resend Email</p>
      </Button>
      <Button
        onClick={closeAllModal}
        variant="text"
        style={{
          backgroundColor: Branding.Colors.primary.normal,
          color: Branding.Colors.white,
          width: 156,
          height: 48,
          borderRadius: 12,
          marginTop: 'auto'
        }}
      >
        <p className={styles.label}>Okay</p>
      </Button>
    </div>
  );
};

export default EmailUnverified;
