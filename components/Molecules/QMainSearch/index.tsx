import React, { useCallback, useEffect } from 'react';
import QCustomDropDownContainer from '../QCustomDropDownContainer';
import QSearchBar from '../../Atoms/QSearchBar';
import QCustomDropDownItemes from '../QCustomDropDownItems';
import { useSearch } from 'container/search';

interface mainSearchProps {
  categories: categoryObject[];
  searchPlaceHolder?: string;
  dropDownProps?: React.ReactElement;
  hasOptions?: boolean;
  searchBarWidth?: number | string;
  width?: number;
  landingPage?: boolean;
}

/**
 * Button
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param PaperHeight - optional property that modifies the height of material ui Paper component"/".
 * @param PaperWidth - optional property that modifies the width of a material ui Paper component "/".
 * @param radius - optional property that modifies the radius of an input component "/".
 * @param onClick - optional property that adds onClick function to components "/".
 * @param buttonTag - optional property that adds and customizes tags on buttons "/".
 * @param placeHolderText - optional property that can add & customize placeholder texts "/".
 *
 */

const QMainSearch = ({
  dropDownProps,
  searchPlaceHolder,
  hasOptions,
  categories,
  searchBarWidth,
  width,
  landingPage
}: mainSearchProps) => {
  const {
    categoryClicked,
    searchResults,
    openSearchList,
    TopCategories,
    handleClickAway,
    handleSearchMenu,
    handleSearchOnChange,
    handleInputOnClick,
    searchResultClicked,
    searchText,
    setSearchText,
    loading,
    getSearchSubCategory,
    handleSearchAText
  } = useSearch();

  useEffect(() => {
    if (landingPage) {
      localStorage.removeItem('search');
      localStorage.removeItem('category');
    }
  }, [landingPage]);

  const handleCategoryOnclick = useCallback(
    (id: string) => {
      categoryClicked(id);
      setSearchText('');
      handleClickAway();
      return;
    },
    [categoryClicked]
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
        //how to get the sub category
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
  }, [TopCategories, openSearchList, searchResults, categories, searchText]);

  return (
    <QSearchBar
      PaperWidth={searchBarWidth}
      placeHolderText={searchPlaceHolder}
      dropDown={hasOptions}
      handleClickAway={handleClickAway}
      onInputChange={handleSearchOnChange}
      onInputClickHandler={handleInputOnClick}
      onSearchButtonClick={() => handleSearchMenu()}
      value={searchText}
      onSearchClearButtonClick={() => {
        setSearchText(''), handleClickAway();
      }}
      handleEnterClicked={handleEnterClicked}
      noBorder={TopCategories || openSearchList}
    >
      <>
        {TopCategories ? (
          <QCustomDropDownContainer
            width={width}
            categoryProps={
              dropDownProps ?? (
                <QCustomDropDownItemes
                  loading={loading}
                  categories={categories}
                  handleCategoryOnclick={handleCategoryOnclick}
                  handleSearchClick={handleSearchClick}
                />
              )
            }
          />
        ) : openSearchList ? (
          <QCustomDropDownContainer
            width={width}
            searchDropDownItemProps={
              dropDownProps ?? (
                <QCustomDropDownItemes
                  searchResults={searchResults?.tags}
                  exactSearch={searchResults?.exactMatch}
                  loading={loading}
                  dropDownArray={searchResults}
                  handleSearchClick={handleSearchClick}
                  categories={categories}
                  handleCategoryOnclick={handleCategoryOnclick}
                  searchText={searchText}
                />
              )
            }
          />
        ) : null}
      </>
    </QSearchBar>
  );
};

export default QMainSearch;
