import { FC, useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  ClickAwayListener,
  Divider,
  Skeleton,
  Typography
} from '@mui/material';
import { Branding } from 'utilities/branding';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownArrow from 'assets/icons/down-arrow.svg';
import { useSearchResultBoxStyles } from './stylesEN';
import { MarketPlace, MarketPlaceProperties } from 'types/marketPlaceApiTypes';
import MarketPlaceCard from '../marketPlaceCard';
import MarketPlaceErrorPage from 'components/Molecules/marketplaceErrorPage';
import { useRouter } from 'next/router';
import SignupSubmitLoader from 'components/Molecules/SignupSubmitLoader';
import Loading from 'components/Molecules/loading';
import { useOnScreen } from 'utilities/hook/useOnScreen';
import { useSearch } from 'container/search';
import { useLoadPage } from 'utilities/hook/useLoadPage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/Reducer/root';

import {
  addDashBetweenStrings,
  replaceWithTheCapitalLetter
} from 'utilities/utils';
import Img from 'components/Atoms/img';
import { GetSort } from 'utilities/hook/useGetSort';

import { useGetCategories } from 'utilities/hook/useGetCategory';
import _, { isNull, isUndefined, sortedIndex } from 'lodash';
import { searchSort, fetchAllCWHotspots } from 'redux/Action/app/appActions';
import { getUserGeolocationReceive } from 'redux/Action/user/userActions';
import SortText from './helper';
import MarketPlaceCardProperties from '../marketPlaceCardProperties';
import DummyCard from 'components/Molecules/DummyCard';

import FILTER from '../../../assets/icons/filter-empty.svg';
import Image from 'next/image';

type SearchResultsBoxProps = {
  searchName: localStorageSearch;
  place: string;
  results?: {
    length: number;
    marketPlaces: MarketPlace[] | MarketPlaceProperties[];
  };
  categoryName: LocaleStorageCategory;
  loadSearch: void;
  location?: any;
  opened?: any;
};

