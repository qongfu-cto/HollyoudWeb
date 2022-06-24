import React, { KeyboardEvent, useCallback, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { useMainSearchStylesEN } from './stylesEN';
import BahrainFlag from '../../../assets/icons/flag-bahrain.svg';
import QIcons from '../icon';
import exploreButton from '../../../assets/icons/search-gray.svg';
import clear from '../../../assets/icons/search_clear.svg';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Divider } from '@mui/material';
import { Branding } from 'utilities/branding';

interface mainSearchProps {
  exploreButtonStyling?: any;
  children: React.ReactElement;
  PaperHeight?: any;
  PaperWidth?: any;
  radius?: any;
  buttonTag?: string;
  placeHolderText?: string;
  onSearchButtonClick?: () => void;
  handleClickAway: () => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onInputClickHandler: () => void;
  dropDown?: boolean;
  value: string;
  onSearchClearButtonClick: () => void;
  handleEnterClicked: VoidFunction;
  noBorder: boolean;
}

/**
 * QSearchBar
 *
 * A component that allows the user to insert texts and search.
 * @param dropDownProps?: optional ReactJSX element property to add custom drop down lists
 * @param PaperHeight - optional property that modifies the height of material ui Paper component"/".
 * @param PaperWidth - optional property that modifies the width of a material ui Paper component "/".
 * @param radius - optional property that modifies the radius of an input component "/".
 * @param onClick - optional property that adds onClick function to components "/".
 * @param buttonTag - optional property that adds and customizes tags on buttons "/".
 * @param placeHolderText - optional property that can add & customize placeholder texts "/".
 *
 */

const QSearchBar = ({
  exploreButtonStyling,
  children,
  PaperHeight,
  PaperWidth,
  radius,
  onSearchClearButtonClick,
  placeHolderText,
  onSearchButtonClick,
  handleClickAway,
  onInputChange,
  onInputClickHandler,
  value,
  handleEnterClicked,
  noBorder
}: mainSearchProps) => {
  const stylesEN = useMainSearchStylesEN();
  const [label, setLabel] = useState('Places');

  const onTextChange = (e: any) => {
    const value = e.target.value;
    const trimValue = value.trim();
    if (!trimValue.length) {
      onSearchClearButtonClick();
      return;
    }
    onInputChange(e);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <div
          style={{
            borderRadius: noBorder ? `18px 18px 0 0` : 28,
            height: PaperHeight ?? 40,
            width: PaperWidth ?? 440,
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${Branding.Colors.black[16]}`,
            borderBottom: noBorder
              ? 0
              : `1px solid ${Branding.Colors.black[16]}`,
            flexDirection: 'row'
            //  boxShadow: ` 0px 1px 2px  gray`,
          }}
        >
          <QIcons iconStyle={stylesEN.flagStyle} source={BahrainFlag} />
          <Divider
            orientation="vertical"
            sx={{ height: 30, margin: `0px 15px` }}
          />

          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between'
            }}
          >
            <InputBase
              className={stylesEN.placeHolderStyle}
              placeholder={placeHolderText ?? ' Search Places in Bahrain'}
              onClick={onInputClickHandler} //setOpenHotspots(true)}
              onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter') {
                  handleEnterClicked();
                }
              }}
              onChange={onTextChange}
              value={value}
            />
            <div>
              {value && (
                <QIcons
                  click={onSearchClearButtonClick}
                  iconStyle={exploreButtonStyling}
                  source={clear}
                />
              )}

              <QIcons
                click={onSearchButtonClick}
                iconStyle={exploreButtonStyling}
                source={exploreButton}
              />
            </div>
          </div>
        </div>
        {/* {noBorder && (
          <Divider orientation="horizontal" sx={{ margin: `1px 15px` }} />
        )} */}
        {children}
      </div>
    </ClickAwayListener>
  );
};

export default QSearchBar;
