import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton
} from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { usePlaceCardStyles } from './stylesEN';

const DummyMyPlaceCard: FC = ({}) => {
  const styles = usePlaceCardStyles();

  return (
    <Card classes={{ root: styles.card }}>
      <CardActionArea>
        <Skeleton variant="rectangular" width={520} height={216} />
        <CardContent classes={{ root: styles.content }}>
          <div className={styles.header}>
            <Skeleton variant="text" width="20%" />
            <Skeleton variant="text" width="20%" />
          </div>
          <Skeleton variant="text" width="100%" />
          <div className={styles.footer}>
            <Skeleton variant="text" width="20%" />
            <p className={styles.divider}> | </p>
            <Skeleton variant="text" width="20%" />
          </div>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="rectangular" width="100%" height={30} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DummyMyPlaceCard;
