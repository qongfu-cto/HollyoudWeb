import { Button, TextField } from '@mui/material';
import QText from 'components/Atoms/text';
import OutLinedInput from 'components/Molecules/outLinedInput';
import React from 'react';
import { Branding } from 'utilities/branding';
import { onMobile } from 'utilities/utils';
import { Styles } from './style';

interface ResetPasswordProps {
  setNewUserPassword: any;
  setNewUserConfirmPassword: any;
  closeAll: any;
  confirmUserPassword: any;
  containerStyle: any;
  passwordsDontMatch: any;
  newUserPassword?: string;
  newUserConfirmPassword?: string;
  parserData?: any;
}

const ResetPassword = ({
  setNewUserPassword,
  setNewUserConfirmPassword,
  closeAll,
  confirmUserPassword,
  containerStyle,
  passwordsDontMatch,
  newUserPassword,
  newUserConfirmPassword,
  parserData
}: ResetPasswordProps) => {
  const styles = Styles();

  return (
    <div className={containerStyle}>
      <QText
        label={'Register Your new password.'}
        labelStyle={{ fontSize: 16, marginBottom: 16 }}
        labelColor={Branding.Colors.black[86]}
      />

      <div className={styles.margin}>
        <TextField
          value={newUserPassword}
          onChange={(e: any) => {
            setNewUserPassword(e.target.value);
          }}
          label="NEW PASSWORD"
          className={onMobile() ? styles.mobileInput : styles.input}
          type="password"
        />
      </div>

      <div className={styles.margin}>
        <TextField
          value={newUserConfirmPassword}
          onChange={(e: any) => {
            setNewUserConfirmPassword(e.target.value);
          }}
          label="CONFIRM NEW PASSWORD"
          className={onMobile() ? styles.mobileInput : styles.input}
          type="password"
        />
      </div>

      {passwordsDontMatch && (
        <QText
          label={"Passwords don't match"}
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
              color: Branding.Colors.black[60],
              backgroundColor: Branding.Colors.white,
              width: '45%',
              height: 48,
              borderRadius: 12,
              marginTop: 16,
              border: `1px solid ${Branding.Colors.black[60]}`,
              marginRight: 24
            }}
          >
            <p className={styles.label}>Cancel</p>
          </Button>

          <Button
            onClick={confirmUserPassword}
            variant="contained"
            style={{
              backgroundColor: Branding.Colors.primary.normal,
              color: Branding.Colors.white,
              width: '45%',
              height: 48,
              borderRadius: 12,
              marginTop: 16
            }}
          >
            <p className={styles.label}>Update</p>
          </Button>
        </div>
      ) : (
        <>
          <Button
            onClick={confirmUserPassword}
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
            <p className={styles.label}>Confirm Password</p>
          </Button>

          <Button
            onClick={closeAll}
            variant="text"
            style={{
              color: Branding.Colors.primary.normal,
              backgroundColor: Branding.Colors.white,
              width: 208,
              height: 48,
              borderRadius: 12,
              marginTop: 16
            }}
          >
            <p className={styles.label}>Cancel</p>
          </Button>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
