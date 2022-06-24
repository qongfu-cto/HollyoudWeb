import { Skeleton } from '@mui/material';
import React from 'react';
import QTextButton from '../../Atoms/textButton';
import QText from '../../Atoms/text';
import { usePlaceCardContentStylesEN } from './stylesEN';

interface PlaceCardContentProps {
  placeName?: string;
  viewPlacesHandler?: string;
}

function PlaceCardContent({
  placeName,
  viewPlacesHandler
}: PlaceCardContentProps) {
  const style = usePlaceCardContentStylesEN();
  return (
    <>
      {placeName ? (
        <div className={style.container}>
          <QText
            label={placeName}
            textProps={{ classes: { root: style.title } }}
          />
          <QTextButton
            hrefLink={viewPlacesHandler}
            label="View Place"
            buttonProps={{
              style: { fontSize: 13, width: '20%', lineHeight: 1.5 }
            }}
          />
        </div>
      ) : (
        <Skeleton variant="text" />
      )}
    </>
  );
}

export default PlaceCardContent;
