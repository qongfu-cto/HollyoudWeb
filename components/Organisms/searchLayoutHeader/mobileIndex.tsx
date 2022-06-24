import QMobileMainSearch from 'components/Molecules/QMainSearch/mobileIndex';
import { useSearch } from 'container/search';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { MarketPlace, PlacesResult } from 'types/marketPlaceApiTypes';
import MobileStickyNav from '../mobileStickyNav/mobileIndex';
import StickyNavbar from '../stickyNavbar';

function MobileSearchLayoutHeader({
  mobileSearch,
  searchPlaceHolder
}: {
  mobileSearch: boolean;
  searchPlaceHolder: string | undefined;
}) {
  const { categories, marketplace } = useSearch();
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryName = getLocalStorage ? JSON.parse(getLocalStorage) : null;

  const { country } = useSelector((state: RootState) => ({
    country: state.user.geolocation.country_code2
  }));

  console.log({ searchPlaceHolder });
  return (
    <MobileStickyNav>
      <QMobileMainSearch
        landingPage={mobileSearch}
        categoryName={categoryName}
        fullWidth={mobileSearch ? true : false}
        categories={categories}
        mobileSearch={mobileSearch}
        results={marketplace}
        searchPlaceHolder={`Search ${searchPlaceHolder} in ${country} (Keywords)`}
      />
    </MobileStickyNav>
  );
}

export default MobileSearchLayoutHeader;
