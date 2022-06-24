import UserNameHeader from 'components/Atoms/userNameHeader';
import React from 'react';
import { Styles } from './styles';

import { useAccountInfo } from 'utilities/hook/userAccountInfo';

import {
  Alert,
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  Typography
} from '@mui/material';
import { Branding } from 'utilities/branding';
import GetVerified from 'components/Atoms/getVerified';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SimpleTextField from 'components/Atoms/SimpleTextField';
import BhFlag from '../../../assets/icons/bh-flag.svg';
import Verified from '../../../assets/images/verified.svg';
import Image from 'next/image';
import VerifiedText from 'components/Atoms/verifiedText';
import DrawerTextInput from 'components/Molecules/dawerTextInput';
import Drawer from 'react-bottom-drawer';
import Toast from 'components/Atoms/toast';
import CustomModal from 'components/Molecules/CustomModal';
import { useSelector, useDispatch } from 'react-redux';

const AccountInfoLayout = () => {
  const styles = Styles();
  const { profile } = useSelector(({ user }: any) => ({
    profile: user.profile
  }));

  const isServer = () => typeof window === `undefined`;

  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    userCode,
    setUserCode,
    mobile,
    setMobile,
    tempText,
    setTempText,
    isVisible,
    openDrawer,
    closeDrawer,
    toggleVisible,
    tempFieldRef,
    setCheckUsername,
    success,
    data,
    displayData,
    setDisplayData,
    setCheckUserEmail,
    setCheckCountry,

    setTempTextNew,
    setTempTextConfirm,
    tempTextNew,
    tempTextConfirm,
    makeAllChecksFalse,
    setCheckPassword,
    successSecond,
    updateUserNameAction,
    changeEmailAction,
    changeUserPasswordAction,
    open,
    toggleModal,
    newPassword,
    setNewPassword,
    setSuccess,
    mobileCountry,
    newCountry,
    newMobile,
    setNewMobile,
    setShowCountries,
    showCountries,
    handleSearch,
    setCountryCode,
    allCountries,
    searchedCountry,
    setCountryId,
    countryId,
    setNewCountry,
    sendOtp,
    switchToCode,
    setSwitchToCode,

    setOriginalCode,
    setCurrentTime,
    setRestartCounter,
    currentTime,
    setTimeUpForCode,
    restartCounter,
    timeUpForCode,
    userTypedCode,
    handleResetPassword,
    isValidForgotPassword,
    countdown,
    showSecondaryError,
    currentMobileCountry
  } = useAccountInfo();

  return isServer() ? null : (
    <>
      <div>
        <UserNameHeader title={'Account Info'} />

        {/* <GetVerified /> */}

        {/* additional is temporary till we add GetVerified feature */}
        <div className={[styles.textfields, styles.additionalMt].join(' ')}>
          <SimpleTextField
            value={username}
            setValue={setUsername}
            startAdornment={'@'}
            Icon={EditIcon}
            label="Username"
            iconStyles={styles.icon}
            endBtnAction={() => {
              setTempText(username);
              makeAllChecksFalse();
              setDisplayData(data(0));
              setCheckUsername(true);
              toggleVisible();
            }}
            disabled
            mt={true}
          />

          <VerifiedText Icon={Verified} success={profile.verified} />

          <SimpleTextField
            value={email}
            setValue={setEmail}
            Icon={profile.verified && EditIcon}
            label="Email"
            iconStyles={styles.icon}
            endBtnAction={() => {
              setTempText(email);
              makeAllChecksFalse();
              setCheckUserEmail(true);
              setDisplayData(data(1));
              toggleVisible();
            }}
            disabled
          />
          {profile.authType === 'Local' && (
            <SimpleTextField
              type="password"
              value={password}
              setValue={setPassword}
              Icon={EditIcon}
              label="Password"
              iconStyles={styles.icon}
              endBtnAction={() => {
                toggleVisible();
                setTempText(password);
                makeAllChecksFalse();
                setCheckPassword(true);
                setDisplayData(data(2));
              }}
              disabled
              mt={true}
              placeholder="***********************"
            />
          )}
          {/* TODO: KEITH SCROLL ISSUE */}
          {/* <div className={styles.row}>
            <div className={styles.mobile}>
              <SimpleTextField
                value={userCode}
                setValue={setUserCode}
                label="Country code"
                countryFlag={mobileCountry?.flag}
                disabled
                mt={true}
                alt={`${mobileCountry?.country}`}
                startBtnAction={() => {
                  toggleVisible();
                  setTempText(mobile);
                  makeAllChecksFalse();
                  setCheckCountry(true);
                  setDisplayData(data(3));
                }}
              />
            </div>
            <div className={styles.mobileNumber}>
              <SimpleTextField
                value={mobile}
                setValue={setMobile}
                label="Mobile"
                Icon={EditIcon}
                iconStyles={styles.icon}
                disabled
                endBtnAction={() => {
                  toggleVisible();
                  setTempText(mobile);
                  makeAllChecksFalse();
                  setCheckCountry(true);
                  setDisplayData(data(3));
                }}
                mt={true}
              />
            </div>
          </div> */}
        </div>
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
          <DrawerTextInput
            toggleVisibleText={toggleVisible}
            tempText={tempText}
            setTempText={setTempText}
            tempFieldRef={tempFieldRef}
            updateAction={displayData.updateAction}
            EndIcon={true}
            showSuccess={success}
            displayData={displayData}
            hiddenLabel={displayData.hiddenLabel}
            setTempTextNew={setTempTextNew}
            setTempTextConfirm={setTempTextConfirm}
            tempTextNew={tempTextNew}
            tempTextConfirm={tempTextConfirm}
            increaseHeight={displayData.increaseHeight}
            lowerCase={displayData.lowerCase}
            successSecond={successSecond}
            updateUserNameAction={updateUserNameAction}
            changeEmailAction={changeEmailAction}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            changeUserPasswordAction={changeUserPasswordAction}
            setSuccess={setSuccess}
            userCode={userCode}
            mobile={mobile}
            newCountry={newCountry}
            mobileCountry={mobileCountry}
            newMobile={newMobile}
            setNewMobile={setNewMobile}
            setShowCountries={setShowCountries}
            showCountries={showCountries}
            handleSearch={handleSearch}
            setCountryCode={setCountryCode}
            allCountries={allCountries}
            searchedCountry={searchedCountry}
            setCountryId={setCountryId}
            countryId={countryId}
            setNewCountry={setNewCountry}
            sendOtp={sendOtp}
            switchToCode={switchToCode}
            setSwitchToCode={setSwitchToCode}
            setDisplayData={setDisplayData}
            data={data}
            setOriginalCode={setOriginalCode}
            setCurrentTime={setCurrentTime}
            setRestartCounter={setRestartCounter}
            currentTime={currentTime}
            setTimeUpForCode={setTimeUpForCode}
            restartCounter={restartCounter}
            timeUpForCode={timeUpForCode}
            userTypedCode={userTypedCode}
            handleResetPassword={handleResetPassword}
            isValidForgotPassword={isValidForgotPassword}
            countdown={countdown}
            showSecondaryError={showSecondaryError}
            currentMobileCountry={currentMobileCountry}
          />
        </Drawer>

        {open && (
          <CustomModal
            message="You have requested to change your email. Please check your mailbox
            and verify your new email."
            btnText="Okay"
            firstBtnAction={toggleModal}
          />
        )}
      </Box>
    </>
  );
};

export default AccountInfoLayout;
