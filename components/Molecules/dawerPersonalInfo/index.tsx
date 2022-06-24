import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField
} from '@mui/material';
import React, { useEffect } from 'react';
import { Branding } from 'utilities/branding';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { Styles } from './style';
import CountryModalContent from '../countryModalContent';
import QText from 'components/Atoms/text';
import Countdown from 'react-countdown';
import ReactCodeInput from 'react-code-input';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MaleFilled from '../../../assets/icons/male-filled.svg';
import FemaleOutline from '../../../assets/icons/female-outline.svg';
import FemaleFilled from '../../../assets/icons/female-filled.svg';
import MaleOutline from '../../../assets/icons/male-outline.svg';

import Image from 'next/image';

import SelectionContent from '../../Organisms/selectionContent';
import { onMobile } from 'utilities/utils';

const DrawerPersonalInfo = ({
  toggleVisibleText,

  tempText,
  setTempText,
  tempFieldRef,

  value,

  EndIcon,
  showSuccess,
  displayData,
  hiddenLabel,
  setTempTextNew,
  setTempTextConfirm,
  tempTextNew,
  tempTextConfirm,
  increaseHeight,
  successSecond,
  setSuccess,

  setOriginalCode,

  setTimeUpForCode,
  restartCounter,
  timeUpForCode,

  showSecondaryError,

  updateUserFirstAndLastName,
  updateDOB,
  updateUserGender,
  openSearch,
  setOpenSearch,
  searchedValue,
  handleSearch,
  selectionId,
  setSelectionId,
  allCountries,
  setSelectedNationality,
  updateUserNationality,
  handleSearchLanguages,
  selectionIdLanguage,
  setSelectionIdLanguage,
  allRealLanguages,
  selectedLanguages,
  setSelectedLanguages,
  handleChangeSelection,
  updateUserLanguages
}: any) => {
  const styles = Styles();

  useEffect(() => {
    if (tempFieldRef) {
      tempFieldRef?.current?.focus();
    }
  }, [tempFieldRef]);

  return (
    <div
      className={
        increaseHeight
          ? styles.mostIncreasesdrawerHeight
          : displayData?.lessIncreasesdHeight
          ? styles.increasesdrawerHeight
          : styles.drawerHeight
      }
    >
      <div className={styles.row}>
        <p className={[styles.name, styles.text24].join(' ')}>
          {displayData?.fieldHeader}
        </p>
        <Button
          sx={{
            textTransform: 'capitalize',
            fontSize: 16,
            marginTop: 4,
            color: Branding.Colors.blue.variant_10,
            bottom: 10
          }}
          size="small"
          variant="text"
          className={styles.updateBtn}
          onClick={() => {
            if (displayData.change === 9) {
              updateUserFirstAndLastName();
              displayData?.updateAction();
            }
            if (displayData.change === 10) {
              updateDOB();
              displayData?.updateAction();
            }
            if (displayData.change === 11) {
              updateUserGender(tempText);
              displayData?.updateAction();
            }
            if (displayData.change === 12) {
              updateUserNationality();
              displayData?.updateAction();
            }
            if (displayData.change === 13) {
              updateUserLanguages();
              displayData?.updateAction();
            }

            // close the modal
            toggleVisibleText();
          }}
        >
          {displayData.updateBtn}
        </Button>
      </div>
      {displayData.dob && (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label=""
            inputFormat="MM/dd/yyyy"
            value={tempText}
            onChange={(newValue: Date | null) => {
              setTempText(newValue);
            }}
            inputRef={input => {
              //   input?.focus();
              //   input?.click();
            }}
            renderInput={params => (
              <TextField
                variant="filled"
                sx={{
                  width: '100%',
                  // border: `1px solid ${Branding.Colors.blue.variant_10}`,
                  // backgroundColor: Branding.Colors.offWhite,
                  borderRadius: 2,
                  '&.MuiFilledInput-root': {
                    backgroundColor: Branding.Colors.white
                  },
                  '&.Mui-focused fieldset': {
                    backgroundColor: Branding.Colors.white,
                    borderColor: 'transparent'
                  }
                }}
                {...params}
                error={false}
              />
            )}
          />
        </LocalizationProvider>
      )}
      {displayData.gender && (
        <div className={styles.row}>
          <div
            className={
              tempText === 'male' ? styles.activegenderBox : styles.genderBox
            }
            onClick={() => setTempText('male')}
          >
            <Image
              src={tempText === 'male' ? MaleFilled : MaleOutline}
              alt="male gender"
              layout="fixed"
            />
          </div>
          <div
            className={
              tempText === 'female' ? styles.activegenderBox : styles.genderBox
            }
            onClick={() => setTempText('female')}
          >
            <Image
              src={tempText === 'female' ? FemaleFilled : FemaleOutline}
              alt="female gender"
            />
          </div>
        </div>
      )}

      {displayData.nationalities && (
        <div>
          <SelectionContent
            searchedValue={searchedValue}
            handleSearch={handleSearch}
            onMobile={true}
            searchTitle={'Type to search for nationality'}
            selectionId={selectionId}
            setSelectionId={setSelectionId}
            mapData={allCountries}
            showAvatar={true}
            value={'nationality'}
            setSelectedNationality={setSelectedNationality}
          />
        </div>
      )}

      {displayData.languages && (
        <div>
          <div>
            <SelectionContent
              searchedValue={searchedValue}
              handleSearch={handleSearchLanguages}
              onMobile={true}
              searchTitle={'Search for language'}
              selectionId={selectionIdLanguage}
              setSelectionId={setSelectionIdLanguage}
              mapData={allRealLanguages}
              value={'language'}
              languages={true}
              selectedLanguages={selectedLanguages}
              setSelectedLanguages={setSelectedLanguages}
              handleChangeSelection={handleChangeSelection}
            />
          </div>
        </div>
      )}

      {displayData.textFields && (
        <>
          <TextField
            onClick={() => {
              console.log('CLICKED ME');
            }}
            onFocus={() => {
              console.log('FOCUSED ME');
            }}
            // autoFocus
            error={
              (showSuccess === false || showSuccess === true) && !showSuccess
            }
            helperText={
              showSuccess ? (
                <span className={styles.successicon}>
                  {displayData.successMessage}
                </span>
              ) : (
                <span className={styles.alerticon}>
                  {showSecondaryError
                    ? displayData?.seondaryErrorMessage
                    : displayData.errorMessage}
                </span>
              )
            }
            type={displayData.type}
            multiline={value === 3 && true}
            rows={value === 3 ? 5 : 1}
            label={!hiddenLabel && displayData.firstField}
            variant="filled"
            className={styles.textField}
            sx={{
              width: '100%',
              // border: `1px solid ${Branding.Colors.blue.variant_10}`,
              // backgroundColor: Branding.Colors.offWhite,
              borderRadius: 2,
              '&.MuiFilledInput-root': {
                backgroundColor: Branding.Colors.white
              },
              '&.Mui-focused fieldset': {
                backgroundColor: Branding.Colors.white,
                borderColor: 'transparent'
              }
            }}
            value={tempText}
            onChange={(e: any) => {
              setTempText(e.target.value);
              if (!e.target.value) {
                if (setSuccess) {
                  setSuccess(false);
                }
              }
            }}
            // inputRef={input => {
            //   input?.focus();
            //   input?.click();
            // }}
            inputRef={tempFieldRef}
            InputProps={{
              endAdornment: EndIcon && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={}
                    //   onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showSuccess === false || showSuccess === true ? (
                      showSuccess ? (
                        <CheckCircleIcon className={styles.successicon} />
                      ) : (
                        <CancelIcon className={styles.alerticon} />
                      )
                    ) : null}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          {displayData.lessIncreasesdHeight && (
            <>
              <TextField
                type={displayData.type}
                multiline={value === 3 && true}
                rows={1}
                hiddenLabel={hiddenLabel}
                variant="filled"
                className={styles.textField}
                sx={{
                  mt: 4,
                  width: '100%',
                  // border: `1px solid ${Branding.Colors.blue.variant_10}`,
                  // backgroundColor: Branding.Colors.offWhite,
                  borderRadius: 2,
                  '&.MuiFilledInput-root': {
                    backgroundColor: Branding.Colors.white
                  },
                  '&.Mui-focused fieldset': {
                    backgroundColor: Branding.Colors.white,
                    borderColor: 'transparent'
                  }
                }}
                value={tempTextNew}
                onChange={(e: any) => {
                  setTempTextNew(e.target.value);
                }}
                label={!hiddenLabel && displayData.secondField}
              />
              {!displayData.only2Inputs && (
                <TextField
                  type={displayData.type}
                  error={!successSecond}
                  helperText={
                    successSecond ? (
                      <span className={styles.successicon}>
                        {displayData.successMessageSecond}
                      </span>
                    ) : (
                      <span className={styles.alerticon}>
                        {showSecondaryError
                          ? displayData?.seondaryErrorMessage
                          : displayData.errorMessageSecond}
                      </span>
                    )
                  }
                  hiddenLabel={hiddenLabel}
                  variant="filled"
                  className={styles.textField}
                  sx={{
                    mt: 4,
                    width: '100%',
                    // border: `1px solid ${Branding.Colors.blue.variant_10}`,
                    // backgroundColor: Branding.Colors.offWhite,
                    borderRadius: 2,
                    '&.MuiFilledInput-root': {
                      backgroundColor: Branding.Colors.white
                    },
                    '&.Mui-focused fieldset': {
                      backgroundColor: Branding.Colors.white,
                      borderColor: 'transparent'
                    }
                  }}
                  value={tempTextConfirm}
                  onChange={(e: any) => {
                    setTempTextConfirm(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: EndIcon && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          // onClick={}
                          //   onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {successSecond ? (
                            <CheckCircleIcon className={styles.successicon} />
                          ) : (
                            <CancelIcon className={styles.alerticon} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  label={!hiddenLabel && displayData.thirdField}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DrawerPersonalInfo;
