import React from 'react';
import { usePlaceCardStylesEN } from './stylesEN';
//sampledata
import Cards from '../../Atoms/card';
import { Skeleton } from '@mui/material';
import QRating from '../../Atoms/Qrating';
import PlaceCardContent from '../../Molecules/PlaceCardContent';
import PlaceCardFooter from '../../Molecules/placeCardFooter';
import { MarketPlace } from 'types/marketPlaceApiTypes';

//import { samplePropertiesTwo } from './sampledata';

interface PlaceCardProps {
  data: MarketPlace;
  reviews: string;
}

/**
 * PlaceCard
 *
 * a section that shows a maxiumum of 9 properties at a time with pagination.
 *
 *
 * @param propertyArray - an array of properties
 * @returns
 */
const PlaceCard = ({ data, reviews }: PlaceCardProps) => {
  const style = usePlaceCardStylesEN();

  return (
    <Cards
      //  width={480}
      // styles={{
      //     display: "flex",
      //     height: 88,
      // }}
      image={data?.images[0]}
      alt=""
      // padding={0}
      //imageWidth={120}
      // imageHeight={120}
      cardStyle={style.container}
      containerPadding={10}
      imgSkeltonWidth={112}
      imgSkeltonHeight={88}
    >
      {reviews ? (
        <QRating
          ratingLabel={`${reviews} reviews`}
          rate={data?.ratingsData.totalRatings}
        />
      ) : (
        <Skeleton width="40%" variant="text" />
      )}
      <PlaceCardContent placeName={data?.name} />
      <PlaceCardFooter buildingType={data?.type} location={data?.location} />
    </Cards>
  );
};
export default PlaceCard;
