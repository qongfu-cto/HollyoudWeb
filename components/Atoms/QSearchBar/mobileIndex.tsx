import React, { Dispatch, useEffect, useMemo, useState } from 'react';
import { useMobileMainSearchStylesEN } from './stylesEN';
import Link from 'next/link';
import Img from '../../Atoms/img';
import QloudCityLogo from 'assets/images/QloudCityLogo_Compact.svg';
import QIcon from '../../Atoms/icon';
import exploreButton from '../../../assets/images/exploreButton.svg';
import { Branding } from 'utilities/branding';
import QText from 'components/Atoms/text';
import dropdown from 'assets/icons/dropdown.svg';
import search from 'assets/icons/search-gray.svg';
import explore from '../../../assets/icons/search-gray.svg';
import GREYFILTER from 'assets/icons/filter-grey.svg';
import BLUEFILTER from 'assets/icons/filter-empty.svg';
import MobileSearchBar from 'components/Molecules/mobileSearchBar';
import { fullPageWidth } from 'utilities/utils';

import { svgColorHandler, svgHandler } from 'utilities/svgHandler';
import { isNull, isUndefined, truncate } from 'lodash';
import { useSearch } from '../../../container/search';

interface mainSearchProps {
  fullWidth: boolean;
  placeHolderText?: string;
  dropDown?: boolean;
  showBar?: {
    category: boolean;
    search: boolean;
  };
  setShowBar: Dispatch<{
    category: boolean;
    search: boolean;
  }>;
  handleSwitchMenuHandler: VoidFunction;
  mobileSearch?: boolean;
  categoryName?: LocaleStorageCategory;
  handleEnterClicked: VoidFunction;
  children?: React.ReactElement | React.ReactElement[];
  openSearchList: boolean;
  TopCategories: boolean;
  onInputClickHandler: VoidFunction;
}

/**
 * A component that allows the user to insert texts and search.
 * @param exploreButtonStyling
 * @param fullWidth
 * @param openSearchList
 * @param children
 * @param PaperHeight
 * @param PaperWidth
 * @param radius
 * @param buttonTag
 * @param placeHolderText
 * @param onSearchButtonClick
 * @param handleClickAway
 * @param onInputChange
 * @param onInputClickHandler
 * @param value
 */
