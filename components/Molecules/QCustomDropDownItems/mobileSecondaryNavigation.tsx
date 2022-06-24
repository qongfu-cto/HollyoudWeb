import React, { Dispatch, useEffect, useMemo, useRef, useState } from 'react';
import { useQMobileSecondaryNavigationStyling } from './stylesEN';
import QText from '../../Atoms/text';
import { Branding } from 'utilities/branding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import {
  getMarketPlace,
  getMarketPlaceProperties
} from 'redux/Action/app/appActions';
import { fullPageWidth } from 'utilities/utils';
import { useSearch } from 'container/search';
import { GetSort } from 'utilities/hook/useGetSort';
import Img from 'components/Atoms/img';
import check from 'assets/icons/green-checkmark.svg';
import { isNull, isUndefined } from 'lodash';

interface QMobileSecondaryNavigationProps {
  onCategoryClick: (id: string) => void;
  categories: categoryObject[];
  categoryName: LocaleStorageCategory;
  subCategoryId: string;
  setSubCategoryId: Dispatch<string>;
}

/**
 *
 * @param category
 * @param categories
 * @param onCategoryClick
 * @param subCategories
 * @param subCategoryIsClicked
 */
const QMobileSecondaryNavigation = ({
  categories,
  onCategoryClick,
  categoryName,
  subCategoryId,
  setSubCategoryId
}: QMobileSecondaryNavigationProps) => {
  const width = fullPageWidth();
  const styles = useQMobileSecondaryNavigationStyling({ width });
  const dispatch = useDispatch();
  //const { sort } = GetSort();
  const { subCategories, sort } = useSelector((state: RootState) => ({
    subCategories: state.app.subCategories,
    sort: state.app.sort.value
  }));

  const {
    subCategoryIsClicked,
    subCategoryIsDeleted,
    handleClickAway,
    category
  } = useSearch();

  const [activeId, setActiveId] = useState(() => category?._id);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (id: string, itsATab: boolean) => {
    setActiveId(id);
    subCategoryIsDeleted();
    setSubCategoryId('');
    onCategoryClick(id);
    !itsATab && handleClickAway();
  };

  const handleSubCategoryClick = (subCategory: categoryObject) => {
    subCategoryIsClicked(subCategory);
    setSubCategoryId(subCategory._id);
    handleClickAway();

    if (subCategory.types[0] === 'places') {
      let location: any = [];
      let open: any = { openNow: false };
      if (!isNull(localStorage.getItem('locationFilter'))) {
        location = JSON.parse(localStorage.getItem('locationFilter')!);
      }
      if (!isNull(localStorage.getItem('openFilter'))) {
        if (!isUndefined(JSON.parse(localStorage.getItem('openFilter')!))) {
          open = JSON.parse(localStorage.getItem('openFilter')!);
        }
      }
      dispatch(getMarketPlace(null, sort, subCategory._id, location, open));
    } else {
      dispatch(getMarketPlaceProperties(null, sort, subCategory._id));
    }
  };

  useMemo(() => {
    if (!activeId) {
      if (categoryName) {
        setActiveId(categoryName.id);
        return;
      }

      setActiveId(categories[0]?._id);
    }
  }, [activeId, categories, categoryName]);

  const renderSingleTab = (item: categoryObject, activeId?: string) => {
    return (
      <div
        style={{
          backgroundColor:
            activeId === item?._id
              ? Branding.Colors.blue.variant_4
              : Branding.Colors.black['36']
        }}
        className={styles.tabWrap}
        onClick={() => handleCategoryClick(item?._id, true)}
      >
        <QText
          label={item?.name}
          labelStyle={{
            font: 'normal normal medium 16px/21px Roboto',
            whiteSpace: 'nowrap',
            textAlign: 'center'
          }}
          labelColor={Branding.Colors.white}
        />
      </div>
    );
  };

  const renderCategoryDropdown = (category: categoryObject) => {
    return (
      <div className={styles.category}>
        <div
          className={styles.subCategoryContainer}
          onClick={() => handleSubCategoryClick(category)}
        >
          <QText
            label={`${category?.name}`} // (All)`}
            labelStyle={{
              font: 'normal normal medium 16px/21px Roboto',
              fontWeight: 300,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              padding: '14px 20px'
            }}
            labelColor={Branding.Colors.black['100']}
          />
          {subCategoryId === category._id && <Img source={check} />}
        </div>
        <div className={styles.subWrapper}>
          {category?.children.map((subCategory: categoryObject) => {
            return (
              <div
                onClick={() => handleSubCategoryClick(subCategory)}
                className={styles.subCategory}
                key={subCategory?._id}
              >
                <QText
                  label={subCategory?.name}
                  labelStyle={{
                    font: 'normal normal normal 16px/21px Roboto',
                    whiteSpace: 'nowrap',
                    textAlign: 'center'
                  }}
                  labelColor={Branding.Colors.black['100']}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <div className={styles.headerWrap}>
          {categories?.map(item => {
            return renderSingleTab(item, activeId);
          })}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    const subs = subCategories?.length
      ? subCategories
      : category?.name
      ? subCategories
      : categories[0]?.children;
    const mainCategory =
      category?.name ?? categoryName?.topCategoryName ?? categories[0]?.name;
    return (
      <div className={styles.categoryWrap}>
        {
          <div
            onClick={() => {
              if (!category || !categoryName) {
                return handleCategoryClick(categories[0]._id, false);
              }
              handleCategoryClick(categoryName?.id ?? category?._id, false);
            }}
            style={{ borderBottom: `1px solid ${Branding.Colors.black[16]}` }}
          >
            <QText
              label={`${mainCategory}(All)`} // (All)`}
              labelStyle={{
                // font: 'normal normal medium 18px/21px Roboto',
                font: 'Roboto',
                fontSize: '18px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                padding: '14px 20px 14px 30px',
                margin: '8px 0px'
              }}
              labelColor={Branding.Colors.primary.dark}
            />
          </div>
        }
        {subs
          ?.filter(item => item?.level === 2)
          .map(category => {
            return renderCategoryDropdown(category);
          })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderHeader()}
      {renderContent()}
    </div>
  );
};

export default QMobileSecondaryNavigation;
