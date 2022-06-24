import { Button } from '@mui/material';
import LottieAnimation from 'components/Atoms/lottie';
import QText from 'components/Atoms/text';
import React from 'react';
import { Branding } from 'utilities/branding';
import { Styles } from './style';
import * as UpdateData from '../../../assets/lotties/Errors/successful-reg.json';
import { onMobile } from 'utilities/utils';

interface SuccessProps {
  message: string;
  closeAll: any;
  showDone?: boolean;
}

const Success = ({ message, closeAll, showDone }: SuccessProps) => {
  const styles = Styles();

  return (
    <div className={onMobile() ? styles.mobileContainer : styles.container}>
      <LottieAnimation animationData={UpdateData} height={200} width={200} />
      <QText
        label={'Success!'}
        labelStyle={{ fontSize: 32 }}
        labelColor={Branding.Colors.green.variant_2}
      />
      <QText
        label={message}
        labelStyle={{ fontSize: 16, textAlign: 'center' }}
        labelColor={Branding.Colors.black[86]}
      />
      {showDone && (
        <Button
          onClick={closeAll}
          variant="text"
          style={{
            backgroundColor: Branding.Colors.primary.normal,
            color: Branding.Colors.white,
            width: 208,
            height: 48,
            borderRadius: 12,
            marginTop: 30
          }}
        >
          <p className={styles.label}>Done</p>
        </Button>
      )}
    </div>
  );
};

export default Success;
