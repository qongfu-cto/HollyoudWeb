import { Avatar, Button, ButtonBase, List, TextField } from '@mui/material';
import ModalLayout from 'components/Atoms/modal';
import ModalHeader from 'components/Molecules/modalHeader';
import React from 'react';
import { Styles } from './style';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Branding } from 'utilities/branding';
import QDropDownInputBox from 'components/Atoms/QDropDownInputBox';
import CountryModalContent from 'components/Molecules/countryModalContent';

const CreateCountryModal = ({
  openSearch,
  setOpenSearch,
  onMobile,
  searchedCountry,
  handleSearch,
  allCountries,
  countryId,
  setCountryCode,
  setCountryId,
  setSelectedCountry
}: any) => {
  const styles = Styles();
  return (
    <ModalLayout
      openModal={openSearch}
      handleCloseModal={() => setOpenSearch(false)}
      modalStyle={styles.modal}
      modalHeight={
        onMobile()
          ? window.outerHeight
          : typeof window !== 'undefined'
          ? 496
          : 730
      }
      modalWidth={onMobile() ? window.outerWidth : 500}
    >
      <ModalHeader
        title={'Select Country code'}
        closeButton
        onCloseButtonClick={() => setOpenSearch(false)}
      />
      <CountryModalContent
        searchedCountry={searchedCountry}
        handleSearch={handleSearch}
        allCountries={allCountries}
        setCountryCode={setCountryCode}
        setCountryId={setCountryId}
        setSelectedCountry={setSelectedCountry}
        countryId={countryId}
      />

      <div className={[styles.row, styles.down].join(' ')}>
        <Button
          onClick={() => setOpenSearch(false)}
          variant="contained"
          style={{
            backgroundColor: Branding.Colors.black[6],
            color: Branding.Colors.black[36],
            width: 136,
            height: 40,
            borderRadius: 12,
            marginTop: 30,
            cursor: 'pointer',
            marginRight: 48
          }}
        >
          <p className={styles.label}>CANCEL</p>
        </Button>
        <Button
          onClick={() => setOpenSearch(false)}
          variant="contained"
          disabled={countryId === ''}
          style={{
            backgroundColor:
              countryId === ''
                ? Branding.Colors.black[6]
                : Branding.Colors.primary.normal,
            color:
              countryId === ''
                ? Branding.Colors.black[36]
                : Branding.Colors.white,
            width: 136,
            height: 40,
            borderRadius: 12,
            marginTop: 30,
            cursor: 'pointer'
          }}
        >
          <p className={styles.label}>SELECT</p>
        </Button>
      </div>
    </ModalLayout>
  );
};

export default CreateCountryModal;
