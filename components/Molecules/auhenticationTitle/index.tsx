import React from 'react';
import Img from '../../Atoms/img';
import Text from '../../Atoms/text';
import QloudCityLogo from '../../../assets/images/QloudCitySimpleLogo.svg';
import { useAuthenticationTitleStylesEN } from './styleEN';

interface AuthenticationInputsProps {
  labelLeft: string;
  labelRight: string;
  showImage: boolean | undefined;
}

const AuthenticationTitle = ({
  labelLeft,
  labelRight,
  showImage
}: AuthenticationInputsProps) => {
  const styles = useAuthenticationTitleStylesEN();
  return (
    <div className={styles.container}>
      <Text
        label={labelLeft}
        labelStyle={{ fontSize: 20, fontWeight: 'bold', marginRight: 2 }}
      />
      {showImage && (
        <div className={styles.imageMaintain}>
          <Img
            source={QloudCityLogo}
            alt="Qloud City"
            container={{ margin: `3px 0 4px 0 ` }}
            width="60"
            height="60"
          />
        </div>
      )}
      <Text
        label={`${labelRight}!`}
        labelStyle={{ fontSize: 20, fontWeight: 'bold', marginLeft: 2 }}
      />
    </div>
  );
};

export default AuthenticationTitle;
