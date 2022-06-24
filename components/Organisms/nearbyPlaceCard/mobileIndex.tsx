import { Card, CardContent, CardMedia, Skeleton } from '@mui/material';
import { FC } from 'react';
import { usePlaceCardStyles } from './stylesEN';
import QRating from '../../Atoms/Qrating';
import PlaceCardFooter from '../../Molecules/placeCardFooter';
import { MarketPlace } from 'types/marketPlaceApiTypes';
import { fullPageWidth } from 'utilities/utils';
import { api } from 'services/userAPI';
import MobilePlaceCardContent from 'components/Molecules/PlaceCardContent/mobileIndex';

interface PlaceCardProps {
  data?: MarketPlace;
  reviews?: number | string;
}

const MobileNearbyPlaceCard: FC<PlaceCardProps> = ({ reviews, data }) => {
  const styles = usePlaceCardStyles();
  const width = fullPageWidth();
  return (
    <Card
      style={{
        display: 'flex',
        height: 88,
        width: width ? width - 50 : '100%',
        flexDirection: 'row'
      }}
      // image={data?.images[0]}
      // padding={0}
      // imageWidth={120}
      // imageHeight={120}
      className={styles.container}
    >
      <CardMedia
        classes={{ img: styles.image }}
        component="img"
        height="216"
        image={`${api}/profile/uploads/${data?.images[0]}`}
      />

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
        <MobilePlaceCardContent placeName={data?.name} />
        <PlaceCardFooter buildingType={data?.type} location={data?.location} />
      </CardContent>
    </Card>
  );
};

export default MobileNearbyPlaceCard;
