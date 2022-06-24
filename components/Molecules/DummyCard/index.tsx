import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Skeleton
} from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import Link from 'next/link';
import { FC } from 'react';
import { usePropertyCardStyles } from './stylesEN';

interface PropertyCardProps {
  rating?: number;
  reviews?: number;
  title?: string;
  location?: string;
  image?: string;
}

const DummyCard: FC<PropertyCardProps> = ({
  location,
  rating,
  reviews,
  title,
  image = ''
}) => {
  const styles = usePropertyCardStyles();

  return (
    <Card classes={{ root: styles.card }}>
      <CardActionArea>
        {/* <CardMedia
            classes={{ img: styles.image }}
            component="img"
            height="216"
            image="https://media-cdn.tripadvisor.com/media/vr-splice-j/04/ed/13/76.jpg"
            alt="house"
          /> */}
        {image ? (
          <CardMedia
            classes={{ img: styles.image }}
            component="img"
            height="216"
            image={''}
            alt={''}
          />
        ) : (
          // <Img
          //   imgProps={{ src: image, height: imageHeight, width: imageWidth }}
          // />
          <Skeleton variant="rectangular" width={550} height={240} />
        )}

        <CardContent classes={{ root: styles.content }}>
          <div className={styles.header}>
            {rating ? (
              <div className={styles.stats}>
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  size="small"
                  icon={<StarRoundedIcon fontSize="inherit" />}
                  emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
                  classes={{
                    iconFilled: styles.rating,
                    iconEmpty: styles.rating
                  }}
                />

                <span className={styles.reviews}>
                  {/* {reviews.toLocaleString()} reviews */}
                </span>
              </div>
            ) : (
              <Skeleton variant="text" width="20%" />
            )}
            {rating ? (
              <span className={styles.price}>BHD 300 / Mo</span>
            ) : (
              <Skeleton variant="text" width="20%" />
            )}
          </div>
          {title ? (
            <div className={styles.title}>{title}</div>
          ) : (
            <Skeleton variant="text" width="100%" />
          )}
          <div className={styles.footer}>
            {reviews ? (
              <span>icons</span>
            ) : (
              <Skeleton variant="text" width="20%" />
            )}
            {location ? (
              <span>{location}</span>
            ) : (
              <Skeleton variant="text" width="20%" />
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DummyCard;
