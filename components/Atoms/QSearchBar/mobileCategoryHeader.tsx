import React from 'react';
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
import { useMobileMainSearchStylesEN } from './stylesEN';
import { useSearch } from 'container/search';
import { svgColorHandler, svgHandler } from 'utilities/svgHandler';
import { isNull, isUndefined, truncate } from 'lodash';

const RenderCategorySelectedSection = () => {
  const categoryLocal =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryData: LocaleStorageCategory = categoryLocal
    ? JSON.parse(categoryLocal)
    : null;
  const {
    handleClickAway,
    handleSearchMenu,
    onDrawerClicked,
    marketplace,
    TopCategories,
    openSearchList,
    handleInputOnClick
  } = useSearch();

  console.log({ TopCategories });
  const stylesEN = useMobileMainSearchStylesEN({
    active: TopCategories || openSearchList
  });

  //   const displayTitle = categoryName?.subCategory?.length
  //   ? categoryName?.subCategory
  //   : category?.name ?? categoryName?.topCategoryName;
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
          onClick={handleInputOnClick}
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
                    //   truncate(displayTitle, { length: 15 }).length
                    //     ? truncate(displayTitle, { length: 14 })
                    //     :
                    'Select'
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
      {/* {fullWidth ? (
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
            //  click={onSearchClick}
            />

            <QIcon
              iconProps={{
                width: 32,
                height: 32,
              //  src: activeFilter ? BLUEFILTER : GREYFILTER
              }}
              //   iconStyle={stylesEN.rightIcon}
              buttonProps={{
                disabled:
                  marketplace.params?.unfilteredTotal === 0 ? true : false
              }}
              click={onDrawerClicked}
            />
          </div>
        )} */}
    </div>
  );
};

export default RenderCategorySelectedSection;
