import QText from 'components/Atoms/text';
import React, { useMemo } from 'react';
import { RenderedItem } from '../QCustomDropDownItems';
import explore from '../../../assets/icons/search-gray.svg';
import { Branding } from 'utilities/branding';
import { useSearch } from 'container/search';

interface SearchDropDownProps {
  handleSearchClick: (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string,
    level?: string
  ) => void;
  searchResults?: searchResultsProps[];
  exactSearch?: searchResultsProps[];
}

function SearchDropDown({
  handleSearchClick,
  searchResults,
  exactSearch
}: SearchDropDownProps) {
  const results = useMemo(
    () =>
      exactSearch?.length
        ? searchResults?.filter(result => result._id !== exactSearch[0]._id)
        : searchResults,
    [searchResults, exactSearch]
  );

  return (
    <div>
      {/* <ExactSearch {...{ exactSearch, handleSearchClick }} /> */}

      {results?.map((searchItem: searchResultsProps, index: number) => {
        return (
          <>
            {index === 0 ? (
              <RenderedItem
                firstChoice
                icon={searchItem?.tagLink?.image}
                key={searchItem?._id}
                arrayLength={results?.length}
                index={index}
                searchItem={searchItem}
                handleClick={() =>
                  handleSearchClick(
                    searchItem?.displayName ?? searchItem?.name,
                    searchItem?._id,
                    searchItem?.tagLink?.name,
                    searchItem?.taglinkType,
                    searchItem?.tagLinkId,
                    ''
                  )
                }
              />
            ) : (
              <RenderedItem
                icon={searchItem?.tagLink?.image}
                key={searchItem?._id}
                arrayLength={results?.length}
                index={index}
                searchItem={searchItem}
                handleClick={() =>
                  handleSearchClick(
                    searchItem?.displayName ?? searchItem?.name,
                    searchItem?._id,
                    searchItem?.tagLink?.name,
                    searchItem?.taglinkType,
                    searchItem?.tagLinkId,
                    ''
                  )
                }
              />
            )}
          </>
        );
      })}
    </div>
  );
}

interface ExactSearchProps {
  handleSearchClick: (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string,
    level?: string
  ) => void;

  exactSearch?: searchResultsProps[];
}

const ExactSearch = ({ exactSearch, handleSearchClick }: ExactSearchProps) => {
  const { handleSearchAText, searchText, handleClickAway } = useSearch();

  return (
    <>
      {exactSearch?.length ? (
        <RenderedItem
          exact
          icon={exactSearch[0].tagLink?.image}
          key={exactSearch[0]._id}
          arrayLength={exactSearch?.length}
          index={0}
          searchItem={exactSearch[0]}
          handleClick={() =>
            handleSearchClick(
              exactSearch[0].displayName ?? exactSearch[0].name,
              exactSearch[0]._id,
              exactSearch[0].tagLink?.name,
              exactSearch[0].taglinkType,
              exactSearch[0].tagLinkId,
              ''
            )
          }
        />
      ) : (
        <div
          style={{
            cursor: 'pointer',
            height: 40,
            display: 'flex',
            backgroundColor: Branding.Colors.black[6],
            padding: `0 10px `,
            flexDirection: 'row'
          }}
          onClick={() => {
            handleSearchAText(searchText), handleClickAway();
          }}
        >
          <QText
            label={`" ${searchText} "`}
            labelStyle={{
              textTransform: 'capitalize',
              fontSize: 16,
              fontFamily: 'Outfit',
              color: '#4F4F4F',
              textAlign: 'left',
              letterSpacing: '0.15px',
              maxWidth: 250,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
            iconLeft={explore}
            iconLeftStyle={{ margin: 10, marginRight: 20 }}
          />
          <QText
            label={'- Qloud Search'}
            labelStyle={{
              textTransform: 'capitalize',
              fontSize: 14,
              fontWeight: 300,
              fontFamily: 'Outfit',
              color: '#858585',
              fontVariant: 'normal',
              fontStyle: 'normal',
              letterSpacing: '0.15px'
            }}
          />
        </div>
      )}
    </>
  );
};

export default SearchDropDown;
