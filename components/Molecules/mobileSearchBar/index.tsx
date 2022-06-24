import { InputBase } from '@mui/material';
import QIcon from 'components/Atoms/icon';
import TextButton from 'components/Atoms/textButton';
import React, { Dispatch, KeyboardEvent } from 'react';
import { Branding } from 'utilities/branding';
import { useMobileSearchBarStylesEN } from './stylesEN';
import cross from '../../../assets/icons/black-cross.svg';
import { useRouter } from 'next/router';
import { fullPageWidth } from 'utilities/utils';
import { useSearch } from 'container/search';
import filter from 'assets/icons/filter-grey.svg';
import search from 'assets/icons/cancel-search.svg';
import Img from '../../Atoms/img';
import QloudCityLogo from 'assets/images/QloudCityLogo_Compact.svg';

interface MobileSearchBarProps {
  fullWidth: boolean;
  placeHolderText?: string;
  showBar?: {
    category: boolean;
    search: boolean;
  };
  handleSwitchMenuHandler: VoidFunction;
  onCancelClick: VoidFunction;
  mobileSearch?: boolean;
  handleEnterClicked: VoidFunction;
  onInputClickHandler: VoidFunction;
}

const MobileSearchBar = ({
  fullWidth,
  placeHolderText,
  showBar,
  handleSwitchMenuHandler,
  onCancelClick,
  mobileSearch,
  handleEnterClicked,
  onInputClickHandler
}: MobileSearchBarProps) => {
  const { push } = useRouter();
  const width = fullPageWidth();

  const {
    openSearchList,
    handleMobileSearchOnChange,
    // handleInputOnClick,
    onDrawerClicked,
    searchText,
    setSearchText,
    marketplace
  } = useSearch();

  console.log('marketplace ', marketplace);
  const onTextChange = (e: any) => {
    const value = e.target.value;
    const trimValue = value.trim();

    if (!trimValue.length) {
      setSearchText('');
      return;
    }

    handleMobileSearchOnChange(e);
  };

  const stylesEN = useMobileSearchBarStylesEN({ active: openSearchList });
  return (
    <div className={stylesEN.inputWrapper}>
      <div
        style={{
          borderRadius: 28,
          height: 40,
          width: fullWidth ? (width ? width - 50 : '100%') : '80%',
          display: 'flex',
          alignItems: 'center',

          border: `1px solid ${Branding.Colors.black[16]}`
        }}
      >
        <>
          {!fullWidth || showBar ? (
            <Img
              container={{
                marginLeft: 8,
                display: 'flex',
                alignItems: 'center'
              }}
              alt="logo"
              imgProps={{ width: 40, height: 40, src: QloudCityLogo }}
            />
          ) : null}
          <div className={stylesEN.input}>
            <InputBase
              className={stylesEN.placeHolderStyle}
              placeholder={placeHolderText ?? ' Search Places in Bahrain'}
              onClick={
                showBar?.search ? handleSwitchMenuHandler : onInputClickHandler
              } //setOpenHotspots(true)}
              onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter') {
                  handleEnterClicked();
                }
              }}
              onChange={onTextChange}
              value={searchText}
            />
          </div>
          {!fullWidth &&
            (searchText?.length !== 0 ? (
              <QIcon
                iconStyle={stylesEN.exploreButtonStyle}
                source={cross}
                click={() => setSearchText('')}
              />
            ) : null)}
        </>
      </div>
      {fullWidth ? (
        <div />
      ) : mobileSearch ? (
        <div />
      ) : (
        <div style={{ display: 'flex' }}>
          <QIcon
            iconProps={{ width: 32, height: 32, src: search }}
            buttonProps={{ size: 'small' }}
            //  iconStyle={stylesEN.rightIcon}
            click={mobileSearch ? () => push('/') : onCancelClick}
          />
          <QIcon
            iconProps={{ width: 32, height: 32, src: filter }}
            buttonProps={{
              size: 'small',
              disabled: marketplace.params?.unfilteredTotal === 0 ? true : false
            }}
            //   iconStyle={stylesEN.rightIcon}
            click={onDrawerClicked}
          />
        </div>
      )}
    </div>
  );
};

export default MobileSearchBar;