const SearchResultsBox: FC<SearchResultsBoxProps> = ({
  searchName,
  place,
  categoryName,
  loadSearch,
  location,
  opened
  // results
}) => {
  const styles = useSearchResultBoxStyles();
  const [loading, setLoading] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const { push } = useRouter();
  const scrollRef = useRef(null);
  const {
    marketplace: results,
    getMarketPlaceRecords,
    category,
    subCategories,
    categoryClicked,
    openFilters,
    categories
  } = useSearch();

  const { dispatchToMarketPlace } = useGetCategories();
  const dispatch = useDispatch();

  window.onbeforeunload = () => {
    localStorage.removeItem('openFilter');
    localStorage.removeItem('locationFilter');
  };

  window.onload = () => {
    localStorage.removeItem('openFilter');
    localStorage.removeItem('locationFilter');
  };

  const { sort, permission } = GetSort();
  const onScreen = useOnScreen(scrollRef);
  const { pageLength, load, length, total, subCategory } = useSelector(
    (state: RootState) => {
      return {
        pageLength: state.app.marketplace.pageLength,
        load: state.app.loading.marketPlace,
        length: state.app.marketplace.length,
        total: state.app.marketplace.total,
        subCategory: state.app.subCategories
      };
    }
  );

  const onCardClick = async (link: string) => {
    setLoading(true);
    const res = await push(link);
    if (res) setLoading(false);
  };
  const { loadActive, setLoadActive } = useLoadPage();

  useEffect(() => {
    setTimeout(() => {
      if (results.length) {
        dispatch(fetchAllCWHotspots());
        setLoadActive(true);
      } else {
        setLoadActive(false);
      }
    }, 100);
  }, [dispatch, results]);

  useEffect(() => {
    if (onScreen && pageLength) {
      let location: any = [];
      let open: any = { openNow: false };
      if (!isNull(localStorage.getItem('locationFilter'))) {
        location = JSON.parse(localStorage.getItem('locationFilter')!);
      }
      if (!isNull(localStorage.getItem('openFilter'))) {
        if (!isUndefined(JSON.parse(localStorage.getItem('openFilter')!))) {
          open = JSON.parse(localStorage.getItem('openFilter')!);
        }
      }
      getMarketPlaceRecords(
        results.tag,
        results.tagId,
        results.type,
        sort,
        location,
        open
      );
    }
  }, [onScreen, pageLength, results.tag, results.tagId, results.type, sort]);

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
    [displayCategory, displaySearch, place]
  );

  const noResultString = useMemo(
    () =>
      displayCategory
        ? `"${displayCategory}" in ${place}`
        : displaySearch
        ? `Results for "${displaySearch}" in ${place}`
        : null,
    [displayCategory, displaySearch, place]
  );

  const locationType = replaceWithTheCapitalLetter(
    searchName?.mainCategoryType
  );

  const onGetCurrentLocation = () => {
    if (navigator.permissions && navigator.permissions.query) {
      //try permissions APIs first
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          // Will return ['granted', 'prompt', 'denied']
          const permission = result.state;

          if (permission === 'granted') {
            navigator.geolocation.getCurrentPosition(function(position) {
              //imitate map latlng construct
              const userPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
              sessionStorage.setItem(
                'currentLocation',
                JSON.stringify(userPosition)
              );
            });
            dispatch(searchSort('nearest', 'granted'));
            onSortingClicked('nearest');
            return;
          }
          if (permission === 'denied' || 'prompt') {
            sessionStorage.removeItem('currentLocation');
            const location = sessionStorage.getItem('geolocation');

            const locationData = location ? JSON.parse(location) : null;

            dispatch(getUserGeolocationReceive(locationData));
            if (permission === 'denied') {
              dispatch(searchSort('highest-rated', 'denied'));
            } else {
              dispatch(searchSort('highest-rated', 'granted'));
            }
            onSortingClicked('highest-rated');
            return;
          }
        });

      return false;
    } else if (navigator.geolocation) {
      //then Navigation APIs
      navigator.geolocation.getCurrentPosition(function(position) {
        //imitate map latlng construct
        const userPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        sessionStorage.setItem('currentLocation', JSON.stringify(userPosition));
      });

      return true;
    }
  };

  const onSortingClicked = (sort: string) => {
    setShowSort(false);

    if (categoryName) {
      if (categoryName.subCategoryId.length) {
        dispatchToMarketPlace(
          subCategory,
          categoryName.type,
          categoryName.subCategoryId,
          sort
        );
        return;
      }
      categoryClicked(categoryName.id, sort);
    }
    if (searchName) {
      loadSearch;
    }
  };

  return (
    <section
      className={styles.container}
      style={{
        width: !results?.marketPlaces?.length && !load ? '80%' : 'auto'
      }}
    >
      <section className={styles.header}>
        <section className={styles.title}>
          {!load ? (
            <Typography
              variant="h5"
              color={Branding.Colors.white}
              fontSize={18}
              fontWeight={500}
              lineHeight="20px"
              fontFamily="Outfit"
            >
              {results?.length
                ? searchName?.type === 'location'
                  ? ` ${locationType} in ${searchName?.searchText}`
                  : resultString
                : searchName?.type === 'location'
                ? `${locationType} in ${searchName?.searchText} `
                : noResultString}
              {total === 1
                ? ` - ${total?.toLocaleString('en-US') ?? 'No'} Place Found`
                : ` - ${total?.toLocaleString('en-US') ?? 'No'} Places Found`}
            </Typography>
          ) : (
            <Skeleton variant="rectangular" width={520} height={40} />
          )}
          {/* {results?.length ? (
            <Typography
              fontWeight={500}
              variant="caption"
              color={Branding.Colors.black[86]}
              fontSize={18}
              lineHeight="20px"
              fontFamily="Outfit"
              // style={{ position: 'relative', bottom: 4 }}
            >
              {total === 1
                ? `- ${total?.toLocaleString('en-US') ?? 0} Place Found`
                : `- ${total?.toLocaleString('en-US') ?? 0} Places Found`}
            </Typography>
          ) : null} */}
        </section>

        <section className={styles.sorting}>
          <div className={styles.sortTitle}>
            <Typography
              variant="caption"
              color={Branding.Colors.white}
              fontWeight="medium"
              fontSize={16}
              fontFamily="Outfit"
              lineHeight="20px"
            >
              Sort By:
            </Typography>
          </div>

          {showSort ? (
            <ClickAwayListener onClickAway={() => setShowSort(false)}>
              <div className={styles.sortDropDown}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    variant="caption"
                    color={Branding.Colors.black[86]}
                    fontWeight="medium"
                    fontSize={16}
                    fontFamily="Outfit"
                    lineHeight="20px"
                  >
                    <span style={{ textTransform: 'capitalize' }}>
                      {_.replace(sort, '-', ' ')}
                    </span>
                  </Typography>
                  <Img
                    source={DownArrow}
                    container={{ width: 15, height: 15 }}
                  />
                </div>

                <div
                  style={{
                    margin: `15px 0 5px 0`,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <SortText
                    onClickHandler={() => {
                      dispatch(searchSort('highest-rated', permission)),
                        onSortingClicked('highest-rated');
                    }}
                    buttonLabel={'Highest Rated'}
                    subLabel={'Highest to Lowest'}
                  />

                  <Divider style={{ margin: `10px 0` }} />
                  <SortText
                    onClickHandler={() => onGetCurrentLocation()}
                    buttonLabel={'Nearest'}
                    subLabel={'Requires your current location.'}
                    handleDisable={permission === 'denied' ? true : false}
                  />
                </div>
              </div>
            </ClickAwayListener>
          ) : (
            <div
              className={styles.sortDropDown}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: !results.length
                  ? Branding.Colors.black[6]
                  : 'transparent'
              }}
              onClick={
                results.length === 0 ? undefined : () => setShowSort(true)
              }
            >
              <Typography
                variant="caption"
                color={
                  !results.length
                    ? Branding.Colors.black[48]
                    : Branding.Colors.black[86]
                }
                fontWeight="medium"
                fontSize={16}
                fontFamily="Outfit"
                lineHeight="20px"
                style={{ cursor: 'pointer' }}
              >
                <span style={{ textTransform: 'capitalize' }}>
                  {_.replace(sort, '-', ' ')}
                </span>
              </Typography>
              <Img source={DownArrow} container={{ width: 15, height: 15 }} />
            </div>
          )}
        </section>
      </section>

      {!load ? (
        results?.length ? (
          <>
            <section className={styles.results}>
              {/* {loading && (
                <SignupSubmitLoader openModal={loading} message={''} />
              )} */}
              {results?.marketPlaces?.map((result, i) => {
                return (
                  <div key={i}>
                    {result.type === 'place' ? (
                      <MarketPlaceCard
                        result={result}
                        click={() =>
                          onCardClick(
                            `/places/${result?._id}/${result?.name.replace(
                              /\s/g,
                              '-'
                            )}`
                          )
                        }
                      />
                    ) : (
                      <MarketPlaceCardProperties
                        result={result}
                        click={() =>
                          onCardClick(
                            `/properties/${result?._id}/${addDashBetweenStrings(
                              result?.name
                            )}`
                          )
                        }
                      />
                    )}
                  </div>
                );
              })}
            </section>

            {length < total ? (
              <div ref={scrollRef}>
                <Loading />
              </div>
            ) : null}
          </>
        ) : !loadActive ? (
          <div className={styles.error}>
            <MarketPlaceErrorPage
              categories={categories}
              categoryClicked={categoryClicked}
              result={displayCategory ?? displaySearch}
            />
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <section className={styles.results}>
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <DummyCard key={i} />
            ))}
        </section>
      )}

      {/* Array(6)
              .fill(0)
              .map((_, i) => <MarketPlaceCard key={i} /> */}
    </section>
  );
};

export default SearchResultsBox;
