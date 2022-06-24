import { Divider } from '@mui/material';
import React from 'react';
import Img from '../../Atoms/img';
import GoogleLogo from '../../../assets/icons/google.svg';
import FacebookLogo from '../../../assets/icons/facebook.svg';
import { useSocialMediaAuthenticationStylesEN } from './styleEN';

interface AuthenticationInputsProps {
  dividerLabel: string;
  handleGoogleLogin?: () => void;
}

const SocialMediaAuthentication = ({
  dividerLabel,
  handleGoogleLogin
}: AuthenticationInputsProps) => {
  const styles = useSocialMediaAuthenticationStylesEN();
  return (
    <div style={{ width: '100%', marginTop: 16 }}>
      <Divider classes={{ root: styles.divider }}>
        {' '}
        <p className={styles.dividerStyle}> or {dividerLabel} with</p>
      </Divider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Img
          source={GoogleLogo}
          alt="google login"
          container={{
            margin: `0 16`,
            cursor: 'pointer',
            width: 52,
            height: 52
          }}
          click={handleGoogleLogin}
        />

        {/* <Img
          source={FacebookLogo}
          alt="facebook login"
          container={{ margin: 16, cursor: 'pointer' }}
          click={() => {
            console.log('FACEBOOK');
          }}
        /> */}
      </div>
    </div>
  );
};

export default SocialMediaAuthentication;
