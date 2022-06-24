import { Button } from '@mui/material';
import LottieAnimation from 'components/Atoms/lottie';
import QText from 'components/Atoms/text';
import React from 'react';
import { Branding } from 'utilities/branding';
import { Styles } from './style';
import * as UpdateData from '../../../assets/lotties/Errors/error_500.json';

interface ErrorProps {
  message: string;
  closeAll: any;
  showDone?: boolean;
}

const Error = ({ message, closeAll, showDone }: ErrorProps) => {
  const styles = Styles();

  return (
    <div className={styles.container}>
      <LottieAnimation animationData={UpdateData} height={256} width={256} />
      <QText
        label={'Error!'}
        labelStyle={{ fontSize: 32 }}
        labelColor={Branding.Colors.danger.normal}
      />
      <QText
        label={message}
        labelStyle={{ fontSize: 16 }}
        labelColor={Branding.Colors.black[86]}
      />
      {showDone && (
        <Button
          onClick={closeAll}
          variant="contained"
          style={{
            backgroundColor: Branding.Colors.primary.normal,
            color: Branding.Colors.white,
            width: 208,
            height: 48,
            borderRadius: 12,
            marginTop: 30
          }}
        >
          <p className={styles.label}>Ok</p>
        </Button>
      )}
    </div>
  );
};

export default Error;
