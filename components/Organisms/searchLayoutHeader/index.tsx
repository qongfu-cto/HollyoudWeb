import QMainSearch from 'components/Molecules/QMainSearch';
import SearchNavBar from 'components/Molecules/searchNavBar';
import { useSearch } from 'container/search';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import StickyNavbar from '../stickyNavbar';

function SearchLayoutHeader({
  searchPlaceHolder
}: {
  searchPlaceHolder: string | undefined;
}) {
  const { categories, category, searchText } = useSearch();
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryName: LocaleStorageCategory = getLocalStorage
    ? JSON.parse(getLocalStorage)
    : null;

  const { country } = useSelector((state: RootState) => ({
    country: state.user.geolocation.country_name
  }));

  return (
    <div style={{ position: 'fixed', zIndex: 9, backgroundColor: 'red !important' }}>
      <StickyNavbar hasLogo>
        <div style={{ position: 'relative' }}>
          {/* <QMainSearch
            searchPlaceHolder={`Search ${searchPlaceHolder} in ${country} ( Keywords)`}
            hasOptions
            categories={categories}
          /> */}
        </div>
      </StickyNavbar>
      <div
        style={{
          width: '100vw',
          // position: 'fixed',
          zIndex: 2,
          // backgroundColor: '#FFFFFF',
          // borderTop: '1px solid rgba(0,0,0,0.16)',
          borderBottom: '1px solid rgba(0,0,0,0.16)'
        }}
      >
        <SearchNavBar
          categories={categories}
          title={category?.name}
          searchText={searchText}
          localCategory={categoryName?.topCategoryName}
          categoryIcon={categoryName?.topCategoryIcon}
        />
      </div>
    </div>
  );
}

export default SearchLayoutHeader;
