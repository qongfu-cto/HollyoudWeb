import { Typography } from '@mui/material';
import { FC } from 'react';
import { PlacesAdditionalStartProps } from '../ProfileDetails/types';
import { useProfileDetailsStartStyles } from './stylesEN';

type PlaceDescriptionProps = Pick<PlacesAdditionalStartProps, 'opening'>;

const PlaceDescription: FC<PlaceDescriptionProps> = ({ opening }) => {
  const styles = useProfileDetailsStartStyles();
  return (
    <section className={styles.placeDescriptionContainer}>
      <Typography
        variant="h6"
        classes={{ root: styles.placeDescriptionStatus }}
      >
        {opening?.status}
      </Typography>
      <Typography
        variant="body2"
        classes={{ root: styles.placeDescriptionTime }}
      >
        {opening?.time}
      </Typography>
    </section>
  );
};

export default PlaceDescription;
