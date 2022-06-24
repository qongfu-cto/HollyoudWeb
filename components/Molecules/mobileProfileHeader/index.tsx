import QIcon from 'components/Atoms/icon';
import QText from 'components/Atoms/text';
import React from 'react';
import Back from 'assets/icons/profile-back-button.svg';
import share from 'assets/icons/share-button.svg';
import { useMobileProfileHeaderStyles } from './styleEN';

function MobileProfileHeader({
  goBackHandler
}: {
  goBackHandler: VoidFunction;
}) {
  const styles = useMobileProfileHeaderStyles();
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <QIcon source={Back} click={goBackHandler} />
        <QText
          label="Qloud City"
          labelStyle={{
            fontWeight: 500
          }}
        />
      </div>

      <QIcon source={share} />
    </div>
  );
}

export default MobileProfileHeader;
