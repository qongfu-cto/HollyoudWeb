import QText from 'components/Atoms/text';
import React from 'react';
import OPENNOW from 'assets/icons/openNow.svg';
import sorting from 'assets/icons/verified.svg';
// import sorting from 'assets/icons/sorting.svg';
import arrow from 'assets/icons/dropdown.svg';
import { useMobileSortingStylesEN } from './stylesEN';
import { Branding } from 'utilities/branding';
import { truncate } from 'lodash';
import {
  Button,
  IconButton,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material';
import Image from 'next/image';

interface MobileFilteringProps {
  checked: any;
  handleChecked: (event: any) => void;
  data: any;
  setShowSelection: any;
  onCloseDrawer: any;
}

function MobileFiltering({
  checked,
  handleChecked,
  data,
  setShowSelection,
  onCloseDrawer
}: MobileFilteringProps) {
  const styles = useMobileSortingStylesEN();

  // const onListClick = (sort: string, disable: boolean) => {
  //   if (disable) return;

  //   onSortingClicked(sort);
  // };
  return (
    <div>
      {/* TODO EMAN show open now Filter mobile */}
      <section className={styles.container}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.open}
              onChange={handleChecked}
              color="success"
              inputProps={{ 'aria-label': 'controlled' }}
              name="open"
              sx={{
                marginLeft: '220px'
              }}
            />
          }
          labelPlacement="start"
          label={
            <QText
              label="Open Now"
              iconLeft={OPENNOW}
              labelColor={Branding.Colors.black[60]}
              containerMargin="-15px"
            />
          }
        />
      </section>
      <section className={styles.container}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.Verified}
              onChange={handleChecked}
              color="success"
              inputProps={{ 'aria-label': 'controlled' }}
              name="Verified"
              disabled
              sx={{
                marginLeft: '150px'
              }}
            />
          }
          labelPlacement="start"
          label={
            <QText
              label="Verified Places Only"
              iconLeft={sorting}
              labelColor={Branding.Colors.black[60]}
              containerMargin="-15px"
            />
          }
        />
      </section>
      <section className={styles.container}>
        <QText
          label="Areas & Cities"
          iconLeft={sorting}
          labelColor={Branding.Colors.black[60]}
        />
        <Button
          variant="text"
          sx={{
            width: 130,
            height: 32,
            color: Branding.Colors.black[86],
            fontSize: 16,
            textTransform: 'none'
          }}
          endIcon={<Image src={arrow} alt="" />}
          onClick={() => {
            setShowSelection(true);
            onCloseDrawer();
          }}
        >
          {data.length === 0
            ? 'All'
            : data.length === 1
            ? truncate(data[0].name, { length: 13 })
            : 'Multiple'}
        </Button>
      </section>
    </div>
  );
}

export default MobileFiltering;
