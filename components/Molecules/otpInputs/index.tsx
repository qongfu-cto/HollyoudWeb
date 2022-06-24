import React from 'react';
import OtpInput from 'react-otp-input';
import { Branding } from '../../../utilities/branding';
import FormWrapper from '../../Atoms/formWrapper';
import TextButton from '../../Atoms/textButton';
import { useOtpInputsStylesEN } from './styleEN';

interface OtpInputProps {
  otpInputHandler: (vlaue: number) => void;
  otp: string | undefined;
  otpError: boolean;
  otpErrorMassage: string;
}

const OtpInputs = ({
  otpInputHandler,
  otp,
  otpError,
  otpErrorMassage
}: OtpInputProps) => {
  const styles = useOtpInputsStylesEN();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FormWrapper
        formStyle={styles.container}
        error={otpError}
        errorMessage={otpErrorMassage}
      >
        <OtpInput
          numInputs={6}
          isInputNum
          shouldAutoFocus
          inputStyle={{
            width: 30,
            height: 38,
            textAlign: 'center',
            margin: 5,
            borderRadius: 10,
            backgroundColor: Branding.Colors.offWhite,
            borderWidth: 0.1,
            borderColor: Branding.Colors.black[6],
            color: Branding.Colors.black[100]
          }}
          placeholder="000000"
          onChange={otpInputHandler}
          value={otp}
          hasErrored={otpError}
          errorStyle={{
            borderColor: Branding.Colors.danger.normal
          }}
        />
      </FormWrapper>
      <TextButton
        button
        label="Resend Code again"
        buttonProps={{ disabled: true }}
      />
    </div>
  );
};

export default OtpInputs;
