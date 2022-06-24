import React from 'react';
import { useDropDownStyling } from './stylesEN';
import explore from '../../../assets/icons/search-gray.svg';
import QText from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';
import { api } from 'services/userAPI';
import Loading from '../loading';
import SearchDropDown from '../searchDropDown';
import { svgHandler, svgColorHandler } from 'utilities/svgHandler';

interface QSearchDropDownItemsProps {
  dropDownArray?: {
    length: number;
    lengthExactMatch: number;
    exactMatch: searchResultsProps[];
    tags: searchResultsProps[];
  };
  handleCategoryOnclick: (id: string) => void;
  handleSearchClick: (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string,
    level?: string
  ) => void;
  categories?: categoryObject[];
  loading: { load: boolean; id: string };
  searchResults?: searchResultsProps[];
  exactSearch?: searchResultsProps[];
  searchText?: string;
}

const QCustomDropDownItemes = ({
  dropDownArray,
  categories,
  handleCategoryOnclick,
  handleSearchClick,
  loading,
  searchResults,
  searchText,
  exactSearch
}: QSearchDropDownItemsProps) => {
  return (
    <div style={{ width: '100%' }}>
      {loading.load && loading.id ? (
        <Loading />
      ) : dropDownArray ? (
        <SearchDropDown
          {...{ handleSearchClick, exactSearch, searchResults, searchText }}
        />
      ) : (
        categories?.map((searchItem, index) => (
          <RenderedItem
            key={searchItem._id}
            arrayLength={categories?.length}
            index={index}
            searchItem={searchItem}
            handleClick={() => handleCategoryOnclick(searchItem._id)}
            categoryIcon={svgColorHandler(searchItem.icons[0].iconId.svgData)}
          />
        ))
      )}
    </div>
  );
};

export const RenderedItem = ({
  arrayLength,
  index,
  searchItem,
  handleClick,
  icon,
  exact,
  categoryIcon,
  firstChoice
}: {
  arrayLength: number;
  index: number;
  searchItem: {
    name: string;
    taglinkType?: string;
    tagLink?: {
      location: string;
    };
  };
  handleClick: VoidFunction;
  icon?: string;
  exact?: boolean;
  categoryIcon?: string;
  firstChoice?: boolean;
}) => {
  const stylesEN = useDropDownStyling({ exact: exact });

  return (
    <div
      style={{
        cursor: 'pointer',
        height: 50,
        display: 'flex',
        backgroundColor:
          exact || firstChoice
            ? Branding.Colors.black[6]
            : Branding.Colors.white,
        padding: `0 10px `
      }}
      onClick={handleClick}
    >
      {icon ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <img
            src={`${api}/profile/uploads/${icon}`}
            // alt={searchItem?.name}
            width={40}
            height={40}
            style={{
              margin: 5,
              marginRight: 15
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <QText
              label={searchItem?.name}
              labelStyle={{
                textTransform: 'capitalize'
              }}
              textProps={{ classes: { root: stylesEN.searchItemLabelStyling } }}
            />
            {searchItem?.tagLink?.location && (
              <QText
                label={searchItem?.tagLink?.location}
                labelStyle={{
                  textTransform: 'none',
                  fontSize: 12
                }}
                textProps={{
                  classes: { root: stylesEN.searchItemDescriptionStyling }
                }}
              />
            )}
          </div>
        </div>
      ) : categoryIcon ? (
        <QText
          label={exact ? `" ${searchItem?.name} "` : searchItem?.name}
          labelStyle={{
            textTransform: 'capitalize'
          }}
          textProps={{ classes: { root: stylesEN.searchItemLabelStyling } }}
          iconImageLeft={
            <img src={categoryIcon ?? explore} width={25} height={25} />
          }
          iconLeftStyle={{ margin: 10, marginRight: 20 }}
        />
      ) : (
        <QText
          label={exact ? `" ${searchItem?.name} "` : searchItem?.name}
          labelStyle={{
            textTransform: 'capitalize'
          }}
          textProps={{ classes: { root: stylesEN.searchItemLabelStyling } }}
          iconLeft={explore}
          iconLeftStyle={{ margin: 10, marginRight: 20 }}
        />
      )}
      &nbsp;&nbsp;
      {exact && (
        <QText
          label={'- Qloud Search'}
          labelStyle={{
            textTransform: 'none'
          }}
          textProps={{
            classes: { root: stylesEN.searchItemDescriptionStyling }
          }}
        />
      )}
    </div>
  );
};

export default QCustomDropDownItemes;
