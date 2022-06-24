import MarketingSlogan from '../../Molecules/marketingSlogan';
import React from 'react';
import { onMobile } from 'utilities/utils';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import { sloganStylesEN } from 'components/Molecules/marketingSlogan/stylesEN';
import cityImage from 'assets/images/Cityscape.png';
import Image from 'next/image';

const mobileMarketingSlogan =
  '“Welcome to Qloudcity. We believe in Life Made Simple. Enjoy your Qloud Experience”.';

function MarketingPage() {
  const styles = sloganStylesEN();

  if (onMobile()) {
    return (
      <div className={styles.mobileSlogan}>
        <div style={{ marginBottom: 24 }}>
          <Image src={cityImage} />
        </div>
        <div style={{ marginBottom: 48 }}>
          <QText
            label={mobileMarketingSlogan}
            labelStyle={{
              font: 'normal normal medium 24px/40px Roboto',
              fontSize: 24,
              whiteSpace: 'break-spaces',
              textAlign: 'center'
            }}
            labelColor={Branding.Colors.white}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* <MarketingSlogan /> */}
      {/* <MarketingJoinQloudCity />
      <MarketingAboutUS /> */}
    </div>
  );
}

export default MarketingPage;
