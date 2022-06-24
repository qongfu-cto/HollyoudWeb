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
import { fullPageWidth, getDistance } from 'utilities/utils';
import placesIcon from '../../../assets/icons/place-icon.svg';
import propertiesIcon from '../../../assets/icons/property-icon.svg';
import Verified from '../../../assets/icons/verified-seal.svg';
import _ from 'lodash';
import MarketplaceProfileMobileButtons from 'components/Molecules/marketplaceProfileButtons/mobileIndex';
import LikeAndShare from 'components/Molecules/likeAndShare';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';

import { useDispatch, useSelector } from 'react-redux';
import { updateMyPlaces } from 'redux/Action/myQloud/myQloudActions';
import { RootState } from 'redux/Reducer/root';
interface MobileMarketPlaceCardProps {
  ratingReview: number;
  location: string;
  businessHours: {
    day: number;
    open24Hrs: boolean;
    closed: boolean;
    timings: {
      startTime: string;
      endTime: string;
    }[];
  }[];
  name: string;
  path: string;
  rate: number;
  image: string;
  category: string;
  cardType: 'place' | 'property';
  id: string;
  verified: boolean;
  description: string;
  totalRating: number;
  results: any;
  telephone: string;
  showCall: boolean;
  lat: number;
  lng: number;
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
const MobileMarketPlaceCard = ({
  name,
  location,
  ratingReview,
  businessHours,
  path,
  rate,
  image,
  category,
  cardType,
  verified,
  id,
  results,
  totalRating,
  description,
  telephone,
  showCall,
  lat,
  lng
}: MobileMarketPlaceCardProps) => {
  const style = useMobileMarketPlaceCardStylesEN();
  const [timingText, workingTime] = useBusinessHoursTiming(businessHours);
  const width = fullPageWidth();
  const { isLogged } = useUserIsLogged();
  const dispatch = useDispatch();
  const { permission } = useSelector((state: RootState) => ({
    permission: state.app.sort.permission
  }));
  const onFavoriteClicked = () => {
    dispatch(updateMyPlaces(id));
  };

  const renderContentHeader = () => {
    return (
      <div className={style.contentHeader}>
        <div>
          {/* <QText
            label={totalRating?.toFixed(1) ?? '0.0'}
            labelStyle={{
              marginRight: 5,
              marginBottom: 3,
              color: Branding.Colors.black[86]
            }}
          /> */}
          <QRating
            ratingLabel={ratingReview ? `${ratingReview} reviews` : ''}
            rate={rate}
          />
        </div>

        <div className={style.timing}>
          <QText
            iconLeft={timingText === 'Closed' ? closedIcon : openIcon}
            label={timingText}
            iconLeftStyle={{
              paddingTop: 3,
              margin: 0
            }}
            labelStyle={{
              color:
                timingText === 'Closed'
                  ? Branding.Colors.danger.normal
                  : Branding.Colors.success.normal,
              fontSize: 13
            }}
          />

          {/* <QText
            label={
              timingText === 'Closed'
                ? ''
                : workingTime.start === '0'
                ? '24 Hours'
                : `${workingTime.start} - ${workingTime.end}`
            }
            labelStyle={{ fontSize: 12, marginLeft: 10 }}
            labelColor={Branding.Colors.black[86]}
          /> */}
        </div>
      </div>
    );
  };

  const renderContentTitle = () => {
    return (
      <div style={{ marginLeft: verified ? 6 : 5 }}>
        <QText
          containerMargin={verified ? 0 : `0 5px`}
          iconLeft={verified ? Verified : null}
          label={name}
          textProps={{ classes: { root: style.title } }}
        />
      </div>
    );
  };

  const renderContentFooter = () => {
    const distance = getDistance(
      permission === 'granted' ? results.distance : null
    );
    return (
      <div className={style.contentFooter}>
        {distance && (
          <>
            <QText
              label={distance}
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
            <p className={style.divider}> | </p>
          </>
        )}
        <QText
          label={_.truncate(location, { length: 20 })}
          labelStyle={{
            font: 'normal normal medium 8px/14px Outfit',
            fontSize: '12px',
            letterSpacing: 0
          }}
          iconLeftStyle={{
            margin: 0
          }}
          iconLeft={distance ? null : locationIcon}
          labelColor={Branding.Colors.primary.normal}
        />
        <p className={style.divider}> | </p>
        <QText
          iconLeft={cardType == 'place' ? placesIcon : propertiesIcon}
          iconLeftStyle={{
            width: 14,
            height: 14,
            marginBottom: 5
          }}
          label={_.truncate(category, { length: 15 })}
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
    <div className={style.cardWrapper}>
      <Link href={`/${path}/${id}/${name.replace(/\s/g, '-')}`} passHref>
        <div style={{ marginBottom: 10 }}>
          {image ? (
            <div style={{ position: 'relative' }}>
              <img
                src={`${api}/profile/uploads/${image}`}
                alt="logo"
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 8,

                  border: `1px solid ${Branding.Colors.black[6]}`
                }}
              />
              {/* {isLogged && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    zIndex: 2
                  }}
                >
                  <LikeAndShare onFavoriteClicked={onFavoriteClicked} />
                </div>
              )} */}
            </div>
          ) : (
            <img
              src={`${api}/profile/uploads/630cf4cb705e8c7d0e1d10c2498d8102322`}
              alt="logo"
              style={{
                width: '100%',
                height: 200,
                borderRadius: 8,

                border: `1px solid ${Branding.Colors.black[6]}`
              }}
            />
          )}

          <div className={style.cardContent}>
            {renderContentHeader()}
            {renderContentTitle()}
            {renderContentFooter()}
            <QText
              label={_.truncate(description, { length: 75 })}
              labelStyle={{
                font: 'normal normal medium 8px/14px Outfit',
                fontSize: '12px',
                letterSpacing: 0,
                paddingLeft: 10
              }}
              labelColor={Branding.Colors.black['60']}
            />
          </div>
        </div>
      </Link>
      <MarketplaceProfileMobileButtons
        telephone={telephone}
        showCall={showCall}
        lat={lat}
        lng={lng}
      />
    </div>
  );
};
export default MobileMarketPlaceCard;
