import React from 'react';

import { useMarketPlaceIconsStylesEN } from './stylesEN';
//sampledata
import house from '../../../assets/icons/house.svg';
import property from 'assets/icons/property-icon.svg';
import apartment from 'assets/icons/apartment.svg';
import bed from 'assets/icons/bedroom-icon.svg';
import bath from 'assets/icons/bathroom-icon.svg';
import toilet from 'assets/icons/toilet-icon.svg';
import parking from 'assets/icons/parking.svg';
import QText from '../../Atoms/text';

//import { samplePropertiesTwo } from './sampledata';

type MarketPlaceIconsProps = {
  numberOfParking?: number;
  numberOfBaths?: number;
  numberOfBeds?: number;
  numberOfToilet?: number;
  typeOfProperty?: string;
  fontsize?: number;
  margin?: number | string;
  card?: boolean;
};

/**
 * MarketPlaceIcons
 *
 * a section that shows a maxiumum of 9 properties at a time with pagination.
 *
 *
 * @param propertyArray - an array of properties
 * @returns
 */
const MarketPlaceIcons = ({
  numberOfBaths,
  numberOfBeds,
  numberOfParking,
  numberOfToilet,
  typeOfProperty,
  fontsize,
  margin,
  card
}: MarketPlaceIconsProps) => {
  const style = useMarketPlaceIconsStylesEN({
    fontsize: fontsize,
    margin: margin
  });

  const icon =
    typeOfProperty == 'House'
      ? house
      : typeOfProperty === 'Apartment'
      ? apartment
      : property;

  return (
    <div className={style.container}>
      <QText
        label={typeOfProperty}
        iconLeft={icon}
        iconLeftStyle={{ margin: 0, width: 30, height: 30, marginBottom: 5 }}
        labelStyle={{
          fontSize: fontsize ?? 13,

          textAlign: 'center'
        }}
      />
      {!card ? (
        <div className={style.sideContainer}>
          <QText
            label={numberOfBeds}
            iconRight={bed}
            iconRightStyle={{
              width: 20,
              height: 20
            }}
            textProps={{ classes: { root: style.label } }}
            //labelColor="black"
            containerMargin={'0px 3px'}
          />
          {numberOfToilet && (
            <QText
              label={numberOfToilet}
              iconRightStyle={{
                width: 25,
                height: 25,
                marginBottom: 5
              }}
              iconRight={toilet}
              textProps={{ classes: { root: style.label } }}
              containerMargin={'0px 3px'}
            />
          )}
          <QText
            label={numberOfBaths}
            iconRightStyle={{
              width: 20,
              height: 20
            }}
            iconRight={bath}
            textProps={{ classes: { root: style.label } }}
            containerMargin={'0px 3px'}
          />
          <QText
            label={numberOfParking}
            iconRightStyle={{
              width: 20,
              height: 20
            }}
            iconRight={parking}
            textProps={{ classes: { root: style.label } }}
            containerMargin={'0px 3px'}
          />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
export default MarketPlaceIcons;
