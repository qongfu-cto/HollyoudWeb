import QButton from 'components/Atoms/button';
import React from 'react';
import { Branding } from 'utilities/branding';
import { useProfilePageGeneralInfoStylesEN } from './styleEN';
import QText from 'components/Atoms/text';
import { isUndefined } from 'lodash';
import { Avatar } from '@mui/material';

interface ProfileInputProps {
  label: string;
  title: string;
  emailVerify?: boolean;
  onClick: VoidFunction;
}

const ProfileInput = ({
  label,
  title,
  emailVerify,
  onClick
}: ProfileInputProps) => {
  const styles = useProfilePageGeneralInfoStylesEN();
  console.log('emailVerify ', emailVerify);
  return (
    <div style={{ margin: `20px 0` }}>
      <QText
        label={title}
        labelColor={Branding.Colors.black[60]}
        labelStyle={{ fontSize: 12 }}
      />
      <div className={styles.container}>
        <section className={styles.layout}>
          <QText label={label} labelColor={Branding.Colors.black[86]} />
        </section>
        <Button onClick={onClick} emailVerify={emailVerify} />
      </div>
    </div>
  );
};

const Button = ({
  onClick,
  emailVerify
}: {
  onClick: VoidFunction;
  emailVerify?: boolean;
}) => (
  <QButton
    onClick={onClick}
    label={
      isUndefined(emailVerify)
        ? 'MODIFY'
        : emailVerify
        ? 'MODIFY'
        : 'Verify Email'
    }
    outline
    labelStyles={{ color: Branding.Colors.primary.normal }}
    style={{
      height: 32,
      width: 130,
      margin: `0 10px`
    }}
  />
);

interface MobileInputProps {
  number: number | string;
  code: number | string;
  flag: any;
  title: string;
  onClick: VoidFunction;
}

export const MobileInput = ({
  number,
  code,
  flag,
  title,
  onClick
}: MobileInputProps) => {
  const styles = useProfilePageGeneralInfoStylesEN();
  return (
    <div style={{ margin: `20px 0` }}>
      <QText
        label={title}
        labelColor={Branding.Colors.black[60]}
        labelStyle={{ fontSize: 12 }}
      />
      <div className={styles.container}>
        <section className={styles.mobileCodeLayout}>
          <Avatar
            alt={`${flag} flag`}
            src={flag}
            sx={{
              width: 24,
              height: 24,
              // marginLeft: 1
            }}
          />
          <QText label={code} labelColor={Branding.Colors.black[86]} />
        </section>
        <section className={styles.mobileLayout}>
          <QText label={number} labelColor={Branding.Colors.black[86]} />
        </section>
        <Button onClick={onClick} />
      </div>
    </div>
  );
};
export default ProfileInput;
