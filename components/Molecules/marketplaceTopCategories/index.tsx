import React from 'react';
import QIcon from '../../Atoms/icon';
import QText from '../../Atoms/text';
import { useMarketPlaceTopCategoriesStylesEN } from './stylesEN';
import User from '../../../assets/icons/user.svg';
import { Branding } from '../../../utilities/branding';
import { svgColorHandler } from 'utilities/svgHandler';

type iconObject = {
  iconId: {
    _id: string;
    name: string;
    svgData: string;
  };
  type: string;
  _id: string;
};

interface MarketPlaceTopCategoriesProps {
  label?: string;
  circle?: boolean;
  onClick: () => void;
  icons: iconObject[];
}

function MarketPlaceTopCategories({
  label,
  circle,
  onClick,
  icons
}: MarketPlaceTopCategoriesProps) {
  const style = useMarketPlaceTopCategoriesStylesEN();
  return (
    <div className={style.container}>
      {/* <div className={style.iconContainer}>
        <img
          src={`${api}/profile/uploads/${icon[0].iconId}`}
          width={48}
          height={48}
        />
      </div> */}
      {icons
        .filter((icon: iconObject) => icon.type === 'default')
        .map((icon: iconObject, i: number) => (
          <QIcon
            key={i}
            iconStyle={style.iconContainer}
            buttonProps={{
              style: { borderRadius: circle ? 50 : 12 },
              disableRipple: true
            }}
            iconProps={{
              width: 48,
              height: 48,
              src: svgColorHandler(icon?.iconId?.svgData) ?? User
            }}
            click={onClick}
          />
        ))}

      <div style={{ zIndex: 1 }}>
        <QText
          label={label}
          labelStyle={{ fontSize: 12, marginTop: 10, whiteSpace: 'nowrap' }}
          labelColor={'#FFFFFF !important'}
        />
      </div>
    </div>
  );
}

export default MarketPlaceTopCategories;
