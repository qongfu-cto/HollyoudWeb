import { FC, useEffect, useRef, useState } from 'react';
import { useMobileProfileDetailsStartStyles } from './stylesEN';
import MarketPlacePropertyDetails from '../../Molecules/marketPlacePropertyDetails';
import {
  CommonStartProps,
  ProfileDetailsStartProps
} from '../ProfileDetails/types';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';
import MobileMarketPlaceProfileAmenities from 'components/Molecules/marketPlaceProfileAmenities/mobileIndex';
import MobilePlaceSchedule from 'components/Molecules/marketPlaceSchedule/mobileIndex';
import MobileMarketplaceProfileHeadInfo from 'components/Molecules/marketplaceProfileHeadInfo/mobileIndex';
import { useScrollPosition } from 'utilities/hook/useScrollPosition';
import MobilePlaceDescription from 'components/Molecules/mobilePlaseDescription';
import MobileMarketPlacePropertyDetails from 'components/Molecules/marketPlacePropertyDetails/mobileIndex';
import Toast from 'components/Atoms/newToast';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';

import { Branding } from 'utilities/branding';
import { FixedContent } from './Helpers';

const MobileProfileDetailsStart: FC<CommonStartProps> = ({
  contacts,
  amenities,
  location,
  // rating,
  totalReviews,
  totalRating,
  title,
  description,
  reviews,
  schedule,
  placeTimeStatus,
  workingTime,
  setting,
  geometry,
  data,
  type,
  category,
  toggleModal,
  like,
  onFavoriteClicked,
  showAuthOrRating,
  ...rest
}) => {
  const styles = useMobileProfileDetailsStartStyles();
  const { isLogged } = useUserIsLogged();
  const [showHeader, setShowHeader] = useState(false);
  const [showToast, setToast] = useState<{
    value: boolean;
    type: 'success' | 'error';
  }>({
    value: false,
    type: 'success'
  });

  const { favoritePlaceMessage } = useSelector((state: RootState) => ({
    favoritePlaceMessage: state.myQloud.favoritePlaceMessage
  }));

  useEffect(() => {
    if (favoritePlaceMessage?.success !== undefined) {
      setToast({
        value: true,
        type: favoritePlaceMessage.success ? 'success' : 'error'
      });
    }
  }, [favoritePlaceMessage.success]);

  const scrollTrackingRef = useRef(null);
  useScrollPosition({
    effect: ({ current }) => {
      console.log(current.y);
      if (current.y < 10) {
        !showHeader ? setShowHeader(true) : 0;
      } else {
        showHeader ? setShowHeader(false) : 0;
      }
    },
    deps: [showHeader],
    element: scrollTrackingRef,
    throttleDuration: 250
  });

  return (
    <section className={styles.container}>
      {showHeader && (
        <FixedContent
          category={category}
          type={type}
          location={location}
          title={title}
          rating={totalRating}
        />
      )}
      <section ref={scrollTrackingRef}>
        <Toast
          message={favoritePlaceMessage.message}
          visible={showToast.value}
          duration={3000}
          setVisible={() => {
            setToast({
              value: false,
              type: favoritePlaceMessage?.success ? 'success' : 'error'
            });
          }}
          type={showToast.type}
        />

        <MobileMarketplaceProfileHeadInfo
          like={like}
          onFavoriteClicked={onFavoriteClicked}
          category={category}
          data={data}
          property={data}
          contacts={contacts}
          totalRating={totalRating}
          title={title}
          placeTimeStatus={placeTimeStatus}
          workingTime={workingTime}
          location={location}
          totalReviews={totalReviews}
          isLogged={isLogged}
          // show={showHeader}
          setting={setting}
          geometry={geometry}
          type={type}
          toggleModal={toggleModal}
          showAuthOrRating={showAuthOrRating}
        />
      </section>
      <div style={{ padding: `0 20px` }}>
        {description && <MobilePlaceDescription description={description} />}

        {type === 'property' ? (
          <MobileMarketPlacePropertyDetails
            iconsArray={data?.propertyData?.mainCategory.config.details}
            details={data?.propertyData}
            parking={data?.propertyData.parking}
            type={data?.category}
          />
        ) : //
        schedule?.length ? (
          <MobilePlaceSchedule schedule={schedule} />
        ) : null}
        {amenities?.length ? (
          <MobileMarketPlaceProfileAmenities amenities={amenities} />
        ) : null}
      </div>
    </section>
  );
};

export default MobileProfileDetailsStart;
