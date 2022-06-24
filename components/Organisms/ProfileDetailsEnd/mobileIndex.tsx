import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useMobileProfileDetailsEndStyles } from './stylesEN';
import {
  CommonEndProps,
  ProfileDetailsEndProps
} from '../ProfileDetails/types';
import {
  Circle,
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow
} from '@react-google-maps/api';
import { Branding } from 'utilities/branding';
import QButton from 'components/Atoms/button';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';
import MobileLandmarks from 'components/Molecules/marketPlaceNeareByLandingmarks/mobileIndex';
import { BorderedBlockTitle } from '../ProfileDetailsStart/Helpers';
import MobileReviews from 'components/Molecules/marketPlaceReviews/mobileIndex';
import { API_URL } from 'utilities/api';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import PropertyDetails from './PropertyDetails';

const MobileProfileDetailsEnd: FC<CommonEndProps> = ({
  location,
  lat,
  lng,
  mapImage,
  landmarks,
  rate,
  reviews,
  totalReviews,
  address,
  type,
  currency,
  ...rest
}) => {
  const styles = useMobileProfileDetailsEndStyles();
  const { isLogged } = useUserIsLogged();
  const [userLocation, setUserLocation] = useState({ userLat: 0, userLng: 0 });
  const userCurrentLocation = useSelector(
    (state: RootState) => state.user.geolocation
  );
  const navigate = typeof navigator !== 'undefined' ? navigator : null;

  const openGoogleMap = () => {
    if (navigator.permissions && navigator.permissions.query) {
      //try permissions APIs first
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          // Will return ['granted', 'prompt', 'denied']
          const permission = result.state;
          if (permission === 'granted') {
            onGetCurrentLocation();
            return;
          }

          if (permission === 'denied' || 'prompt') {
            const { lat, lng } = location.geometry.location;
            return window.open(
              `https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},15z`,
              '_blank'
            );

            return;
          }
        });
    } else if (navigator.geolocation) {
      //then Navigation APIs
      onGetCurrentLocation();
    }
  };

  const onGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      //imitate map latlng construct
      //console.log(position);

      const { lat, lng } = location.geometry.location;
      return window.open(
        `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/${lat},${lng}`,

        '_blank'
      );
    });
  };

  return (
    <section className={styles.container}>
      <BorderedBlockTitle title="Location Details" mobile />
      {/* {type === 'property' && <PropertyDetails pricing={currency} />} */}
      <section className={styles.locationContainer}>
        <header className={styles.locationHeader}>
          {/* {isLogged && (
            <QButton
              outline
              label="Get Directions "
              style={{ borderRadius: 12, height: 33, width: 130 }}
              labelStyles={{
                color: Branding.Colors.primary.normal,
                fontSize: 12
              }}
            />
          )} */}
        </header>
        <section className={styles.locationMap}>
          {mapImage ? (
            <div style={{ position: 'relative' }}>
              <div className={styles.circle}>
                <div className={styles.midCircle} />
              </div>
              <img
                onClick={() => openGoogleMap()}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
                src={`${API_URL}/location/image/?key=${mapImage}`}
              />
            </div>
          ) : (
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
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

      {landmarks?.length ? <MobileLandmarks landmarks={landmarks} /> : null}
      <MobileReviews />
    </section>
  );
};

export default MobileProfileDetailsEnd;
