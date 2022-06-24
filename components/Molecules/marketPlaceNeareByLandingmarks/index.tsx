import { Grid } from '@mui/material';
import { FC } from 'react';
import { BorderedBlock } from '../../Organisms/ProfileDetailsStart/Helpers';

import { useLandmarkStyles } from './stylesEN';
import NearbyPlaceCard from 'components/Organisms/nearbyPlaceCard';
import { PlacesAdditionalStartProps } from 'components/Organisms/ProfileDetails/types';

type LandmarksProps = Pick<PlacesAdditionalStartProps, 'landmarks'>;

const Landmarks: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = useLandmarkStyles();
  const today = new Date()
    .toLocaleString(undefined, {
      weekday: 'long'
    })
    .toLowerCase();

  return (
    <BorderedBlock title="Nearby Landmarks">
      <Grid container classes={{ root: styles.landmarkGrid }}>
        {landmarks?.map((s, i) => (
          <Grid item sm={12} key={i}>
            <NearbyPlaceCard reviews={'0'} data={s} />
          </Grid>
        ))}
      </Grid>
    </BorderedBlock>
  );
};

export default Landmarks;
