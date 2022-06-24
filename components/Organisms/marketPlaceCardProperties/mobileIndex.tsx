import React from 'react';
import { useMobileMarketPlaceCardStylesEN } from './stylesEN';
import Link from 'next/link';
import QText from '../../Atoms/text';
import { api } from 'services/userAPI';
import { Branding } from 'utilities/branding';
import { useBusinessHoursTiming } from 'utilities/hook/useBusinessHoursTiming';
import QRating from 'components/Atoms/Qrating';
import business from 'assets/icons/businesses_active.svg';
import home from 'assets/icons/home.svg';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import openIcon from '../../../assets/icons/timing-icon-list.svg';
import closedIcon from '../../../assets/icons/timing-icon-list-closed.svg';
import { fullPageWidth } from 'utilities/utils';
import placesIcon from '../../../assets/icons/place-icon.svg';
import propertiesIcon from '../../../assets/icons/property-icon.svg';
import Verified from '../../../assets/icons/verified-seal.svg';
import _ from 'lodash';
import MarketPlaceCardContent from 'components/Molecules/marketPlaceCardContent';
import { MarketPlaceProperties } from 'types/marketPlaceApiTypes';
interface MobileMarketPlaceCardProps {
  ratingReview: number;
  location: string;
  name: string;
  path: string;
  rate: number;
  image: string;
  category: string;
  cardType: 'place' | 'property';
  id: string;
  verified: boolean;
  totalRating: number;
  result: MarketPlaceProperties;
  description?: any;
}

/**
 * MarketPlaceCard
 *
 * a section that shows a maxiumum of 9 properties at a time with pagination.
 *
 *
 * @param propertyArray - an array of properties
 * @returns
 */
const MobileMarketPlaceCardProperty = ({
  name,
  location,
  ratingReview,
  path,
  rate,
  image,
  category,
  cardType,
  verified,
  id,
  totalRating,
  result
}: MobileMarketPlaceCardProps) => {
  const style = useMobileMarketPlaceCardStylesEN();

  const width = fullPageWidth();

  const renderContentHeader = () => {
    return (
      <div className={style.contentHeader} style={{ marginLeft: 6 }}>
        <QText
          label={totalRating?.toFixed(1) ?? '0.0'}
          labelStyle={{
            marginRight: 5,
            marginBottom: 3,
            color: Branding.Colors.black[86]
          }}
        />
        <QRating
          ratingLabel={ratingReview ? `${ratingReview} reviews` : ''}
          rate={rate}
        />
      </div>
    );
  };

  const renderContentTitle = () => {
    return (
      //   <div className={style.contentTitle}>
      //     <QIcon
      //       iconProps={{ width: 40, height: 40, src: business }}
      //       iconStyle={style.titleIcon}
      //       click={() => {}}
      //     />

      //   </div>
      <div style={{ marginLeft: verified ? 6 : 10 }}>
        <QText
          containerMargin={verified ? 0 : `0 5px`}
          iconLeft={verified ? Verified : null}
          label={name}
          textProps={{ classes: { root: style.title } }}
        />
        <div className={style.timing}>
          <MarketPlaceCardContent
            type={result.type}
            baths={result.propertyInfo.bath}
            beds={result.propertyInfo.bed}
            parking={result.propertyInfo.parking}
            category={result.category}
            card
          />
        </div>
      </div>
    );
  };

  const renderContentFooter = () => {
    const currency = result.propertyData.commercialDetails.currency.isoCode;
    const price = result.propertyData.commercialDetails.options.rentAmount;
    const per = result.propertyData.commercialDetails.options.rentFrequency;
    const propertyPer = {
      monthly: 'Mo'
    };
    const width = fullPageWidth();
    return (
      <div className={style.contentFooter}>
        {/* <QIcon
            iconProps={{ width: 14, height: 14, src: }}
            iconStyle={style.homeIcon}
            click={() => {}}
          /> */}
        <QText
          label={_.truncate(location, {
            length: width ? (width < 500 ? 16 : 40) : 40
          })}
          labelStyle={{
            font: 'normal normal medium 8px/14px Outfit',
            fontSize: '12px',
            letterSpacing: 0
          }}
          iconLeftStyle={{
            margin: 0
          }}
          iconLeft={locationIcon}
          labelColor={Branding.Colors.primary.normal}
        />
        <QText
          label={`${currency} ${price} / ${propertyPer[per ?? 'monthly']}`}
          labelStyle={{
            font: 'normal normal medium 8px/14px Outfit',
            fontSize: '12px',
            letterSpacing: 0,
            paddingLeft: 5
          }}
          labelColor={Branding.Colors.black['60']}
        />
      </div>
    );
  };

  return (
    <Link href={`/${path}/${id}/${name.replace(/\s/g, '-')}}`} passHref>
      <div className={style.cardWrapper} style={{ width: width ?? '100%' }}>
        {image ? (
          <img
            src={`${api}/profile/uploads/${image}`}
            alt="logo"
            style={{
              width: 100,
              height: 85,
              borderRadius: 8,
              marginTop: -4,
              border: `1px solid ${Branding.Colors.black[6]}`
            }}
          />
        ) : (
          <img
            src={`${api}/profile/uploads/630cf4cb705e8c7d0e1d10c2498d8102322`}
            alt="logo"
            style={{
              width: 100,
              height: 85,
              borderRadius: 8,
              marginTop: -4,
              border: `1px solid ${Branding.Colors.black[6]}`
            }}
          />
        )}
        <div className={style.cardContent}>
          {renderContentHeader()}
          {renderContentTitle()}
          {renderContentFooter()}
        </div>
      </div>
    </Link>
  );
};
export default MobileMarketPlaceCardProperty;
