import QText from 'components/Atoms/text';
import React from 'react';
import { useMobileSortingStylesEN } from './stylesEN';
import { Branding } from 'utilities/branding';
import { Divider, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { ListItemText, Typography, Collapse } from '@mui/material';

interface MobileSelectionProps {
  lists: {}[];
  setShowSelection: any;
  handleSelection: (event: any, index: any) => void;
  handleSelectionChild: (event: any, index: any, listIndex: any) => void;
}

function MobileSelection({
  lists,
  setShowSelection,
  handleSelection,
  handleSelectionChild
}: MobileSelectionProps) {
  const styles = useMobileSortingStylesEN();

  // const onListClick = (sort: string, disable: boolean) => {
  //   if (disable) return;

  //   onSortingClicked(sort);
  // };
  return (
    <section className={styles.container}>
      <List>
        {lists?.map((list: any, index: any) => (
          <>
            <ListItemButton key={index}>
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
                          marginLeft: '-20px'
                        }}
                      />
                    }
                  />
                }
              />
            </ListItemButton>
            <Divider sx={{ width: '100%' }} />

            <List component="div" disablePadding>
              {list.child.map((child: any, index: any) => (
                <>
                  <ListItem key={index} sx={{ marginLeft: 3 }}>
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
                                handleSelectionChild(event, child.id, list.id)
                              }
                              color="success"
                              sx={{
                                marginLeft: '-20px'
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
          </>
        ))}
      </List>
    </section>
  );
}

export default MobileSelection;
