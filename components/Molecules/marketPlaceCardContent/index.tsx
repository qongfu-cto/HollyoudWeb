import React from 'react';
//components
import { useMarketPlaceCardContentStylesEN } from './stylesEN';
//sampledata
import QRating from '../../Atoms/Qrating';
import QText from '../../Atoms/text';
import MarketPlaceIcons from '../marketPlaceIcons';
import { Skeleton } from '@mui/material';

//import { samplePropertiesTwo } from './sampledata';

type MarketPlaceCardContentProps = {
  reviews?: number;
  rightText?: string;
  rating?: boolean;
  rate?: number;
  baths?: number;
  parking?: number;
  beds?: number;
  type?: 'place' | 'property';
  labelColor?: string;
  verified?: boolean;
  totalRating?: number;
  price?: {
    rentAmount: number;
    saleAmount: number;
    purpose: number;
    rentFrequency: 'monthly';
  };
  category?: string;
  currency?: string;
  card?: boolean;
};

/**
 * MarketPlaceCardContent
 *
 * a section that shows a maxiumum of 9 properties at a time with pagination.
 *
 *
 * @param propertyArray - an array of properties
 * @returns
 */
const MarketPlaceCardContent = ({
  reviews,
  rightText,
  rating,
  rate,
  baths,
  parking,
  beds,
  type,
  labelColor,
  verified,
  price,
  category,
  currency,
  card
}: // totalRating
MarketPlaceCardContentProps) => {
  const style = useMarketPlaceCardContentStylesEN();
  const propertyPer = {
    monthly: 'Mo'
  };

  const pricingCode = (code?: number) => {
    switch (code) {
      case 0:
        return `${currency} ${price?.rentAmount} / ${
          propertyPer[price?.rentFrequency ?? 'monthly']
        }`;

      case 1:
        return `${currency} ${price?.saleAmount}
     `;
      case 2:
        return '';

      default:
        '';
    }
  };

  return (
    <div className={style.container}>
      {rating ? (
        reviews ? (
          <div style={{ marginLeft: verified ? 4 : 0 }}>
            <QRating ratingLabel={`${reviews} Reviews`} rate={rate} />
          </div>
        ) : (
          <div style={{ marginLeft: verified ? 4 : 0 }}>
            <QRating ratingLabel={`${0} Reviews`} rate={0} />
          </div>

          // <Skeleton width="40%" variant="text" />
        )
      ) : type === 'property' ? (
        <MarketPlaceIcons
          numberOfBaths={baths}
          numberOfBeds={beds}
          numberOfParking={parking}
          typeOfProperty={category}
          card
        />
      ) : (
        <Skeleton width="50%" />
      )}
      {type === 'place' ? (
        rightText ? (
          <QText
            label={rightText}
            labelColor={labelColor}
            textProps={{ classes: { root: style.price } }}
          />
        ) : (
          <Skeleton variant="text" width="20%" />
        )
      ) : rating ? (
        <QText
          label={pricingCode(price?.purpose)}
          labelColor={labelColor}
          textProps={{ classes: { root: style.price } }}
        />
      ) : (
        <div />
      )}
    </div>
  );
};
export default MarketPlaceCardContent;
