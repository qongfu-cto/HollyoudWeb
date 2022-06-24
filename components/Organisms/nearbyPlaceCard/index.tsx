import { Card, CardContent, CardMedia, Skeleton } from '@mui/material';
import { FC } from 'react';
import { usePlaceCardStyles } from './stylesEN';
import QRating from '../../Atoms/Qrating';
import PlaceCardContent from '../../Molecules/PlaceCardContent';
import PlaceCardFooter from '../../Molecules/placeCardFooter';
import { MarketPlace } from 'types/marketPlaceApiTypes';
import { api } from 'services/userAPI';

interface PlaceCardProps {
  data?: MarketPlace;
  reviews?: number | string;
}

const NearbyPlaceCard: FC<PlaceCardProps> = ({ reviews, data }) => {
  const styles = usePlaceCardStyles();

  return (
    <Card
      style={{
        display: 'flex',
        height: 88,
        width: 480
      }}
      // image={data?.images[0]}
      // padding={0}
      // imageWidth={120}
      // imageHeight={120}
      className={styles.container}
    >
      {data?.images ? (
        <CardMedia
          classes={{ img: styles.image }}
          component="img"
          height="216"
          image={`${api}/profile/uploads/${data?.images[0]}`}
        />
      ) : (
        // <Img
        //   imgProps={{ src: image, height: imageHeight, width: imageWidth }}
        // />
        <Skeleton variant="rectangular" width={112} height={88} />
      )}

      <CardContent
        classes={{ root: styles.container }}
        className={styles.cardStyle}
        style={{
          padding: 10
        }}
      >
        {reviews ? (
          <QRating
            ratingLabel={`${reviews} reviews`}
            rate={data?.ratingsData.totalRatings}
          />
        ) : (
          <Skeleton width="40%" variant="text" />
        )}
        <PlaceCardContent
          placeName={data?.name}
          viewPlacesHandler={`./${data?._id}`}
        />
        <PlaceCardFooter buildingType={data?.type} location={data?.location} />
      </CardContent>
    </Card>
  );
};

export default NearbyPlaceCard;
