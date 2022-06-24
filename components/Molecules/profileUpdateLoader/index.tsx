import QText from 'components/Atoms/text';
import React from 'react';
import { Branding } from 'utilities/branding';
import Loading from '../loading';
import { useProfileUpdateStyles } from './stylesEN';

function ProfileUpdateLoader({ label }: { label: string }) {
  const styles = useProfileUpdateStyles();
  return (
    <div className={styles.container}>
      <Loading />
      <QText
        label={`Updating your ${label}...`}
        labelColor={Branding.Colors.black[86]}
      />
    </div>
  );
}

export default ProfileUpdateLoader;
