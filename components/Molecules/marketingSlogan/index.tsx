import React from 'react';
import cityScape from '../../../assets/images/peopleincity.png';
import { sloganStylesEN } from './stylesEN';
import QText from 'components/Atoms/text';
import Img from 'components/Atoms/img';

const MarketingSlogan = () => {
  const stylesEN = sloganStylesEN();
  return (
    <div className={stylesEN.container}>
      <p>
        <span className={stylesEN.spanStyleOne}>
          <span>Welcome to</span>
          <span className={stylesEN.spanStyleTwo}> QloudCity</span>
          {/* <span className={stylesEN.spanStyleTwo}> Digital...</span> */}
        </span>
      </p>

      <Img
        source={cityScape}
        imgProps={{ width: 608, height: 405, src: cityScape }}
        container={{ margin: '10px 0' }}
      />
      <div style={{ marginTop: 30, maxWidth: '50%' }}>
        <QText
          label={`Stay Connected...`}
          textProps={{ classes: { root: stylesEN.spanStyle }, variant: 'h3' }}
        />
      </div>
    </div>
  );
};

export default MarketingSlogan;
