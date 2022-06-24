import React from 'react';
import { useMarketPlaceCardStylesEN } from './stylesEN';
import Cards from '../../Atoms/card';
import { Skeleton } from '@mui/material';
import QText from '../../Atoms/text';
import MarketPlaceCardContent from '../../Molecules/marketPlaceCardContent';
import { api } from 'services/userAPI';
import { Branding } from 'utilities/branding';
import { useBusinessHoursTiming } from 'utilities/hook/useBusinessHoursTiming';
import placesIcon from '../../../assets/icons/place-icon.svg';

import Verified from '../../../assets/icons/verified-seal.svg';
import { MarketPlace } from 'types/marketPlaceApiTypes';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import _ from 'lodash';
import { getDistance } from 'utilities/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';

interface MarketPlaceCardProps {
  click: VoidFunction;
  result: MarketPlace;
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
const MarketPlaceCard = ({ click, result }: MarketPlaceCardProps) => {
  const style = useMarketPlaceCardStylesEN();
  const { permission } = useSelector((state: RootState) => ({
    permission: state.app.sort.permission
  }));
  const [timingText] = useBusinessHoursTiming(result?.placeData?.businessHours);
  const distance = getDistance(result.distance);

  return (
    <Cards
      // width={312}
      // styles={{
      //   height: 300,
      // }}
      cardProps={{
        classes: { root: style.card }
      }}
      // imageHeight={500}
      image={
        result?.placeData?.cover?.image
          ? `${api}/profile/uploads/${result?.placeData?.cover?.image}`
          : ''
      }
      cardStyle={style.container}
      alt={result?.name}
      containerPadding={15}
      imgSkeltonWidth={320}
      imgSkeltonHeight={220}
      onClick={click}
    >
      {timingText ? (
        <MarketPlaceCardContent
          type={result?.type}
          rating
          reviews={result?.ratingsData?.numberOfReviews}
          rightText={timingText}
          labelColor={
            timingText === 'Closed'
              ? Branding.Colors.danger.normal
              : Branding.Colors.success.normal
          }
          rate={result?.ratingsData?.totalRatings}
          verified={result?.verified}
          totalRating={result?.ratingsData?.totalRatings}
        />
      ) : (
        <Skeleton variant="text" />
      )}
      {result?.name ? (
        <QText
          label={result.name}
          textProps={{ classes: { root: style.title } }}
          iconLeft={result.verified ? Verified : null}
          iconLeftStyle={{ margin: 0, marginRight: result.verified ? 4 : 0 }}
        />
      ) : (
        <Skeleton variant="text" />
      )}
      {/* {cardType === 'property' ? (
        <MarketPlaceCardContent rightText={location} />
      ) : ( */}
      <div className={style.placesFooterContainer}>
        {result?.location.length ? (
          <QText
            label={`${distance ?? ''} ${_.truncate(result?.location, {
              length: 18
            })}`}
            labelStyle={{ fontSize: 14, fontWeight: 500 }}
            iconLeft={locationIcon}
            iconLeftStyle={{ margin: 0 }}
          />
        ) : (
          <Skeleton width="20%" variant="text" />
        )}
        {result?.category?.length ? (
          <QText
            label={_.truncate(result?.category, { length: 20 })}
            labelColor={Branding.Colors.black[86]}
            labelStyle={{
              fontSize: 14,
              fontWeight: 500,
              marginTop: -4,
              marginLeft: 4
            }}
            iconLeft={placesIcon}
            iconLeftStyle={{
              margin: result.verified ? '0px 0px 0px 0px' : '0px 0px 0px -4px'
            }}
          />
        ) : (
          <Skeleton width="20%" variant="text" />
        )}
      </div>
      {/* // )} */}
    </Cards>
  );
};
export default MarketPlaceCard;
