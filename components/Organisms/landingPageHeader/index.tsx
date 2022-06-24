import React from 'react';
import { Branding } from '../../../utilities/branding';
import QText from '../../Atoms/text';
import SignupLoginButton from '../../Molecules/signupLoginButton';

import { useLandingPageHeaderStylesEN } from './styleEN';
import { onMobile } from 'utilities/utils';
import BahrainFlag from 'assets/icons/bh-flag.svg';
import QIcons from 'components/Atoms/icon';

const LandingPageHeader = () => {
  const styles = useLandingPageHeaderStylesEN();
  if (onMobile()) {
    return (
      <div className={styles.container}>
        <div className={styles.flagWrapper}>
          <QIcons iconStyle={styles.flagStyle} source={BahrainFlag} />
          <QText
            label={'BH'}
            labelStyle={{
              font: 'normal normal medium 12px/32px Outfit',
              whiteSpace: 'break-spaces',
              textAlign: 'center'
            }}
            labelColor={Branding.Colors.black['86']}
          />
        </div>
        <SignupLoginButton />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <SignupLoginButton />
    </div>
  );
};

export default LandingPageHeader;
