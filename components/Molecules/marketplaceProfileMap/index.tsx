import { Card, CardContent, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useProfileDetailsEndStyles } from './style';
import {
  CommonEndProps,
  ProfileDetailsEndProps
} from 'components/Organisms/ProfileDetails/types';
import { Branding } from 'utilities/branding';
import QButton from 'components/Atoms/button';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';
import MarketplaceProfileButtons from 'components/Molecules/marketplaceProfileButtons';
import { API_URL } from 'utilities/api';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import PropertyDetails from 'components/Organisms/ProfileDetailsEnd/PropertyDetails';
import { BorderedBlock } from 'components/Organisms/ProfileDetailsStart/Helpers';
import { openGoogleMap } from 'utilities/currentLocationMapHandler';

function MarketPlaceProfileMap({
  location,
  currency,
  mapImage,
  address,
  type,
  noDivider,
  MapInCenter
}: CommonEndProps) {
  const styles = useProfileDetailsEndStyles({ center: MapInCenter });

  const userCurrentLocation = useSelector(
    (state: RootState) => state.user.geolocation
  );
  const { isLogged } = useUserIsLogged();
  const navigate = typeof navigator !== 'undefined' ? navigator : null;

  return (
    <BorderedBlock title="Location Details" mobile={noDivider}>
      {/* <header className={styles.header}>
        <div className={styles.headerIcons}>
          <MarketplaceProfileButtons
            telephone={contacts ? contacts[0] : ''}
            showCall={setting?.callsActivated}
            showChat={setting?.chatActivated}
            toggleModal={toggleModal}
            rating={rating}
          />
        </div>
      </header> */}
      {type === 'property' && <PropertyDetails pricing={currency} />}
      <section className={styles.locationContainer}>
        {/* <header className={styles.locationHeader}>
          <QButton
            outline
            label="Get Directions "
            style={{ borderRadius: 12, height: 33, width: 150 }}
            labelStyles={{
              color: Branding.Colors.primary.normal,
              fontSize: 12
            }}
            onClick={() => openGoogleMap()}
          />
        </header> */}
        <section
          className={styles.locationMap}
          onClick={() => openGoogleMap(location)}
        >
          {mapImage ? (
            <div style={{ position: 'relative' }}>
              <div className={styles.circle}>
                <div className={styles.midCircle} />
              </div>

              <img
                style={{ width: '100%', height: '100%' }}
                src={`${API_URL}/location/image/?key=${mapImage}`}
              />
            </div>
          ) : (
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={`https://via.placeholder.com/574x184`}
            />
          )}
        </section>

        <Typography
          variant="caption"
          classes={{ root: styles.locationAddress }}
        >
          {address}
        </Typography>
      </section>
    </BorderedBlock>
  );
}

export default MarketPlaceProfileMap;
