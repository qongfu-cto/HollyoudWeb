import QIcon from 'components/Atoms/icon';
import QText from 'components/Atoms/text';
import React from 'react';
import { Branding } from 'utilities/branding';
import dropdown from 'assets/icons/dropdown.svg';
import search from 'assets/icons/search-gray.svg';
import User from 'assets/icons/user.svg';
import exploreButton from '../../../assets/images/exploreButton.svg';
import { categorySelectedSectionStylesEN } from './style';
import { fullPageWidth } from 'utilities/utils';

interface CategorySelectedSectionProps {
  openSearchList: boolean;
  TopCategories: boolean;
  subCategories: categoryObject;
  category: categoryObject;
  onSearchButtonClick?: () => void;
  onSearchClick: VoidFunction;
  handleClickAway: () => void;
  onInputClickHandler: () => void;
  fullWidth: boolean;
}

const CategorySelectedSection = ({
  TopCategories,
  subCategories,
  category,
  onSearchClick,
  onSearchButtonClick,
  openSearchList,
  handleClickAway,
  onInputClickHandler,
  fullWidth
}: CategorySelectedSectionProps) => {
  const stylesEN = categorySelectedSectionStylesEN({
    active: TopCategories || openSearchList
  });

  const width = fullPageWidth();
  return (
    <div className={stylesEN.inputWrapper}>
      <div
        style={{
          height: 40,
          width: width ? width - 200 : '100%',
          display: 'flex',
          alignItems: 'center',
          borderBottom: `1px solid ${Branding.Colors.primary.normal}`
        }}
        onClick={
          TopCategories || openSearchList
            ? handleClickAway
            : onInputClickHandler
        }
      >
        <div className={stylesEN.categoryInput}>
          {TopCategories ? (
            <QText
              iconRight={dropdown}
              iconRightStyle={{
                transform:
                  TopCategories || openSearchList
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)'
              }}
              label={'Select'}
              labelStyle={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: 'Roboto',

                textAlign: 'center',
                width: '100%'
              }}
              labelColor={Branding.Colors.primary.normal}
            />
          ) : (
            <QText
              iconLeft={User}
              iconRight={dropdown}
              iconRightStyle={{
                transform:
                  TopCategories || openSearchList
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)'
              }}
              label={subCategories?.name ?? category?.name ?? 'Select'}
              labelStyle={{
                fontSize: 18,
                fontWeight: 400,
                fontFamily: 'Roboto',
                textAlign: 'center',
                border: 0,
                height: 32,
                width: '100%'
                //
              }}
              labelColor={Branding.Colors.primary.normal}
            />
          )}
        </div>
      </div>
      {fullWidth ? (
        <QIcon
          click={onSearchButtonClick}
          iconStyle={stylesEN.exploreButtonStyle}
          source={exploreButton}
        />
      ) : (
        <div style={{ display: 'flex' }}>
          <QIcon
            iconProps={{ width: 30, height: 30, src: search }}
            iconStyle={stylesEN.rightIcon}
            click={onSearchClick}
          />
          {/* <QIcon
            iconProps={{ width: 30, height: 30, src: filter }}
            iconStyle={stylesEN.rightIcon}
          /> */}
        </div>
      )}
    </div>
  );
};

export default CategorySelectedSection;
