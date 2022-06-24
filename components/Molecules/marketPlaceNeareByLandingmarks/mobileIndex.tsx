import { Grid } from '@mui/material';
import { FC } from 'react';
import { BorderedBlockTitle } from '../../Organisms/ProfileDetailsStart/Helpers';
import { useLandmarkStyles } from './stylesEN';
import MobileNearbyPlaceCard from 'components/Organisms/nearbyPlaceCard/mobileIndex';
import { PlacesAdditionalStartProps } from 'components/Organisms/ProfileDetails/types';

type LandmarksProps = Pick<PlacesAdditionalStartProps, 'landmarks'>;

const MobileLandmarks: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = useLandmarkStyles();
  const today = new Date()
    .toLocaleString(undefined, {
      weekday: 'long'
    })
    .toLowerCase();
  return (
    <>
      <BorderedBlockTitle title="Nearby Landmarks" mobile />
      <Grid container classes={{ root: styles.landmarkGrid }}>
        {landmarks?.map((s, i) => (
          <Grid item xs={12} sm={12} key={i}>
            <MobileNearbyPlaceCard reviews={'0'} data={s} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MobileLandmarks;
