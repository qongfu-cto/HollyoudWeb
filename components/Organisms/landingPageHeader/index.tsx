import React, { useEffect, useState } from 'react';
import { Branding } from '../../../utilities/branding';
import QText from '../../Atoms/text';
import SignupLoginButton from '../../Molecules/signupLoginButton';

import { useLandingPageHeaderStylesEN } from './styleEN';
import { onMobile } from 'utilities/utils';
import BahrainFlag from 'assets/icons/bh-flag.svg';
import QIcons from 'components/Atoms/icon';
import { boolean } from 'yup';

interface LandingPageHeaderProps {
  forLandingPage?: Boolean;
}


const LandingPageHeader = ( forLandingPage: LandingPageHeaderProps) => {
  const styles = useLandingPageHeaderStylesEN();
  const [landing, setLanding] = useState(false);
  console.log(`forLandingPage: `,landing);

  useEffect(() => {
    if (!landing) {
      if (forLandingPage) {
        setLanding(true)
      } else {
        setLanding(false)
      }
    };
  }, [forLandingPage, landing]);

  if (onMobile()) {
    return (
      <div className={styles.container}>
        <div className={styles.flagWrapper}>
          {/* <QIcons iconStyle={styles.flagStyle} source={BahrainFlag} /> */}
          <QText
            label={'HOLLYOUD'}
            labelStyle={{
              fontFamily: 'Outfit',
              fontSize: 32,
              whiteSpace: 'break-spaces',
              textAlign: 'center',
              padding: '12px 16px'
            }}
            labelColor={Branding.Colors.white}
          />
        </div>
        {/* <SignupLoginButton /> */}
      </div>
    );
  }
  return (
    <div className={styles.container} style={{ backgroundColor: 'rgba(0,0,0,0.24)', width: '100vW' }}>
      <div className={styles.flagWrapper}>
        {/* <QIcons iconStyle={styles.flagStyle} source={BahrainFlag} /> */}
          <QText
            label={'HOLLYOUD'}
            labelStyle={{
              fontFamily: 'Outfit',
              fontSize: 32,
              whiteSpace: 'break-spaces',
              textAlign: 'center',
              padding: '12px 16px'
            }}
            labelColor={Branding.Colors.white}
          />
        </div>
      {/* <SignupLoginButton /> */}
    </div>
  );
};

export default LandingPageHeader;
