import { Skeleton } from '@mui/material';
import React from 'react';
import QTextButton from '../../Atoms/textButton';
import QText from '../../Atoms/text';
import { usePlaceCardContentStylesEN } from './stylesEN';

interface PlaceCardContentProps {
  placeName?: string;
  viewPlacesHandler?: () => void;
}

function MobilePlaceCardContent({
  placeName,
  viewPlacesHandler
}: PlaceCardContentProps) {
  const style = usePlaceCardContentStylesEN();

  return (
    <>
      {placeName ? (
        <div className={style.container} style={{ height: 30 }}>
          <QText
            label={placeName}
            labelStyle={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              width: '80%'
            }}
            textProps={{ classes: { root: style.title } }}
          />
          <QTextButton
            button
            label="View Place"
            style={{ fontSize: 12, whiteSpace: 'nowrap' }}
          />
        </div>
      ) : (
        <Skeleton variant="text" />
      )}
    </>
  );
}

export default MobilePlaceCardContent;
