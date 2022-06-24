import { Grid } from '@mui/material';
import { FC, useState } from 'react';

import { ProfileDetailsStartProps } from '../../Organisms/ProfileDetails/types';
import { useAmenitiesStyles } from './stylesEN';
import { OutlineButton } from '../../Organisms/ProfileDetails/Helpers';
import PropertyTitle from 'components/Molecules/propetyTitle';
import { BorderedBlock } from 'components/Organisms/ProfileDetailsStart/Helpers';

type AmenitiesProps = Pick<ProfileDetailsStartProps, 'amenities'>;

const topAmenitiesCount = 4;

const MarketPlaceProfileAmenities: FC<AmenitiesProps> = ({ amenities }) => {
  const [showRemainingAmenities, setShowRemainingAmenities] = useState(false);
  const styles = useAmenitiesStyles();

  const topAmenities = amenities?.slice(0, topAmenitiesCount).map(amenity => (
    <Grid
      item
      sm={12}
      md={6}
      key={amenity._id}
      sx={{
        alignItems: 'center'
      }}
    >
      <PropertyTitle title={amenity.name} />
    </Grid>
  ));
  const remainingAmenities = amenities
    ?.slice(topAmenitiesCount)
    .map(amenity => (
      <Grid item sm={12} md={6} key={amenity._id}>
        <PropertyTitle title={amenity.name} />
      </Grid>
    ));
  const hasRemainingAmenities = Boolean(remainingAmenities?.length);

  return (
    <BorderedBlock title="Amenities">
      <Grid container classes={{ root: styles.amenitiesGrid }}>
        {topAmenities}
        {showRemainingAmenities && remainingAmenities}
      </Grid>
      {hasRemainingAmenities && (
        <OutlineButton
          label={
            showRemainingAmenities
              ? 'Show less'
              : `See all ${amenities?.length} amenities`
          }
          onClick={() => {
            setShowRemainingAmenities(!showRemainingAmenities);
          }}
          marginTop={25}
        />
      )}
    </BorderedBlock>
  );
};

export default MarketPlaceProfileAmenities;
