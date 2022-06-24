import StickyNavbar from 'components/Organisms/stickyNavbar';
import React, { useMemo, useRef, useState } from 'react';
import { useScrollPosition } from 'utilities/hook/useScrollPosition';
import MiniPreview from '../../Molecules/MiniPreview';
import {
  ProfileDetails,
  ProfileDetailsEnd,
  ProfileDetailsStart
} from '../../Organisms/ProfileDetails';
import { useProfilePageStyles } from './stylesEN';
import Breadcrumb from 'components/Atoms/breadcrumbs';
import _ from 'lodash';
import { useBusinessHoursTiming } from 'utilities/hook/useBusinessHoursTiming';
import MarketPlaceProfileImages from 'components/Molecules/marketPlaceProfileImage';

import { getQuery } from 'utilities/browserQuery';
import { Reviews } from 'types/userProfile';
import MarketplaceProfileButtons from 'components/Molecules/marketplaceProfileButtons';

interface ProfilePageLayoutProps {
  type: SearchTypes;
  data: any;
  pathExist: boolean;
  categoryName: string;
  onCrumbClicked?: VoidFunction;
  lastSearchResults: localStorageSearch;
  lastCategoryResults: LocaleStorageCategory;
  rating?: boolean;
  toggleModal: VoidFunction;
  reviews: number;
  showAuthOrRating?: any;
}
// FC<ProfilePageLayoutProps>
const ProfilePageLayout = ({
  type,
  data,
  pathExist,
  categoryName,
  onCrumbClicked,
  lastCategoryResults,
  lastSearchResults,
  toggleModal,
  rating,
  reviews,
  showAuthOrRating
}: ProfilePageLayoutProps) => {
  const styles = useProfilePageStyles();
  const uploadRef = useRef<HTMLInputElement>(null);

  const [previewInNavbar, setFilterInNavbar] = useState(false);
  const scrollTrackingRef = useRef(null);

  const query = getQuery(lastCategoryResults, lastSearchResults);

  const [terms, setTerms] = useState({
    state: false,
    title: '',
    content: ''
  });

  const [timingText, timing] = useBusinessHoursTiming(
    data?.placeData?.businessHours
  );

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

  useScrollPosition({
    effect: ({ current, previous }) => {
      console.log(current.y);
      if (current.y < -500) {
        !previewInNavbar ? setFilterInNavbar(true) : 0;
      } else {
        previewInNavbar ? setFilterInNavbar(false) : 0;
      }
    },
    deps: [previewInNavbar],
    element: scrollTrackingRef,
    throttleDuration: 250
  });

  return (
    <main>
      <StickyNavbar hasLogo position="sticky">
        {previewInNavbar &&
          (type === 'place' ? (
            <MiniPreview
              title={data.name}
              location={data.location}
              rating={data?.ratingsData?.totalRatings}
              totalReviews={reviews}
              avatar={data.placeData?.avatar}
              type={type}
            />
          ) : (
            <MiniPreview
              title={data.name}
              location={data.location}
              rating={data?.ratingsData?.totalRatings}
              totalReviews={data.ratingsData.numberOfReviews}
              avatar={data.propertyData?.avatar}
              type={type ?? 'place'}
            />
          ))}
      </StickyNavbar>
      <section className={styles.bodyWrapper} ref={scrollTrackingRef}>
        <div className={styles.headerIcons}>
          <MarketplaceProfileButtons
            location={data?.placeData.location}
            telephone={
              data?.placeData.contactNo ? data?.placeData.contactNo[0] : ''
            }
            showCall={data?.placeData.settings?.callsActivated}
            showChat={data?.placeData.settings?.chatActivated}
            buttonsDirection="column"
            // toggleModal={toggleModal}
            // rating={rating}
          />
        </div>
        <Breadcrumb
          onClick={onCrumbClicked}
          paths={[
            {
              label: lastSearchResults?.myPlace ? 'My Qloud' : 'Home',
              route: lastSearchResults?.myPlace ? '/home' : '/'
            },
            {
              label: lastSearchResults?.myPlace
                ? 'My Places'
                : categoryName ?? data?.category,
              route: lastSearchResults?.myPlace
                ? '/home/myplaces'
                : `/search${query} `
            }
          ]}
          pageName={data?.name}
        />

        {type === 'place' ? (
          <MarketPlaceProfileImages
            cover={data?.placeData?.cover?.image}
            images={data?.placeData?.images}
            avatar={data?.placeData?.avatar}
          />
        ) : (
          <MarketPlaceProfileImages
            cover={data?.propertyData?.cover?.image}
            images={data?.propertyData?.images}
            avatar={data?.propertyData?.avatar}
          />
        )}
        <ProfileDetails>
          {type === 'place' ? (
            <>
              <ProfileDetailsStart
                placeTimeStatus={timingText}
                workingTime={timing}
                data={data}
                totalReviews={reviews}
                totalRating={data?.ratingsData?.totalRatings}
                type={type}
                title={data?.name}
                location={data?.location}
                description={data?.placeData.description}
                schedule={data?.placeData.businessHours}
                amenities={allAmenities}
                landmarks={data?.placeData.nearbyLandmarks}
                verified={data?.verified}
                toggleModal={showAuthOrRating}
                category={data.category}
              />
              <ProfileDetailsEnd
                location={data?.placeData.location}
                address={data?.placeData.location.official_address}
                mapImage={data?.placeData?.location?.mapSnapshot}
                type={type}
              />
            </>
          ) : (
            <>
              <ProfileDetailsStart
                property={data}
                totalReviews={data?.ratingsData?.numberOfReviews}
                totalRating={data?.ratingsData?.totalRatings}
                type={type ?? 'place'}
                title={data?.name}
                location={data?.location}
                description={data?.propertyData.description}
                amenities={allAmenities}
                // landmarks={data?.placeData.nearbyLandmarks}
                verified={data?.verified}
                toggleModal={showAuthOrRating}
              />
              <ProfileDetailsEnd
                currency={data?.propertyData?.commercialDetails}
                location={data?.propertyData.location}
                address={data?.propertyData.location.official_address}
                mapImage={data?.propertyData.location?.mapSnapshot}
                contacts={data?.propertyData.contactNo}
                setting={data?.propertyData.settings}
                type={type ?? 'place'}
                toggleModal={toggleModal}
                rating={rating}
                totalReviews={0}
                showAuthOrRating={showAuthOrRating}
              />
            </>
          )}
        </ProfileDetails>
      </section>
    </main>
  );
};

export default ProfilePageLayout;
