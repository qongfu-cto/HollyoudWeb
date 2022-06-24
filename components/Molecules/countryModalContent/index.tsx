import React from 'react';
import { Styles } from './style';
import { useParser } from 'utilities/hook/useParser';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Avatar, ButtonBase, List, TextField } from '@mui/material';

const CountryModalContent = ({
  searchedCountry,
  handleSearch,
  allCountries,
  setCountryCode,
  setCountryId,
  setSelectedCountry,
  countryId,
  onMobile,
  setNewCountry
}: any) => {
  const styles = Styles();
  const {parserData} = useParser();
  console.log(parserData)
  return (
    <div className={styles.fullWidth}>
      <TextField
        className={styles.searchCountry}
        id="country-code"
        label="Search for country"
        variant="outlined"
        style={{
          // width: '90%',
          ...(onMobile ? { width: '90%' } : { width: 410 }),
          //   width: 410,
          height: 40
        }}
        size="small"
        value={searchedCountry}
        onChange={handleSearch}
      />
      <List
        sx={{
          // width: '86%',
          ...(onMobile ? { width: '79%' } : { width: 432 }),
          // width: 432,
          maxWidth: 400,
          position: 'absolute',
          marginTop: 
          parserData.device.type === "mobile" && parserData.device.model === "iPhone" ? 19 : 40, // FIXME: Country Code Top Margin
          overflow: 'scroll',
          height: 280,
          display: 'block'
        }}
      >
        {allCountries?.map((country: any) => (
          <ButtonBase
            key={`${country._id}`}
            className={styles.column}
            onClick={(event: any) => {
              console.log('SET');
              setCountryCode(country.dial_code);
              setCountryId(country._id.toString());
              if (setNewCountry) {
                setNewCountry(country);
              }
              if (setSelectedCountry) {
                setSelectedCountry(country);
              }
            }}
          >
            <li
              className={[
                styles.row,
                styles.borderBottom,
                countryId === country._id.toString() && styles.selectedCountry
              ].join(' ')}
            >
              <div className={styles.spaceBetween}>
                <div className={styles.row}>
                  <div className={styles.avatar}>
                    <Avatar
                      alt={`${country.country} flag`}
                      src={country.flag}
                      sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1
                      }}
                    />
                  </div>
                  <div className={styles.row}>
                    <p className={[styles.fZ12, styles.code].join(' ')}>
                      +{country.dial_code}
                    </p>
                    <p className={[styles.ml8, styles.fZ12].join(' ')}>
                      {country.country}
                    </p>
                  </div>
                </div>
                {countryId === country._id.toString() && (
                  <CheckCircleOutlineIcon
                    className={styles.checkIcon}
                    fontSize="small"
                  />
                )}
              </div>
            </li>
          </ButtonBase>
        ))}
      </List>
    </div>
  );
};

export default CountryModalContent;
