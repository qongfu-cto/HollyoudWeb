import StickyNavbar from 'components/Organisms/stickyNavbar';
import React, { FC, useMemo, useState, useEffect, useRef } from 'react';
import Breadcrumb from 'components/Atoms/breadcrumbs';
import { PlacesResult } from 'types/marketPlaceApiTypes';
import _ from 'lodash';
import { useBusinessHoursTiming } from 'utilities/hook/useBusinessHoursTiming';
import QButton from 'components/Atoms/button';
import { Branding } from 'utilities/branding';
import MobileImageStepper from 'components/Molecules/mobileImagesStepper';
import MobileProfileDetailsStart from 'components/Organisms/ProfileDetailsStart/mobileIndex';
import MobileProfileDetailsEnd from 'components/Organisms/ProfileDetailsEnd/mobileIndex';
import { fullPageWidth, onMobile } from 'utilities/utils';
import { useProfilePageStyles } from './stylesEN';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import {
  getMyPlaces,
  updateMyPlaces
} from 'redux/Action/myQloud/myQloudActions';

import { useRouter } from 'next/router';
import { Reviews } from 'types/userProfile';

interface MobileProfilePageLayoutProps {
  type: SearchTypes;
  data: PlacesResult['marketPlaces'][0];
  pathExist: boolean;
  categoryName?: string;
  toggleModal?: any;
  reviews: any;
  showAuthOrRating?: any;
}
// FC<MobileProfilePageLayoutProps>
const MobileProfilePageLayout = ({
  type,
  data,
  pathExist,
  categoryName,
  toggleModal,
  reviews,
  showAuthOrRating
}: any) => {
  const styles = useProfilePageStyles();
  const [timingText, timing] = useBusinessHoursTiming(
    data?.placeData?.businessHours
  );
  const width = fullPageWidth();
  const { back } = useRouter();

  const dispatch = useDispatch();
  const { myPage, favoritePlace } = useSelector((state: RootState) => ({
    myPage: state.app.place.myPlace,
    favoritePlace: state.myQloud.favoritePlaceMessage.success
  }));
  const [like, setLike] = useState(() => myPage);

  const onFavoriteClicked = () => {
    dispatch(updateMyPlaces(data._id));
  };
  useEffect(() => {
    if (favoritePlace !== undefined) {
      setLike(favoritePlace);
      dispatch(getMyPlaces());
    }
  }, [favoritePlace, dispatch]);

  const allAmenities = useMemo(() => {
    if (data?.placeData?.standardAmenities.length > 2) {
      const standardAmenities =
        data?.placeData?.standardAmenities[0].selections;
      const specialAmenities = data?.placeData?.specialAmenities;
      const allAmenities = _.concat(standardAmenities, specialAmenities);

      return allAmenities;
    }
    return [];
  }, [data]);

  return (
    <div style={{ width: width ?? '100%' }}>
      {type === 'place' ? (
        <>
          <MobileImageStepper
            showLike
            like={like}
            onFavoriteClicked={onFavoriteClicked}
            cover={data?.placeData?.cover.image}
            images={data?.placeData?.images}
            avatar={data?.placeData?.avatar}
          />

          <MobileProfileDetailsStart
            like={like}
            onFavoriteClicked={onFavoriteClicked}
            placeTimeStatus={timingText}
            workingTime={timing}
            totalReviews={reviews?.params?.totalRecords}
            totalRating={data.ratingsData?.totalRatings}
            data={data}
            category={categoryName}
            // {...commonStartProps}
            // type="places"
            contacts={data.placeData.contactNo}
            type={type}
            title={data.name}
            location={data.location}
            description={data.placeData.description}
            schedule={data.placeData.businessHours}
            amenities={allAmenities}
            setting={data.placeData.settings}
            geometry={data.placeData.location?.geometry.location}
            toggleModal={toggleModal}
            showAuthOrRating={showAuthOrRating}
            //  {...propertiesStartProps}
          />
          <MobileProfileDetailsEnd
            location={data.placeData.location}
            address={data.placeData.location.official_address}
            //lat={data.placeData.location?.geometry.location.lat}
            //  lng={data.placeData.location?.geometry.location.lng}
            mapImage={data.placeData?.location?.mapSnapshot}
            landmarks={data.placeData.nearbyLandmarks}
            totalReviews={data?.ratingsData.numberOfReviews}
            rate={data?.ratingsData?.totalRatings}
            type={type}
            toggleModal={toggleModal}
            reviews={reviews?.reviews}
            // {...propertiesEndProps}
          />
        </>
      ) : (
        <>
          <MobileImageStepper
            showLike
            cover={data?.propertyData?.cover.image}
            images={data?.propertyData?.images}
            avatar={data?.propertyData?.avatar}
          />

          <MobileProfileDetailsStart
            placeTimeStatus={timingText}
            workingTime={timing}
            totalReviews={data.ratingsData.numberOfReviews}
            totalRating={data.ratingsData?.totalRatings}
            data={data}
            contacts={data.propertyData.contactNo}
            type={type}
            title={data.name}
            location={data.location}
            description={data.propertyData.description}
            amenities={allAmenities}
            setting={data.propertyData.settings}
            geometry={data.propertyData.location?.geometry.location}
            showAuthOrRating={showAuthOrRating}
          />
          <MobileProfileDetailsEnd
            location={data.propertyData.location}
            address={data.propertyData.location.official_address}
            //lat={data.placeData.location?.geometry.location.lat}
            //  lng={data.placeData.location?.geometry.location.lng}
            mapImage={data.propertyData?.location?.mapSnapshot}
            // landmarks={data.placeData.nearbyLandmarks}
            rating={data.ratingsData.score.$numberDecimal}
            totalReviews={data.ratingsData.numberOfReviews}
            currency={data?.propertyData?.commercialDetails}
            type={type}
            toggleModal={toggleModal}
          />
        </>
      )}
    </div>
  );
};

export default MobileProfilePageLayout;

export const ErrorProfileLayout = ({
  children
}: {
  children: React.ReactElement;
}) => {
  const styles = useProfilePageStyles();
  return (
    <div style={{ height: '80vh' }}>
      <StickyNavbar hasLogo />
      <section
        className={styles.bodyWrapper}
        style={{
          height: '100%'
        }}
      >
        <Breadcrumb
          paths={[{ label: 'Home', route: '/search' }]}
          pageName={'Page Not Found'}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          {children}

          <QButton
            label="Back to Home"
            buttonProps={{ href: '/' }}
            onClick={() =>
              localStorage.setItem(
                'placeError',
                JSON.stringify(
                  'The link shared is no longer available. Please enjoy surfing Qloud City!'
                )
              )
            }
            style={{
              //  backgroundColor: Branding.Colors.primary.normal,
              marginTop: 20
            }}
          />
        </div>
      </section>
    </div>
  );
};
