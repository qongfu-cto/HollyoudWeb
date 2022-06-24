import { useSearch } from 'container/search';
import searching from '../../../assets/icons/searching.svg';
import { api } from 'services/userAPI';
import { useMobileDropDownStyling } from './stylesEN';
import QText from '../../Atoms/text';
import QIcon from 'components/Atoms/icon';
import explore from '../../../assets/icons/search-gray.svg';
import { Branding } from 'utilities/branding';

export const SearchDropDown = ({
  item,
  handleSearchClick,
  firstOption
}: {
  item: searchResultsProps;
  handleSearchClick: any;
  firstOption?: boolean;
}) => {
  const stylesEN = useMobileDropDownStyling();

  return (
    <div
      key={item?._id}
      className={stylesEN.dropDownRow}
      style={{
        backgroundColor: firstOption ? Branding.Colors.black[6] : 'transparent'
      }}
      onClick={() =>
        handleSearchClick(
          item?.displayName ?? item?.name,
          item?._id,
          item?.tagLink?.name,
          item?.taglinkType,
          item?.tagLinkId,
          ''
        )
      }
    >
      <div className={stylesEN.textContainerStyling}>
        {item?.tagLink?.image ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <img
              src={`${api}/profile/uploads/${item?.tagLink?.image}`}
              // alt={searchItem?.name}
              width={40}
              height={40}
              style={{
                margin: 5,
                marginRight: 15
              }}
            />
            <div
              style={{ display: 'flex', flexDirection: 'column', width: '80%' }}
            >
              <QText
                label={item?.name}
                labelStyle={{
                  textTransform: 'capitalize'
                }}
                textProps={{
                  classes: { root: stylesEN.searchItemLabelStyling }
                }}
              />
              {item?.tagLink?.location && (
                <QText
                  label={item?.tagLink?.location}
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
        ) : (
          <QText
            label={item?.name}
            textProps={{ classes: { root: stylesEN.searchItemLabelStyling } }}
            iconLeft={searching}
          />
        )}
      </div>

      {/* <QIcon iconStyle={stylesEN.crossIcon} source={cross} /> */}
    </div>
  );
};

interface ExactSearchProps {
  handleSearchClick: (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string,
    level?: string
  ) => void;

  exactSearch: searchResultsProps[];
  searchText?: string;
}

export const ExactSearch = ({
  exactSearch,
  handleSearchClick
}: ExactSearchProps) => {
  const { handleSearchAText, searchText, handleClickAway } = useSearch();
  return (
    <>
      {exactSearch.length ? (
        <ExactSearchLayout
          searchText={searchText}
          onClick={() =>
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
        <ExactSearchLayout
          searchText={searchText}
          onClick={() => {
            handleSearchAText(searchText), handleClickAway();
          }}
        />
      )}
    </>
  );
};

const ExactSearchLayout = ({
  onClick,
  searchText
}: {
  onClick: VoidFunction;
  searchText: string;
}) => {
  return (
    <div
      style={{
        height: 40,
        display: 'flex',
        backgroundColor: Branding.Colors.black[6],
        flexDirection: 'row'
      }}
      onClick={onClick}
    >
      <QText
        label={searchText}
        labelStyle={{
          textTransform: 'capitalize',
          fontSize: 16,
          fontFamily: 'Outfit',
          color: '#4F4F4F',
          textAlign: 'left',
          letterSpacing: '0.15px',
          maxWidth: 200,
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
          fontSize: 16,
          fontFamily: 'Outfit',
          color: '#4F4F4F',
          textAlign: 'left',
          letterSpacing: '0.15px'
        }}
      />
    </div>
  );
};
