import React, { useMemo } from 'react';
import { useMobileDropDownStyling } from './stylesEN';
import QText from '../../Atoms/text';
import QIcon from 'components/Atoms/icon';
import User from 'assets/icons/user.svg';
import searching from '../../../assets/icons/searching.svg';
import Loading from '../loading';
import { ExactSearch, SearchDropDown } from '../searchDropDown/mobileIndex';
import { api } from 'services/userAPI';
import { useSearch } from 'container/search';
import { svgColorHandler } from 'utilities/svgHandler';

const notFoundRowStyle = {
  fontSize: 16,
  paddingLeft: 40,
  fontWeight: 500,
  fontFamily: 'Outfit',
  color: '#4F4F4F',
  textAlign: 'left',
  letterSpacing: '0.15px'
};

interface QSearchDropDownItemsProps {
  handleCategoryOnclick?: (id: string) => void;
  handleSearchClick: (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string,
    parentId?: string
  ) => void;
  categories?: categoryObject[];
}

/**
 * Mobile custom Dropdown items component
 * @param searchResults
 * @param categories
 * @param onCategoryClick
 * @param onSearchClick
 * @param clean
 * @param searchText
 */
const QMobileCustomDropDownItems = ({
  categories,
  handleCategoryOnclick,
  handleSearchClick
}: QSearchDropDownItemsProps) => {
  const stylesEN = useMobileDropDownStyling();

  //const array = searchResults ? searchResults.tags : categories;

  const { searchResults, searchText, loading } = useSearch();

  const exactSearch = searchResults?.exactMatch;
  const renderCategoryRow = (item: categoryObject) => {
    return (
      <div
        key={item?._id}
        className={stylesEN.categoryRow}
        onClick={
          handleCategoryOnclick
            ? () => handleCategoryOnclick(item?._id)
            : () => {}
        }
      >
        <QText
          label={item?.name}
          textProps={{ classes: { root: stylesEN.searchItemLabelStyling } }}
          iconLeftStyle={{
            marginLeft: 15
          }}
          iconImageLeft={
            <img
              src={svgColorHandler(item.icons[0].iconId.svgData)}
              alt={item.name}
              width={20}
              height={20}
            />
          }
        />
      </div>
    );
  };

  const results = useMemo(
    () =>
      exactSearch?.length
        ? searchResults?.tags?.filter(
            result => result._id !== exactSearch[0]._id
          )
        : searchResults?.tags,
    [searchResults, exactSearch]
  );
  return (
    <div style={{ width: '100%' }}>
      {!searchText?.length || searchText?.length < 3 ? (
        categories?.map((searchItem, index) => renderCategoryRow(searchItem))
      ) : loading?.load && loading?.id ? (
        <Loading />
      ) : (
        <>
          {/* {exactSearch && (
            <ExactSearch
              exactSearch={exactSearch}
              handleSearchClick={handleSearchClick}
            />
          )} */}
          {results?.map((searchItem: any, index: number) => (
            <>
              {index === 0 ? (
                <SearchDropDown
                  item={searchItem}
                  handleSearchClick={handleSearchClick}
                  firstOption
                />
              ) : (
                <SearchDropDown
                  key={index}
                  item={searchItem}
                  handleSearchClick={handleSearchClick}
                />
              )}
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default QMobileCustomDropDownItems;
