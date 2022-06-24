import {
  Button,
  SwipeableDrawer,
  TextField,
  OutlinedInput
} from '@mui/material';
import Drawer from 'react-bottom-drawer';
import TextButton from 'components/Atoms/textButton';
import React from 'react';
import { Branding } from 'utilities/branding';
import { useQBottomDrawerStylesEN } from './styleEN';
import ARROW from '../../../assets/icons/back-to-filters.svg';
import Image from 'next/image';

interface QBottomDrawerFilterProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  openDrawer: boolean;
  onCloseDrawer: any;
  onOpenDrawer: VoidFunction;
  children: React.ReactNode;
  onResetClick: VoidFunction;
  applyFilterHandler: VoidFunction;
  searchList: (value: any) => void;
}

function QBottomDrawerFilter({
  position,
  openDrawer,
  onCloseDrawer,
  onOpenDrawer,
  children,
  onResetClick,
  applyFilterHandler,
  searchList
}: QBottomDrawerFilterProps) {
  const style = useQBottomDrawerStylesEN();

  return (
    <React.Fragment>
      <Drawer
        // @ts-ignore
        duration={250}
        hideScrollbars={true}
        onClose={() => onCloseDrawer(false)}
        isVisible={openDrawer}
        className={style.drawer}
      >
        <section className={style.headerContainer}>
          <div className={style.headerTopSection}>
            <Button
              onClick={() => {
                onCloseDrawer(false);
                onOpenDrawer();
              }}
              variant={'text'}
              classes={{ root: style.close }}
              disableRipple
              startIcon={<Image src={ARROW} alt="" width={32} height={32} />}
            >
              Filters
            </Button>
            <TextButton
              onClick={onResetClick}
              label="Clear"
              labelColor={Branding.Colors.black[60]}
              labelStyles={{
                margin: 5
              }}
            />
          </div>
          <div className={style.headerBottomSection}>
            <OutlinedInput
              id="outlined-basic"
              placeholder={'Search area of city'}
              sx={{
                '&.MuiOutlinedInput-root': {
                  borderRadius: 20,
                  width: '90%',
                  margin: '4px auto',
                  height: 40,
                  border: '1px solid ' + Branding.Colors.black[16]
                }
              }}
              onChange={searchList}
            />
          </div>
        </section>

        <div className={style.searchContainer}>
        {children}
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default QBottomDrawerFilter;
