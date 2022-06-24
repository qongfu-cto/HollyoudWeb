import React from 'react';
import { useMarketPlaceCardStylesEN } from './stylesEN';
import Cards from '../../Atoms/card';
import { Skeleton } from '@mui/material';
import QText from '../../Atoms/text';
import MarketPlaceCardContent from '../../Molecules/marketPlaceCardContent';
import { api } from 'services/userAPI';
import propertiesIcon from '../../../assets/icons/property-icon.svg';
import Verified from '../../../assets/icons/verified-seal.svg';
import { MarketPlaceProperties } from 'types/marketPlaceApiTypes';
import locationIcon from '../../../assets/icons/location-icon-list.svg';

interface MarketPlaceCardProps {
  click: VoidFunction;
  result: MarketPlaceProperties;
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
const MarketPlaceCardProperties = ({ click, result }: MarketPlaceCardProps) => {
  const style = useMarketPlaceCardStylesEN();
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
        result?.propertyData?.cover?.image
          ? `${api}/profile/uploads/${result?.propertyData?.cover?.image}`
          : 'https://via.placeholder.com/320x220'
      }
      cardStyle={style.container}
      alt={result.name}
      containerPadding={15}
      imgSkeltonWidth={320}
      imgSkeltonHeight={220}
      onClick={click}
    >
      <MarketPlaceCardContent
        type={result.type}
        rating
        reviews={result?.ratingsData?.numberOfReviews}
        price={result.propertyData.commercialDetails.options}
        currency={result.propertyData.commercialDetails.currency.isoCode}
        rate={result?.ratingsData?.totalRatings}
        verified={result.verified}
        totalRating={result?.ratingsData?.totalRatings}
      />

      {result.name ? (
        <QText
          label={result.name}
          textProps={{ classes: { root: style.title } }}
          iconLeft={result.verified ? Verified : null}
          iconLeftStyle={{ margin: 0, marginRight: result.verified ? 4 : 0 }}
        />
      ) : (
        <Skeleton variant="text" />
      )}

      <div className={style.placesFooterContainer}>
        {result?.location?.length ? (
          <div
            style={{
              display: 'flex'
              //width: '60%',
              //justifyContent: 'flex-end'
            }}
          >
            <QText
              label={result?.location}
              labelStyle={{
                fontSize: 12,
                fontWeight: 500,
                overflow: 'hidden',
                textOverflow: ' ellipsis',
                whiteSpace: 'nowrap'
              }}
              iconLeft={locationIcon}
              iconLeftStyle={{ margin: 0 }}
            />
          </div>
        ) : (
          <Skeleton width="20%" variant="text" />
        )}

        {result.propertyInfo ? (
          <div>
            <MarketPlaceCardContent
              type={result.type}
              baths={result.propertyInfo.bath}
              beds={result.propertyInfo.bed}
              parking={result.propertyInfo.parking}
              category={result.category}
              card
            />
          </div>
        ) : (
          <Skeleton width="40%" variant="text" />
        )}
      </div>
      {/* // )} */}
    </Cards>
  );
};
export default MarketPlaceCardProperties;
