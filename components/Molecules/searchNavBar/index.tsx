import { Divider } from '@mui/material';
import QMenu from 'components/Atoms/menu';
import SecondaryNavigation from 'components/Organisms/secondaryNavigation';
import { useSearch } from 'container/search';
import React, { useCallback, useMemo, useState } from 'react';
import { useHandleResize } from 'utilities/hook/useHandleResize';
import { useSearchNavBarStyles } from './stylesEN';
import DayToDay from '../../../assets/icons/search-gray.svg';
import arrow from '../../../assets/icons/dropdown-solid.svg';
import QText from 'components/Atoms/text';
import Img from 'components/Atoms/img';
import { Branding } from 'utilities/branding';
import { svgColorHandler, svgHandler } from 'utilities/svgHandler';
import ButtonHorizontal from '../ButtonsHorizontal';

interface SearchNavBar {
  categories: categoryObject[];
  title?: string;
  searchText: string;
  localCategory: string;
  categoryIcon: string;
}

function SearchNavBar({
  categories,
  title,
  searchText,
  localCategory,
  categoryIcon
}: SearchNavBar) {
  const {
    openFilters,
    categoryClicked,
    category,
    subCategoryIsClicked,
    subCategoryIsDeleted,
    setSearchText,
    setSelectedId,
    marketplace
  } = useSearch();
  const [label, setLabel] = useState(() => title);
  const styles = useSearchNavBarStyles();
  const [width] = useHandleResize();
  const categoriesList = useMemo(
    () => categories?.map(category => category.name),

    [categories]
  );

  const categoryTitle = useMemo(() => localCategory ?? null, [localCategory]);

  const mainTitle = category?.name ?? 'Search City';

  const menuClickHandler = useCallback(
    index => {
      setLabel(categoriesList[index]);
      categories.map((category, i) => {
        if (index === i) {
          categoryClicked(category?._id);
          setSelectedId('');
          setSearchText('');
        }
      });
    },
    [categories, categoriesList, categoryClicked]
  );

  return (
    <section className={styles.navbar}>
      <div
        style={{
          width: width > 1200 ? '20%' : '30%',
          paddingRight: 10,
          display: 'inherit',
          justifyContent: 'end'
        }}
      >
        <div className={styles.dropDown}>
          {/* <Img source={DayToDay} /> */}
          {/* TODO if there is compact type add it here */}
          {!categoryIcon || searchText?.length > 2 ? (
            <Img source={DayToDay} />
          ) : (
            <img src={svgColorHandler(categoryIcon)} width={30} height={30} />
          )}

          <QText
            label={
              searchText?.length > 2
                ? 'Search City'
                : categoryTitle ?? mainTitle
            }
            labelStyle={{
              margin: `0 0px 0 10px`,
              fontWeight: 500,
              width: width > 1200 ? '100%' : '80%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
            labelColor={Branding.Colors.primary.dark}
          />

          <QMenu
            menuList={categoriesList}
            icon={arrow}
            //  iconStyle={styles.icon}
            onMenuClicked={menuClickHandler}
          />
        </div>
      </div>
      <Divider orientation="vertical" sx={{ height: 40 }} />
      <div style={{ width: '55%' }}>
        <SecondaryNavigation
          component={'text'}
          width={width}
          averageNavItemWidth={150}
          subClicked={subCategoryIsClicked}
          subDeleted={subCategoryIsDeleted}
          searchText={
            searchText?.length < 3 ? category?.name || categoryTitle : ''
          }
        />
      </div>
      {/* FIXME Eman filter icon on desktop */}
      {/* <Divider orientation="vertical" sx={{ height: 40 }} /> */}
      <div style={{ width: '25%' }}>
        {/* <ButtonHorizontal
          notification={0}
          onClickFilter={openFilters}
          marketplaceLength={marketplace}
          //onClickMap={map}
        /> */}
      </div>
    </section>
  );
}

export default SearchNavBar;
