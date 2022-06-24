import React, { useCallback, useState } from 'react';
import QMenu from 'components/Atoms/menu';
import QText from 'components/Atoms/text';
import arrow from '../../../assets/icons/dropdown-solid.svg';
import OutLinedInput from 'components/Molecules/outLinedInput';
import QIcon from 'components/Atoms/icon';
import { ClickAwayListener } from '@mui/material';
import QCustomDropDownContainer from 'components/Molecules/QCustomDropDownContainer';
import SearchDropDownItem from 'components/Molecules/QCustomDropDownContainer/searchDropDownItems';

export function Menu({
  list,
  title,
  width,
  handleMenuChange,
  value,
  height,
  position
}: {
  list: { id: number; label: string }[];
  title: string;
  width: number;
  handleMenuChange: any;
  value: any;
  height?: any;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
}) {
  const [label, setLabel] = useState(value);
  const [open, setOpen] = useState(false);
  const menuClickHandler = useCallback(index => {
    handleMenuChange(list[index], title);
    setLabel(list[index].label);
    setOpen(false);
  }, []);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <OutLinedInput
          labelColor
          textAlign="start"
          label={title}
          inputValue={label}
          width={width}
          disabled
          padding={10}
          endIcon={<QIcon source={arrow} click={() => setOpen(true)} />}
          onChangeText={e => handleMenuChange(e, title)}
        />

        {open && (
          <QCustomDropDownContainer
            margin={`0 0 0 10px `}
            width={width}
            height={height}
            position={position}
            searchDropDownItemProps={
              <SearchDropDownItem
                dropDownArray={list}
                onClick={menuClickHandler}
              />
            }
          />
        )}
      </div>
    </ClickAwayListener>
  );
}
