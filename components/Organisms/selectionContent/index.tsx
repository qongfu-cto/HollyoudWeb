import React from 'react';
import { Styles } from './style';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Avatar, ButtonBase, Checkbox, List, TextField } from '@mui/material';

const SelectionContent = ({
  searchedValue,
  handleSearch,
  onMobile,
  setSelectionId,
  searchTitle,
  mapData,
  selectionId,
  showAvatar,
  value,
  setSelectedNationality,
  languages,
  selectedLanguages,
  handleChangeSelection
}: any) => {
  const styles = Styles();
  return (
    <div className={styles.fullWidth}>
      <TextField
        className={styles.searchCountry}
        id="country-code"
        label={searchTitle}
        variant="outlined"
        style={{
          // width: '90%',
          ...(onMobile ? { width: '90%' } : { width: 410 }),
          //   width: 410,
          height: 40
        }}
        size="small"
        value={searchedValue}
        onChange={handleSearch}
      />
      <List
        sx={{
          // width: '86%',
          ...(onMobile ? { width: '79%' } : { width: 432 }),
          // width: 432,
          maxWidth: 400,
          position: 'absolute',
          marginTop: 40,
          overflow: 'scroll',
          height: 280,
          display: 'block'
        }}
      >
        {languages ? (
          <div>
            {mapData?.map((data: any) => (
              <div key={`${data._id}`} className={styles.column}>
                <li
                  className={[
                    styles.row,
                    styles.borderBottom,
                    selectionId === data?._id?.toString() &&
                      styles.selectedCountry
                  ].join(' ')}
                >
                  <div
                    className={[styles.row, styles.spaceBetweenCenter].join(
                      ' '
                    )}
                  >
                    <p className={[styles.ml8, styles.fZ12].join(' ')}>
                      {data[value]}
                    </p>
                    <Checkbox
                      checked={selectedLanguages[data._id.toString()]}
                      onChange={(e: any) =>
                        handleChangeSelection(e, data._id.toString())
                      }
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </div>
                </li>
              </div>
            ))}
          </div>
        ) : (
          <>
            {mapData?.map((data: any) => (
              <ButtonBase
                key={`${data._id}`}
                className={styles.column}
                onClick={(event: any) => {
                  setSelectionId(data._id.toString());
                  setSelectedNationality(data.nationality);
                }}
              >
                <li
                  className={[
                    styles.row,
                    styles.borderBottom,
                    selectionId === data?._id?.toString() &&
                      styles.selectedCountry
                  ].join(' ')}
                >
                  <div className={styles.spaceBetween}>
                    <div className={styles.row}>
                      {showAvatar && (
                        <div className={styles.avatar}>
                          <Avatar
                            alt={`${data.country} flag`}
                            src={data.flag}
                            sx={{
                              width: 24,
                              height: 24,
                              marginRight: 1
                            }}
                          />
                        </div>
                      )}

                      <div className={styles.row}>
                        <p className={[styles.ml8, styles.fZ12].join(' ')}>
                          {data[value]}
                        </p>
                      </div>
                    </div>
                    {selectionId === data._id.toString() && (
                      <CheckCircleOutlineIcon
                        className={styles.checkIcon}
                        fontSize="small"
                      />
                    )}
                  </div>
                </li>
              </ButtonBase>
            ))}
          </>
        )}
      </List>
    </div>
  );
};

export default SelectionContent;
