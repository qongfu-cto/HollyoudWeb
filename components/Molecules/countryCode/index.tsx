import React, { useState } from 'react';
import Text from '../../Atoms/text';
import QIcon from '../../Atoms/icon';
import { Avatar, Divider } from '@mui/material';
import BHFlag from '../../../assets/icons/bh-flag.svg';
import { useCountryCodeStylesEN } from './styleEN';
import CreateCountryModal from 'components/Organisms/countryModal';
import { onMobile } from 'utilities/utils';

/**
 * BackTextButton
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param label - optional label that defaults to "Back to Home".
 * @param hrefLink - optional "/url" that defaults to home page "/".
 */
const isServer = () => typeof window === `undefined`;
const CountryCode = ({
  allCountries,
  selectedCountry,
  selectedCountryId,
  setAllCountries,
  originalCountries,
  countryId,
  setCountryCode,
  setCountryId,
  setSelectedCountry
}: any) => {
  const styles = useCountryCodeStylesEN();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchedCountry, setSearchedCountry] = useState('');

  const handleSearch = (e: any) => {
    setSearchedCountry(e.target.value);

    if (e.target.value) {
      const countries = allCountries.filter((country: any) =>
        country.country.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setAllCountries(countries);
    } else {
      setAllCountries(originalCountries);
    }
  };

  return isServer() ? null : (
    <div className={styles.countryContainer}>
      <div
        onClick={() => {
          setOpenSearch(true);
        }}
      >
        <QIcon
          source={selectedCountry.flag}
          alt={`${selectedCountry.country} flag`}
          avatar
        />
      </div>

      <Text
        label={`+${selectedCountry.dial_code}`}
        labelStyle={{ fontWeight: 'bold' }}
      />
      <Divider
        orientation="vertical"
        sx={{ height: 24, margin: `0px 10px 0px 10px ` }}
      />
      <CreateCountryModal
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        onMobile={onMobile}
        searchedCountry={searchedCountry}
        handleSearch={handleSearch}
        allCountries={allCountries}
        countryId={countryId}
        setCountryCode={setCountryCode}
        setCountryId={setCountryId}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
};

export default CountryCode;
