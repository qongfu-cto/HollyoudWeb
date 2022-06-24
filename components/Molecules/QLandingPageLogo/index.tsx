import React from 'react';
import QText from '../../Atoms/text';

import QloudityFullLogo from '../../../assets/images/qloudCityNewLogo.svg';
import { QLandingPageLogoStyles } from './stylesEN';
import Img from '../../Atoms/img';

const QLandingPageLogo = () => {
  const stylesEN = QLandingPageLogoStyles();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* <QText
                label={"Welcome to"}
                labelStyle={{fontSize: 28, fontWeight: "500"}}
                textProps={{classes: {root: stylesEN.mainTitle}}}
            /> */}

      <Img
        source={QloudityFullLogo}
        alt="logo"
        container={{
          position: 'relative',
          width: 380,
          height: 150,
          bottom: 68,
          left: 5
        }}
      />
      {/* <div
        style={{
          position: 'relative',
          width: 380,
          height: 150,
          bottom: 48,
          left: 5
        }}
      >
        <img
          src={'../../../assets/images/qloudCityNewLogo.svg'}
          height="400px"
          width="200px"
          alt="logo"
        />
      </div> */}

      {/* <QText
                label={"All Places Near You"}
                textProps={{variant: "h6", classes: {root: stylesEN.secondTitle}}}
            /> */}
    </div>
  );
};

export default QLandingPageLogo;
