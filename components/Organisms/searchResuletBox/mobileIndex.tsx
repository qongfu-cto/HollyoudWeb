import { FC, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { Branding } from 'utilities/branding';
import { useMobileSearchResultBoxStyles } from './stylesEN';
import MobileMarketPlaceCard from 'components/Organisms/marketPlaceCard/mobileIndex';
import { MarketPlace } from 'types/marketPlaceApiTypes';
import { fullPageWidth, replaceWithTheCapitalLetter } from 'utilities/utils';
import MarketPlaceMobileErrorPage from 'components/Molecules/marketplaceErrorPage/mobileIndex';
import { useSearch } from 'container/search';
import { fetchAllCWHotspots } from 'redux/Action/app/appActions';
import MobileMarketPlaceCardProperty from '../marketPlaceCardProperties/mobileIndex';

type MobileSearchResultsBoxProps = {
  resultTitle?: string | null;
  noResultTitle?: string | null;
  location?: string;
  place: string;
  total: number;
  titleType: string;
  results?: any;
  locationType?: string;
  searchName: localStorageSearch;
};

const MobileSearchResultsBox: FC<MobileSearchResultsBoxProps> = ({
  // noResultTitle,
  location,
  // resultTitle,
  searchName,
  place,
  results,
  total,
  titleType,
  locationType
}) => {
  const styles = useMobileSearchResultBoxStyles();
  const {
    marketplace,
    category,
    categories,
    subCategories,
    handleInputOnClick,
    getMarketPlaceRecords,
    openDrawer,
    onDrawerClose,
    onDrawerClicked,
    categoryClicked,
    applyFilters
  } = useSearch();
  const width = fullPageWidth();
  const dispatch = useDispatch();
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryName: LocaleStorageCategory = getLocalStorage
    ? JSON.parse(getLocalStorage)
    : null;

  useEffect(() => {
    setTimeout(() => {
      if (results.length) {
        dispatch(fetchAllCWHotspots());
      }
    }, 100);
  }, [dispatch, results]);

  const displayCategory = useMemo(() => {
    const name =
      category?.displayName ||
      subCategories?.displayName ||
      categoryName?.subCategory ||
      categoryName?.topCategory;

    return replaceWithTheCapitalLetter(name);
  }, [category, subCategories, categoryName]);

  const displaySearch = useMemo(() => {
    const search =
      searchName?.type === 'place'
        ? searchName?.category
        : searchName?.searchText;
    return replaceWithTheCapitalLetter(search);
  }, [searchName]);

  const resultString = useMemo(
    () =>
      displayCategory
        ? ` ${displayCategory} in ${place}`
        : displaySearch
        ? `Results for "${displaySearch}" in ${place}`
        : null,
    [displayCategory, place, displaySearch]
  );

  const noResultString = useMemo(
    () =>
      displayCategory
        ? `"${displayCategory}" in ${place}`
        : displaySearch
        ? `Results for "${displaySearch}" in ${place}`
        : null,
    [displayCategory, place, displaySearch]
  );

  if (!results?.length) {
    return (
      <MarketPlaceMobileErrorPage
        categories={categories}
        categoryClicked={categoryClicked}
      />
    );
  }
  return (
    <section className={styles.container} style={{ width: width ?? 100 }}>
      <section className={styles.header}>
        <section className={styles.title}>
          <Typography
            variant="h5"
            color={Branding.Colors.black[86]}
            fontWeight="normal"
            fontSize={20}
            fontFamily="Outfit"
          >
            {results?.length
              ? titleType === 'location'
                ? ` ${locationType} in ${location}`
                : resultString
              : titleType === 'location'
              ? `${locationType} in ${location}`
              : noResultString}
          </Typography>

          {results?.length ? (
            <Typography
              variant="caption"
              color={Branding.Colors.black[60]}
              fontWeight={300}
              fontSize={16}
              lineHeight="20px"
              fontFamily="Outfit"
            >
              {total === 1
                ? ` ${total?.toLocaleString('en-US') ?? 'No'} Place Found`
                : ` ${total?.toLocaleString('en-US') ?? 'No'} Places Found`}
            </Typography>
          ) : null}
        </section>
      </section>
      <section className={styles.results} style={{ width: width ?? 100 }}>
        {results?.marketPlaces?.map((result: any, i: number) => {
          return result?.type === 'place' ? (
            <MobileMarketPlaceCard
              key={i}
              description={result?.placeData.description}
              ratingReview={result?.ratingsData.numberOfReviews}
              totalRating={result?.ratingsData.totalRatings}
              image={result?.placeData?.cover.image}
              rate={result.ratingsData.totalRatings}
              businessHours={result.placeData?.businessHours}
              path={'places'}
              results={result}
              id={result._id}
              name={result.name}
              category={result.category}
              cardType={result?.type}
              verified={result?.verified}
              location={result?.location ?? ''}
              telephone={result?.placeData.contactNo[0]}
              showCall={result?.placeData.settings.callsActivated}
              lat={result?.placeData?.loc.coordinates[0]}
              lng={result?.placeData?.loc.coordinates[1]}
            />
          ) : (
            <MobileMarketPlaceCardProperty
              key={i}
              ratingReview={result?.ratingsData.numberOfReviews}
              totalRating={result?.ratingsData.totalRatings}
              image={result?.propertyData?.cover.image}
              rate={result.ratingsData.totalRatings}
              description={result?.propertyData?.description}
              path={'properties'}
              result={result}
              id={result._id}
              name={result.name}
              category={result.category}
              cardType={result?.type}
              verified={result?.verified}
              location={result?.location ?? ''}
            />
          );
        })}
      </section>
    </section>
  );
};

export default MobileSearchResultsBox;
