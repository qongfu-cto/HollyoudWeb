import { FC, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  OutlinedInput,
  TextField
} from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { ListItemText, Typography, Collapse, Divider } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useFilterDialogStyles } from './stylesEN';
import ModalLayout from '../../Atoms/modal';
import PropertiesFilter from '../../Organisms/propertyFilter';
import PlacesFilter from '../../Organisms/placesFilter';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import { CustomizesTag } from 'components/Atoms/tag';
import Image from 'next/image';
import SEARCH from '../../../assets/icons/search-icon.svg';
import ARROW from '../../../assets/icons/arrow-left.svg';
import { isEmpty, isUndefined } from 'lodash';

type Props = {
  open: boolean;
  resetSelection: (action: any) => void;
  onClose: VoidFunction;
  onApply: VoidFunction;
  variant: SearchTypes;
  handleChecked: (event: any) => void;
  lists: {}[];
  data: any;
  handleSelection: (event: any, index: any) => void;
  handleSelectionChild: (event: any, index: any, listIndex: any) => void;
  handleCollapse: (index: any) => void;
  searchList: (value: any) => void;
};

const SelectionLayout: FC<Props> = ({
  open,
  onClose,
  variant,
  onApply,
  resetSelection,
  handleChecked,
  lists,
  data,
  handleSelection,
  handleSelectionChild,
  handleCollapse,
  searchList
}) => {
  const styles = useFilterDialogStyles();

  console.log('SelectionLayout data ', lists);
  const clearFilters = () => {
    onClose();
  };

  return (
    <section>
      <ModalLayout
        openModal={open}
        handleCloseModal={onClose}
        modalStyle={styles.modal}
        modalHeight={variant == 'place' ? 'auto' : 600}
        modalWidth={750}
        layoutPadding={0}
      >
        {/* <Modal open={open} onClose={onClose}>
        <div className={styles.container}> */}
        <>
          <header className={styles.header}>
            <Button
              onClick={() => resetSelection('back')}
              variant={'text'}
              classes={{ root: styles.close }}
              disableRipple
              startIcon={<Image src={ARROW} alt="" />}
            >
              Filters
            </Button>
            <OutlinedInput
              id="outlined-basic"
              placeholder={'Search area of city'}
              sx={{
                '&.MuiOutlinedInput-root': {
                  borderRadius: 2,
                  width: 336,
                  height: 40,
                  position: 'absolute',
                  right: 30,
                  color: 'inherit'
                  //border: '1px solid ' + Branding.Colors.black[16]
                }
              }}
              onChange={searchList}
              // value={search}
            />
          </header>
          <main className={styles.content}>
            <List>
              {lists?.map((list: any, index: any) => (
                <>
                  <ListItemButton
                    key={index}
                    // selected={selectedIndex === index}
                    // sx={{
                    //   marginLeft: -6
                    // }}
                  >
                    <ListItemIcon onClick={() => handleCollapse(index)}>
                      {list.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <FormControlLabel
                          label={
                            <Typography className={styles.formControlLabel}>
                              {list.name}
                            </Typography>
                          }
                          labelPlacement="start"
                          control={
                            <Checkbox
                              checked={list.checked}
                              indeterminate={list.indeterminate}
                              onChange={(event: any) =>
                                handleSelection(event, list.id)
                              }
                              color="success"
                              sx={{
                                marginLeft: '-30px'
                              }}
                            />
                          }
                        />
                      }
                    />
                  </ListItemButton>
                  <Divider sx={{ width: '100%' }} />
                  <Collapse in={list.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {list.child.map((child: any, index: any) => (
                        <>
                          <ListItem key={index} sx={{ marginLeft: 9 }}>
                            <ListItemText
                              primary={
                                <FormControlLabel
                                  label={
                                    <Typography className={styles.subList}>
                                      {child.name}
                                    </Typography>
                                  }
                                  labelPlacement="start"
                                  control={
                                    <Checkbox
                                      checked={child.checked}
                                      onChange={(event: any) =>
                                        handleSelectionChild(
                                          event,
                                          child.id,
                                          list.id
                                        )
                                      }
                                      color="success"
                                      sx={{
                                        marginLeft: '-47px'
                                      }}
                                    />
                                  }
                                />
                              }
                            />
                          </ListItem>
                          <Divider sx={{ width: '100%' }} />
                        </>
                      ))}
                    </List>
                  </Collapse>
                </>
              ))}
            </List>
          </main>

          <footer className={styles.footer}>
            <Button
              variant="contained"
              classes={{ root: styles.clearButton }}
              onClick={() => resetSelection('reset')}
            >
              Clear Selections
            </Button>
            <Button
              variant="contained"
              size="large"
              classes={{ root: styles.applyButton }}
              onClick={onApply}
              disabled={isEmpty(data)}
            >
              Apply
            </Button>
          </footer>
        </>
      </ModalLayout>
    </section>
  );
};

export default SelectionLayout;
