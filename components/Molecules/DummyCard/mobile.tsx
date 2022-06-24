import { Skeleton } from '@mui/material';
import React from 'react';
import { useMobileDummyCardStyle } from './stylesEN';

function MobileDummyCard() {
  const style = useMobileDummyCardStyle();
  return (
    <div className={style.cardWrapper}>
      <Skeleton variant="rectangular" width={'100%'} height={200} />
      <div className={style.cardContent}>
        <div className={style.contentHeader}>
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="20%" />
        </div>

        <Skeleton variant="text" width="100%" />

        <div className={style.contentFooter}>
          <Skeleton variant="text" width="20%" />
          <p className={style.divider}> | </p>
          <Skeleton variant="text" width="20%" />
          <p className={style.divider}> | </p>
          <Skeleton variant="text" width="20%" />
        </div>
        <Skeleton variant="text" width="100%" />
      </div>
      <Skeleton variant="text" width="50%" />
    </div>
  );
}

export default MobileDummyCard;
