import { Button, TextField } from '@mui/material';
import QText from 'components/Atoms/text';
import ModalHeader from 'components/Molecules/modalHeader';
import OutLinedInput from 'components/Molecules/outLinedInput';
import React from 'react';
import { Branding } from 'utilities/branding';
import { onMobile } from 'utilities/utils';
import { Styles } from './style';

interface ForgotPasswordProps {
  closeAll?: any;
  setEmail: any;
  emailInvalid: any;
  sendForgotPasswordCode: any;
  email: any;
  containerStyle: any;
  parserData?: any;
}

const ForgotPassword = ({
  closeAll,
  setEmail,
  emailInvalid,
  sendForgotPasswordCode,
  email,
  containerStyle,
  parserData,
}: ForgotPasswordProps) => {
  const styles = Styles();
  const isServer = () => typeof window === `undefined`;

  console.log("- - - parserData: ",parserData)

  return isServer() ? null : (
    <div className={containerStyle}>
      <p className={styles.message}>
        {`We'll send the otp to the email address below if it exists our records.`}
      </p>

      <OutLinedInput
        inputType="text"
        textAlign="center"
        placeholder="EMAIL"
        width={
          parserData?.device?.type === 'mobile'
            ? '100%'
            : 300
        }
        padding={15}
        labelColor
        onChangeText={e => {
          setEmail(e);
        }}
        parserData={parserData}
      />

      {emailInvalid && (
        <QText
          label={'Email doesnot exist in our record'}
          labelStyle={{ fontSize: 16 }}
          labelColor={Branding.Colors.danger.normal}
        />
      )}
      {onMobile() ? (
        <div className={styles.mobileRow}>
          <Button
            onClick={closeAll}
            variant="text"
            style={{
              border: `1px solid ${Branding.Colors.black[60]}`,
              backgroundColor: 'transparent',
              // width: window.outerHeight / 4.5,
              width: '45%',
              height: 48,
              borderRadius: 12,
              color: Branding.Colors.black[60],
            }}
          >
            <p className={styles.label}>Cancel</p>
          </Button>
          <Button
            onClick={sendForgotPasswordCode}
            variant="text"
            style={{
              backgroundColor: `${
                email.length > 0 &&
                email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                  ? Branding.Colors.primary.normal
                  : Branding.Colors.black[16]
              }`,
              color: Branding.Colors.white,
              // width: window.outerHeight / 4.5,
              width: '45%',
              height: 48,
              borderRadius: 12,
            }}
          >
            <p className={styles.label}>Reset Password</p>
          </Button>
        </div>
      ) : (
        <div className={styles.row}>
          <Button
            onClick={closeAll}
            variant="text"
            style={{
              border: `1px solid ${Branding.Colors.black[60]}`,
              backgroundColor: 'transparent',
              width: 200,
              height: 48,
              borderRadius: 12,
              color: Branding.Colors.black[60],
              margin: '0px 16px'
            }}
          >
            <p className={styles.label}>Cancel</p>
          </Button>
          <Button
            onClick={sendForgotPasswordCode}
            variant="text"
            style={{
              backgroundColor: `${
                email.length > 0 &&
                email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                  ? Branding.Colors.primary.normal
                  : Branding.Colors.black[16]
              }`,
              color: Branding.Colors.white,
              width: 200,
              height: 48,
              borderRadius: 12,
              margin: '0px 16px',
            }}
          >
            <p className={styles.label}>Reset Password</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