const QMobileSearchBar = ({
  fullWidth,
  handleSwitchMenuHandler,
  mobileSearch,
  placeHolderText,
  showBar,
  dropDown,
  children,
  setShowBar,
  categoryName,
  handleEnterClicked,
  openSearchList,
  TopCategories,
  onInputClickHandler
}: mainSearchProps) => {
  const {
    handleClickAway,
    handleSearchMenu,
    category,
    onDrawerClicked,
    marketplace
  } = useSearch();
  const categoryLocal =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryData: LocaleStorageCategory = categoryLocal
    ? JSON.parse(categoryLocal)
    : null;

  const width = fullPageWidth();
  const [activeFilter, setActiveFilter] = useState(false);
  const stylesEN = useMobileMainSearchStylesEN({
    active: TopCategories || openSearchList
  });
  const onSearchClick = () => {
    setShowBar({ category: false, search: true });
    handleClickAway();
  };
  const onCancelClick = () => {
    setShowBar({ category: true, search: false });
    handleClickAway();
  };

  const displayTitle = categoryName?.subCategory?.length
    ? categoryName?.subCategory
    : category?.name ?? categoryName?.topCategoryName;

  useMemo(() => {
    console.log('Hi localStorage');
    console.log(isNull(localStorage.getItem('locationFilter')));
    console.log(isNull(localStorage.getItem('openFilter')));
    console.log(isUndefined(JSON.parse(localStorage.getItem('openFilter')!)));
    if (!isNull(localStorage.getItem('locationFilter'))) {
      setActiveFilter(true);
    }
    if (!isNull(localStorage.getItem('openFilter'))) {
      if (!isUndefined(JSON.parse(localStorage.getItem('openFilter')!))) {
        setActiveFilter(true);
      }
    }
  }, [activeFilter]);

  const getFilter = () => {
    const filter = GREYFILTER;
    if (!isNull(localStorage.getItem('locationFilter'))) {
      setActiveFilter(true);
    }
    if (!isNull(localStorage.getItem('openFilter'))) {
      if (!isUndefined(JSON.parse(localStorage.getItem('openFilter')!))) {
        setActiveFilter(true);
      }
    }
  };

  const RenderCategorySelectedSection = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',

          width: '100%'
        }}
      >
        <Link href="/">
          <a
          //className={stylesEN.mobileBrandContainer}
          >
            <Img
              alt="logo"
              imgProps={{ width: 60, height: 60, src: QloudCityLogo }}
            />
          </a>
        </Link>

        <div className={stylesEN.inputWrapper}>
          <div
            style={{
              height: 40,
              width: '80%',
              display: 'flex',
              alignItems: 'center',
              borderBottom: `1px solid ${Branding.Colors.primary.normal}`
            }}
            onClick={
              TopCategories || openSearchList
                ? handleClickAway
                : !mobileSearch
                ? onInputClickHandler
                : () => null
            }
          >
            <div className={stylesEN.categoryInput}>
              {TopCategories ? (
                <QText
                  label={'Select'}
                  labelStyle={{
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: 'Roboto',
                    width: '100%',
                    textAlign: 'center'
                  }}
                  labelColor={Branding.Colors.primary.normal}
                />
              ) : (
                <div className={stylesEN.categoryInput}>
                  <QIcon
                    iconStyle={stylesEN.iconContainer}
                    buttonProps={{
                      style: { borderRadius: 12 },
                      disableRipple: true
                    }}
                    iconProps={{
                      width: 48,
                      height: 40,
                      src: categoryData?.topCategoryIcon
                        ? svgColorHandler(categoryData?.topCategoryIcon)
                        : explore
                    }}
                  />
                  <QText
                    label={
                      truncate(displayTitle, { length: 15 }).length
                        ? truncate(displayTitle, { length: 14 })
                        : 'Select'
                    }
                    labelStyle={{
                      fontSize: 18,
                      fontWeight: 400,
                      fontFamily: 'Roboto',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      width: '100%'
                    }}
                    labelColor={Branding.Colors.primary.normal}
                  />
                </div>
              )}
              <QIcon
                iconProps={{ width: 25, height: 25, src: dropdown }}
                iconStyle={stylesEN.icon}
              />
            </div>
          </div>
        </div>
        {fullWidth ? (
          <QIcon
            click={() => handleSearchMenu()}
            iconStyle={stylesEN.exploreButtonStyle}
            source={exploreButton}
          />
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <QIcon
              iconProps={{ width: 20, height: 20, src: search }}
              //  iconStyle={stylesEN.rightIcon}
              click={onSearchClick}
            />

            <QIcon
              iconProps={{
                width: 32,
                height: 32,
                src: activeFilter ? BLUEFILTER : GREYFILTER
              }}
              //   iconStyle={stylesEN.rightIcon}
              buttonProps={{
                disabled:
                  marketplace.params?.unfilteredTotal === 0 ? true : false
              }}
              click={onDrawerClicked}
            />
          </div>
        )}
      </div>
    );
  };

  // if (mobileSearch) {
  //   return (
  //     <div style={{ width: '100%' }}>
  //       <RenderSearchLayout />

  //       {children}
  //     </div>
  //   );
  // }

  return (
    <>
      {showBar ? (
        showBar?.search ? (
          <MobileSearchBar
            {...{
              fullWidth,
              placeHolderText,
              showBar,
              handleSwitchMenuHandler,
              onCancelClick,
              mobileSearch,
              handleEnterClicked,
              onInputClickHandler
            }}
          />
        ) : (
          showBar?.category && <RenderCategorySelectedSection />
        )
      ) : (
        <MobileSearchBar
          {...{
            fullWidth: true,
            placeHolderText,
            showBar,
            handleSwitchMenuHandler,
            onCancelClick,
            mobileSearch,
            handleEnterClicked,
            onInputClickHandler
          }}
        />
      )}

      {children}
    </>
  );
};

export default QMobileSearchBar;
