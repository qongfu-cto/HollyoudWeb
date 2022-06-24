import { Typography } from '@mui/material';
import QRating from 'components/Atoms/Qrating';
import { RatingProps } from '../../../utilities/interface';
import { FC } from 'react';
import {
  UserRatingReviewsStylesProps,
  useUserRatingReviewsStyles
} from './stylesEN';
import _ from 'lodash';

export interface UserRatingReviewsProps
  extends Omit<RatingProps, 'color'>,
    UserRatingReviewsStylesProps {
  totalReviews: number;
  starColor?: string;
  totalRating?: number;
  width: number | string;
  starsSize?: 'large' | 'medium' | 'small' | undefined;
}

const UserRatingReviews: FC<UserRatingReviewsProps> = ({
  rating,
  size,
  totalReviews,
  totalRating,
  ratingColor,
  totalReviewColor,
  width,
  starsSize
}) => {
  const styles = useUserRatingReviewsStyles({
    size,
    ratingColor,
    totalReviewColor
  });

  const numberOfReviews = (data: number) => {
    if (_.isEmpty(data?.toString())) {
      return 'No Reviews';
    } else {
      const review = data === 1 ? `${data} Review` : `${data} Reviews`;
      return review;
    }
  };

  return (
    <section
      className={styles.details}
      style={{ width: width ?? 'auto', height: 18 }}
    >
      <div className={styles.ratingsContainer} style={{ width: '100%' }}>
        <div style={{ marginRight: 5 }}>
          <Typography variant="h6" classes={{ root: styles.rating }}>
            {totalRating?.toFixed(1) ?? '0.0'}
          </Typography>
        </div>
        <div>
          <QRating rate={rating} size={starsSize} />
        </div>
        <div>
          <Typography variant="h6" classes={{ root: styles.totalReviews }}>
            {numberOfReviews(totalReviews)}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default UserRatingReviews;
