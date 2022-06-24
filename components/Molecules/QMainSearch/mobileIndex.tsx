import React, { useCallback, useEffect, useState } from 'react';

import QMobileSearchBar from '../../Atoms/QSearchBar/mobileIndex';
import { useGetCategories } from 'utilities/hook/useGetCategory';
import { useSearch } from 'container/search';
import QMobileCustomDropDownContainer from 'components/Molecules/QCustomDropDownContainer/mobileIndex';
import QMobileCustomDropDownItems from 'components/Molecules/QCustomDropDownItems/mobileIndex';
import QMobileSecondaryNavigation from 'components/Molecules/QCustomDropDownItems/mobileSecondaryNavigation';
import { useMobileMainSearchStylesEN } from './stylesEN';
import { PlacesResult } from 'types/marketPlaceApiTypes';

interface mainSearchProps {
  categories: categoryObject[];
  searchPlaceHolder?: string;
  fullWidth: boolean;
  dropDownProps?: React.ReactElement;
  hasOptions?: boolean;
  mobileSearch?: boolean;
  results: PlacesResult;
  categoryName: LocaleStorageCategory;
  landingPage: boolean;
}

/**
 * Mobile Web search bar component
 * @param dropDownProps
 * @param fullWidth
 * @param searchPlaceHolder
 * @param hasOptions
 * @param categories
 */
const QMobileMainSearch = ({
  dropDownProps,
  fullWidth,
  searchPlaceHolder,
  hasOptions,
  categories,
  mobileSearch,
  categoryName,
  results,
  landingPage
}: mainSearchProps) => {
  const {
    categoryClicked,
    handleMobileSearchMenu,
    searchResults,
    openSearchList,
    TopCategories,
    handleClickAway,
    searchResultClicked,
    searchText,
    setSearchText,
    getSearchSubCategory,
    handleSearchAText,
    handleInputOnClick
  } = useSearch();
  const { categoryClicked: categoryOnClick } = useGetCategories();
  const [showBar, setShowBar] = useState({
    category: mobileSearch ? false : true,
    search: mobileSearch ? true : false
  });
  const [mobileCategory, setMobileCategory] = useState(true);
  const [subCategoryId, setSubCategoryId] = useState('');
  const categoryLocal =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;

  const categoryData: LocaleStorageCategory = categoryLocal
    ? JSON.parse(categoryLocal)
    : null;

  useEffect(() => {
    if (landingPage) {
      localStorage.removeItem('search');
      localStorage.removeItem('category');
    }
  }, [landingPage]);

  const styles = useMobileMainSearchStylesEN();
  useEffect(() => {
    if (mobileSearch) {
      setSearchText('');
    }
    setSubCategoryId(categoryData?.subCategoryId);
  }, []);

  const handleCategoryOnclick = useCallback(
    (id: string) => {
      localStorage?.removeItem('mobileTabSearch');
      categoryClicked(id);
      setSearchText('');
      setShowBar({ category: true, search: false });
      handleClickAway();
      return;
    },
    [setShowBar, handleClickAway, categoryClicked]
  );

  const handleSearchClick = useCallback(
    (
      name: string,
      id: string,
      category: string,
      type: string,
      tagId: string,
      parentId?: string
    ) => {
      if (type === 'category') {
        if (parentId?.length) {
          getSearchSubCategory(parentId, tagId, name);
        } else {
          categoryClicked(tagId);
        }

        setSearchText('');
        handleClickAway();
        return;
      }
      if (type === 'tag') {
        handleSearchAText(name);
        return;
      }
      searchResultClicked(name, id, category, type, tagId);
      if (type === 'place') return;
      handleClickAway();
      return;
    },
    [categories]
  );

  const handleEnterClicked = useCallback(() => {
    if (TopCategories) {
      handleCategoryOnclick(categories[0]?._id);
    }

    if (openSearchList) {
      // if (searchResults?.exactMatch.length) {
      //   const exactSearch = searchResults?.exactMatch;
      //   handleSearchClick(
      //     exactSearch[0].displayName ?? exactSearch[0].name,
      //     exactSearch[0]._id,
      //     exactSearch[0].tagLink?.name,
      //     exactSearch[0].taglinkType,
      //     exactSearch[0].tagLinkId,
      //     ''
      //   );
      //   handleClickAway();
      //   return;
      // }
      // handleSearchAText(searchText);
      handleSearchClick(
        searchResults.tags[0]?.displayName ?? searchResults.tags[0]?.name,
        searchResults.tags[0]?._id,
        searchResults.tags[0]?.tagLink?.name,
        searchResults.tags[0]?.taglinkType,
        searchResults.tags[0]?.tagLinkId,
        ''
      );
      handleClickAway();
    }
  }, [TopCategories, openSearchList, searchResults, categories]);

  useEffect(() => {
    if (!openSearchList && TopCategories) setMobileCategory(true);
    if (openSearchList && !TopCategories) setMobileCategory(false);
  }, [TopCategories, openSearchList]);

  return (
    <QMobileSearchBar
      fullWidth={fullWidth}
      mobileSearch={mobileSearch}
      placeHolderText={searchPlaceHolder}
      dropDown={hasOptions}
      handleSwitchMenuHandler={handleMobileSearchMenu}
      showBar={showBar}
      setShowBar={setShowBar}
      categoryName={categoryName}
      handleEnterClicked={handleEnterClicked}
      openSearchList={openSearchList}
      TopCategories={TopCategories}
      onInputClickHandler={handleInputOnClick}
    >
      <>
        {TopCategories ? (
          <QMobileSecondaryNavigation
            subCategoryId={subCategoryId}
            setSubCategoryId={setSubCategoryId}
            categoryName={categoryName}
            categories={categories}
            onCategoryClick={categoryClicked ?? categoryOnClick}
          />
        ) : openSearchList ? (
          <QMobileCustomDropDownContainer
            fullWidth={fullWidth}
            searchDropDownItemProps={
              dropDownProps ?? (
                <QMobileCustomDropDownItems
                  handleSearchClick={handleSearchClick}
                  categories={categories}
                  handleCategoryOnclick={handleCategoryOnclick}
                />
              )
            }
          />
        ) : null}
        {mobileSearch && mobileCategory ? (
          <QMobileCustomDropDownContainer
            fullWidth={fullWidth}
            categoryProps={
              dropDownProps ?? (
                <QMobileCustomDropDownItems
                  handleSearchClick={() => {}}
                  categories={categories}
                  handleCategoryOnclick={handleCategoryOnclick}
                />
              )
            }
          />
        ) : mobileSearch && openSearchList ? (
          <QMobileCustomDropDownContainer
            fullWidth={fullWidth}
            searchDropDownItemProps={
              dropDownProps ?? (
                <QMobileCustomDropDownItems
                  handleSearchClick={handleSearchClick}
                  categories={categories}
                  handleCategoryOnclick={handleCategoryOnclick}
                />
              )
            }
          />
        ) : null}
      </>
    </QMobileSearchBar>
  );
};

export default QMobileMainSearch;
