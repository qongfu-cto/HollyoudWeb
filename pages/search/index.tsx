import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MobileSearchPageLayout from 'components/Layouts/searchPageLayout/mobileIndex';
import { SearchContainer } from 'container/search';
import SearchPageLayout from 'components/Layouts/searchPageLayout';
import { useParser } from 'utilities/hook/useParser';
import Loading from 'components/Molecules/loading';
import { useLoadPage } from 'utilities/hook/useLoadPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMarketPlace,
  getMarketPlaceProperties,
  getMarketPlaceReceive
} from 'redux/Action/app/appActions';
import SearchLayoutHeader from 'components/Organisms/searchLayoutHeader';
import MobileSearchLayoutHeader from 'components/Organisms/searchLayoutHeader/mobileIndex';
import { RootState } from 'redux/Reducer/root';
import { marketPlaceProperty } from 'utilities/propertyDummy';
import { useRouter } from 'next/router';
import {
  addSpaceBetweenStrings,
  replaceWithTheCapitalLetter
} from 'utilities/utils';
import { GetCategoryIcon } from 'utilities/hook/getCategoriIcon';
import PageHeader from 'components/Atoms/pageHeader';
import { GetSort } from 'utilities/hook/useGetSort';
import { getUserGeolocationReceive } from 'redux/Action/user/userActions';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { query, asPath } = useRouter();
  const { getIconsArray, categories } = GetCategoryIcon();
  //const { sort } = GetSort();
  const {
    loadingGeolocation,
    loadCategories,
    loadSubCategories,
    sort
  } = useSelector((state: RootState) => {
    return {
      sort: state.app.sort.value,

      loadingGeolocation: state.user.loading.geolocation,
      loadCategories: state.app.loading.categories,
      loadSubCategories: state.app.loading.subCategories
    };
  });
  const search =
    typeof window !== 'undefined' ? localStorage?.getItem('search') : null;
  const lastSearchResult: localStorageSearch = useMemo(
    () => (search ? JSON.parse(search) : null),
    [search]
  );
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryName: LocaleStorageCategory = getLocalStorage
    ? JSON.parse(getLocalStorage)
    : null;

  useEffect(() => {
    const data: any = query;
    Object.keys(data).forEach(key => {
      data[key] = addSpaceBetweenStrings(data[key]);
    });

    if (data.name === 'category' && categories.length) {
      localStorage.removeItem('search');
      const icons = getIconsArray();

      const icon = icons.find(icon => icon.id === data.id);

      const category = {
        ...data,
        topCategoryIcon: icon?.icon
      };
      localStorage.setItem(data.name, JSON.stringify(category));
      return;
    }
    if (data.name === 'search') {
      localStorage.removeItem('category');
      localStorage.setItem(data.name, JSON.stringify(data));
    }
  }, [query, categories]);

  useEffect(() => {
    if (
      lastSearchResult &&
      !loadingGeolocation &&
      !loadCategories &&
      !loadSubCategories
    ) {
      loadSearchData;
    }
  }, [loadingGeolocation, lastSearchResult, loadCategories, loadSubCategories]);

  const loadSearchData = useMemo(() => {
    if (lastSearchResult?.category && !loadingGeolocation) {
      if (lastSearchResult?.mainCategoryType == 'places')
        dispatch(getMarketPlace([lastSearchResult?.category], sort));
      if (lastSearchResult?.mainCategoryType === 'properties')
        dispatch(getMarketPlaceProperties([lastSearchResult?.category], sort));
    }
    if (!lastSearchResult?.category?.length && !loadingGeolocation) {
      if (lastSearchResult?.mainCategoryType == 'places')
        dispatch(getMarketPlace([lastSearchResult?.searchText], sort));
      if (lastSearchResult?.mainCategoryType === 'properties')
        dispatch(
          getMarketPlaceProperties([lastSearchResult?.searchText], sort)
        );
    }
  }, [lastSearchResult, loadingGeolocation, dispatch, sort]);

  const mobileSearch =
    typeof window !== 'undefined'
      ? localStorage?.getItem('mobileTabSearch')
      : null;

  const { parserData } = useParser();
  const { loadActive } = useLoadPage();

  const currentDevice = useMemo(() => {
    const deviceType = parserData?.device?.type;

    return deviceType || 'web';
  }, [parserData]);

  return useMemo(() => {
    if (currentDevice === 'mobile') {
      return (
        <SearchContainer search={lastSearchResult}>
          {loadActive ? (
            <>
              <PageHeader
                pageTitle="Hollyoud"
                pageUrl={`https://hollyoud.com${asPath}`}
                description="Connect • Collaborate • Create"
              />
            </>
          ) : (
            <>
              <PageHeader
                pageTitle="Hollyoud"
                pageUrl={`https://hollyoud.com${asPath}`}
                description="Connect • Collaborate • Create"
              />
              <MobileSearchLayoutHeader
                searchPlaceHolder={replaceWithTheCapitalLetter(
                  categoryName?.type ??
                    lastSearchResult?.mainCategoryType ??
                    'Places'
                )}
                mobileSearch={mobileSearch ? JSON.parse(mobileSearch) : false}
              />
              <MobileSearchPageLayout
                loadSearch={loadSearchData}
                parserData={parserData}
                searchName={lastSearchResult}
                hasNavbarLogo
                mobileSearch={mobileSearch ? JSON.parse(mobileSearch) : false}
              />
            </>
          )}
        </SearchContainer>
      );
    }

    return (
      <SearchContainer search={lastSearchResult}>
        {loadActive ? (
          <>
            <PageHeader
              pageTitle="Hollyoud"
              pageUrl={`https://hollyoud.com${asPath}`}
              description={`Connect • Collaborate • Create`}
              pageImage={`web/qloudcity.png`}
            />
          </>
        ) : (
          <>
            <PageHeader
              pageTitle="Hollyoud"
              pageUrl={`https://hollyoud.com${asPath}`}
              description={`Connect • Collaborate • Create`}
              pageImage={`web/qloudcity.png`}
            />
            <SearchLayoutHeader
              searchPlaceHolder={replaceWithTheCapitalLetter(
                categoryName?.type ?? lastSearchResult?.mainCategoryType
              )}
            />
            <SearchPageLayout
              searchName={lastSearchResult}
              loadSearch={loadSearchData}
            />
          </>
        )}
      </SearchContainer>
    );
  }, [
    asPath,
    lastSearchResult,
    parserData,
    mobileSearch,
    currentDevice,
    loadActive,
    categoryName,
    loadSearchData
  ]);
};

export default SearchResults;
