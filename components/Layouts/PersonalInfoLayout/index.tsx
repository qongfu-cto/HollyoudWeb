import UserNameHeader from 'components/Atoms/userNameHeader';
import OutLinedInput from 'components/Molecules/outLinedInput';
import React, { useState } from 'react';
import { Styles } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { Branding } from 'utilities/branding';
import { usePersonalInfo } from 'utilities/hook/userPersonalInfo';
import { Box } from '@mui/system';
import DrawerTextInput from 'components/Molecules/dawerTextInput';
import Drawer from 'react-bottom-drawer';
import DrawerPersonalInfo from 'components/Molecules/dawerPersonalInfo';
import { formatDateToMonthDayAndYear } from 'utilities/utils';
import { Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PersonalInfoLayout = () => {
  const styles = Styles();

  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    dob,
    setDob,
    gender,
    setGender,
    nationality,
    setNationality,
    userLanguages,
    setUserLanguages,
    isVisible,
    setIsVisible,
    openDrawer,
    closeDrawer,
    tempTextNew,
    setTempTextNew,
    tempText,
    setTempText,
    toggleVisible,
    displayData,
    setDisplayData,
    success,
    data,
    updateUserFirstAndLastName,

    updateDOB,
    updateUserGender,
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
    allLanguages,
    allRealLanguages,
    selectedLanguages,
    setSelectedLanguages,
    handleChangeSelection,
    updateUserLanguages,
    realdob
  } = usePersonalInfo();

  const { profileData, avatar } = useSelector((state: any) => {
    return {
      profileData: state.user.profile,
      avatar: state.user.avatar
    };
  });
  const isServer = () => typeof window === `undefined`;

  return isServer() ? null : (
    <div>
      <UserNameHeader title={'Personal Info'} />

      <div className={styles.sectionContainer}>
        <div
          style={{
            width: '100%',
            minHeight: 64, // adjust this
            height: 'auto',
            backgroundColor: Branding.Colors.white,
            borderRadius: '4px',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 16,
            boxShadow: '0px 1px 2px rgba(0,0,0,0.16)'
          }}
          onClick={() => {
            openDrawer();
            console.log('openDrawer', data(9));
            setDisplayData(data(9));
            setTempText(firstName);
            setTempTextNew(secondName);
          }}
        >
          <div className={styles.row}>
            <div>
              <Typography className={styles.label}>Name</Typography>
              <Typography
                className={styles.value}
              >{`${firstName} ${secondName}`}</Typography>
            </div>

            <div>
              <ArrowForwardIosIcon className={styles.arrow} />
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            minHeight: 64, // adjust this
            height: 'auto',
            backgroundColor: Branding.Colors.white,
            borderRadius: '4px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 16
          }}
          onClick={() => {
            openDrawer();
            setDisplayData(data(10));
          }}
        >
          <div className={styles.row}>
            <div>
              <Typography className={styles.label}>Date of birth</Typography>
              <Typography className={styles.value}>{dob}</Typography>
            </div>

            <div>
              <ArrowForwardIosIcon className={styles.arrow} />
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            minHeight: 64, // adjust this
            height: 'auto',
            backgroundColor: Branding.Colors.white,
            borderRadius: '4px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 16
          }}
          onClick={() => {
            openDrawer();
            setDisplayData(data(11));
            setTempText(gender);
          }}
        >
          <div className={styles.row}>
            <div>
              <Typography className={styles.label}>Gender</Typography>
              <Typography className={styles.value}>{gender}</Typography>
            </div>

            <div>
              <ArrowForwardIosIcon className={styles.arrow} />
            </div>
          </div>
        </div>
        {/* TODO: KEITH SCROLL ISSUE */}
        {/* <div
          style={{
            width: '100%',
            minHeight: 64, // adjust this
            height: 'auto',
            backgroundColor: Branding.Colors.white,
            borderRadius: '4px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 16
          }}
          onClick={() => {
            openDrawer();
            setDisplayData(data(12));
          }}
        >
          <div className={styles.row}>
            <div>
              <Typography className={styles.label}>Nationality</Typography>
              <Typography className={styles.value}>{nationality}</Typography>
            </div>

            <div>
              <ArrowForwardIosIcon className={styles.arrow} />
            </div>
          </div>
        </div> */}
        {/* TODO: KEITH SCROLL ISSUE */}
        {/* <div
          style={{
            width: '100%',
            minHeight: 64, // adjust this
            height: 'auto',
            backgroundColor: Branding.Colors.white,
            borderRadius: '4px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 16,
            overflowWrap: 'anywhere'
          }}
          onClick={() => {
            openDrawer();
            setDisplayData(data(13));
          }}
        >
          <div className={styles.row}>
            <div>
              <Typography className={styles.label}>Languages</Typography>
              <Typography className={styles.value}>
                {allLanguages.toString()}
              </Typography>
            </div>

            <div>
              <ArrowForwardIosIcon className={styles.arrow} />
            </div>
          </div>
        </div> */}
      </div>

      <Box className={styles.navigation}>
        <Drawer
          // @ts-ignore
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
          className={styles.drawer}
        >
          <DrawerPersonalInfo
            toggleVisibleText={toggleVisible}
            tempText={tempText}
            setTempText={setTempText}
            updateAction={displayData.updateAction}
            EndIcon={true}
            showSuccess={success}
            displayData={displayData}
            hiddenLabel={displayData.hiddenLabel}
            setTempTextNew={setTempTextNew}
            tempTextNew={tempTextNew}
            increaseHeight={displayData.increaseHeight}
            lowerCase={displayData.lowerCase}
            data={data}
            updateUserFirstAndLastName={updateUserFirstAndLastName}
            updateDOB={updateDOB}
            updateUserGender={updateUserGender}
            searchedValue={searchedValue}
            handleSearch={handleSearch}
            selectionId={selectionId}
            setSelectionId={setSelectionId}
            allCountries={allCountries}
            setSelectedNationality={setSelectedNationality}
            updateUserNationality={updateUserNationality}
            handleSearchLanguages={handleSearchLanguages}
            selectionIdLanguage={selectionIdLanguage}
            setSelectionIdLanguage={setSelectionIdLanguage}
            allLanguages={allLanguages}
            allRealLanguages={allRealLanguages}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            handleChangeSelection={handleChangeSelection}
            updateUserLanguages={updateUserLanguages}
          />
        </Drawer>
      </Box>
    </div>
  );
};

export default PersonalInfoLayout;
