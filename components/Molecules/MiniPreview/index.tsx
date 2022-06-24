import { Typography } from '@mui/material';
import QRating from 'components/Atoms/Qrating';
import { FC } from 'react';
import { api } from 'services/userAPI';
import { ProfileDetailsStartProps } from '../../Organisms/ProfileDetails/types';
import { useMiniPreviewStyles } from './stylesEN';
import _ from 'lodash';

type MiniPreviewProps = Pick<
  ProfileDetailsStartProps,
  'totalReviews' | 'rating' | 'title' | 'location' | 'type' | 'avatar'
>;

const MiniPreview: FC<MiniPreviewProps> = ({
  location,
  rating,
  title,
  totalReviews,
  type,
  avatar
}) => {
  const styles = useMiniPreviewStyles();
  const numberOfReviews = (data: number) => {
    if (_.isEmpty(data?.toString())) {
      return 'No Reviews';
    } else {
      const review = data === 1 ? `${data} Review` : `${data} Reviews`;
      return review;
    }
  };

  return (
    <section className={styles.container}>
      {avatar && (
        <div
          className={
            type === 'place' ? styles.placeImage : styles.propertyImage
          }
        >
          <img
            src={avatar ? `${api}/profile/uploads/${avatar}` : ''}
            className={`${styles.img}`}
          />
        </div>
      )}
      <div className={styles.details}>
        {/* <UserRatingReviews
          rating={rating}
          size="small"
          totalReviews={totalReviews}
        />  */}
        <div className={styles.ratingContainer}>
          <Typography variant="body1">{rating?.toFixed(1) ?? '0.0'}</Typography>
          <QRating rate={rating} ratingLabel={numberOfReviews(totalReviews)} />
        </div>

        <Typography variant="h4" classes={{ root: styles.title }}>
          {title}
        </Typography>
        <Typography variant="body2" classes={{ root: styles.location }}>
          {location}
        </Typography>
      </div>
    </section>
  );
};

export default MiniPreview;
