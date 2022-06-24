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

const DrawerTextInput = ({
  toggleVisibleText,
  setDisplayName,
  tempText,
  setTempText,
  tempFieldRef,
  setTagName,
  setAboutMe,
  value,
  updateAction,
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
  updateUserNameAction,
  changeEmailAction,
  toggleModal,
  newPassword,
  setNewPassword,
  changeUserPasswordAction,
  setSuccess,
  mobile,
  userCode,
  mobileCountry,
  newCountry,
  newMobile,
  setNewMobile,
  setShowCountries,
  showCountries,
  setCountryId,
  countryId,
  setSelectedCountry,
  selectedCountry,
  handleSearch,
  setCountryCode,
  allCountries,
  searchedCountry,
  setNewCountry,
  sendOtp,
  switchToCode,
  setSwitchToCode,
  setDisplayData,
  data,

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

  updateDisplayName,
  updateTagLine,
  updateAboutMe,
  showSecondaryError,
  currentMobileCountry,

  updateUserFirstAndLastName,
  dontdisabledUpdate
}: any) => {
  const styles = Styles();

  const isServer = () => typeof window === `undefined`;

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed || (!restartCounter && timeUpForCode)) {
      setTimeUpForCode(true);
      setOriginalCode('');
      // Render a completed state
      return (
        <QText
          label={'Code expired'}
          labelStyle={{ fontSize: 14, textAlign: 'center' }}
          labelColor={Branding.Colors.danger.normal}
        />
      );
    } else {
      // Render a countdown
      return (
        <QText
          label={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
          labelStyle={{ fontSize: 14, textAlign: 'center' }}
          labelColor={Branding.Colors.grey}
        />
      );
    }
  };

  useEffect(() => {
    if (tempFieldRef.current) {
      tempFieldRef?.current?.focus();
    }
  }, [tempFieldRef]);

  return isServer() ? null : (
    <>
      {showCountries ? (
        <div className={styles.mostIncreasesdrawerHeight}>
          <div className={styles.row}>
            <p className={[styles.name, styles.text24].join(' ')}>
              Country Code
            </p>
            <Button
              disabled={!countryId}
              sx={{
                textTransform: 'capitalize',
                fontSize: 16,
                marginTop: 4,
                color: Branding.Colors.blue.variant_10,
                bottom: 10
              }}
              size="small"
              variant="text"
              className={styles?.updateBtn}
              onClick={() => {
                setShowCountries(false);
              }}
            >
              Select
            </Button>
          </div>
          <CountryModalContent
            searchedCountry={searchedCountry}
            handleSearch={handleSearch}
            allCountries={allCountries}
            setCountryCode={setCountryCode}
            setCountryId={setCountryId}
            setSelectedCountry={setSelectedCountry}
            countryId={countryId}
            onMobile={true}
            setNewCountry={setNewCountry}
          />
        </div>
      ) : (
        <>
          <div
            className={
              increaseHeight
                ? styles.mostIncreasesdrawerHeight
                : value === 3 || displayData?.lessIncreasesdHeight
                ? styles.increasesdrawerHeight
                : styles.drawerHeight
            }
          >
            <div className={styles.row}>
              <p className={[styles.name, styles.text24].join(' ')}>
                {displayData?.fieldHeader}
              </p>
              <Button
                disabled={
                  !showSuccess || (displayData.change === 3 && !successSecond)
                }
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
                  if (displayData.change === 6) {
                    setDisplayName(tempText);
                    displayData?.updateAction();
                    updateDisplayName();
                  }
                  if (displayData.change === 7) {
                    setTagName(tempText);
                    displayData?.updateAction();
                    updateTagLine();
                  }
                  if (displayData.change === 8) {
                    setAboutMe(tempText);
                    displayData?.updateAction();
                    updateAboutMe();
                  }
                  if (displayData.change === 1) {
                    displayData?.updateAction();
                    updateUserNameAction();
                  }
                  if (displayData.change === 2) {
                    displayData?.updateAction();
                    changeEmailAction();
                  }
                  if (displayData.change === 3) {
                    displayData?.updateAction();
                    changeUserPasswordAction();
                  }
                  if (displayData.change === 4) {
                    displayData?.updateAction();
                    sendOtp();
                    setSwitchToCode(true);
                    setDisplayData(data(4));
                  }

                  if (displayData.change === 9) {
                    displayData?.updateAction();
                    updateUserFirstAndLastName();
                  }

                  //  else {
                  //   updateAction(tempText);
                  // }
                  // except 4 always close the modal
                  if (displayData.change !== 4) {
                    toggleVisibleText();
                  }
                }}
              >
                {displayData.updateBtn}
              </Button>
            </div>

            {displayData.change === 4 || displayData.change === 5 ? (
              <>
                {switchToCode ? (
                  <div>
                    <p className={styles.centerSms}>
                      SMS sent to {`+${newCountry?.dial_code} ${newMobile}`}{' '}
                    </p>
                    <p className={styles.blackSms}>
                      Enter your Confirmation Code
                    </p>

                    <div className={styles.center}>
                      <ReactCodeInput
                        value={userTypedCode}
                        name="resetPassword"
                        inputMode="numeric"
                        fields={6}
                        type="text"
                        onChange={handleResetPassword}
                        isValid={isValidForgotPassword}
                      />
                      <div className={styles.mt16}>
                        <Countdown
                          ref={countdown}
                          // 300000
                          date={
                            (currentTime ? currentTime : Date.now()) + 300000
                          }
                          // now
                          renderer={renderer}
                          onStart={e => {
                            setCurrentTime(Date.now());
                          }}
                          onMount={time => {}}
                          onComplete={time => {}}
                          key={restartCounter}
                        />
                      </div>
                      <Button
                        sx={{
                          textTransform: 'capitalize',
                          color: Branding.Colors.primary.normal
                        }}
                        variant="text"
                        onClick={sendOtp}
                      >
                        Resend Code
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <TextField
                      disabled={displayData.currentMobileDisabled}
                      type={displayData.type}
                      hiddenLabel={hiddenLabel}
                      variant="outlined"
                      className={styles.textField}
                      sx={{
                        mt: 4,
                        width: '100%',
                        borderRadius: 2,
                        '&.MuiFilledInput-root': {
                          backgroundColor: Branding.Colors.white
                        },
                        '&.Mui-focused fieldset': {
                          backgroundColor: Branding.Colors.white,
                          borderColor: 'transparent'
                        }
                      }}
                      value={userCode && `${userCode}${mobile}`}
                      onChange={(e: any) => {
                        setTempTextConfirm(e.target.value);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="start"
                            >
                              {currentMobileCountry?._id && (
                                <Avatar
                                  alt={`${currentMobileCountry?.flag} flag`}
                                  src={currentMobileCountry?.flag}
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    marginRight: 1
                                  }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      label={!hiddenLabel && displayData.firstField}
                    />

                    <div className={styles.row}>
                      <TextField
                        disabled
                        type={displayData.type}
                        hiddenLabel={hiddenLabel}
                        variant="outlined"
                        className={styles.textField}
                        sx={{
                          mt: 4,
                          width: '32%',
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
                        value={
                          newCountry?.dial_code && `+${newCountry?.dial_code}`
                        }
                        onChange={(e: any) => {
                          setTempTextConfirm(e.target.value);
                        }}
                        onClick={() => {
                          setShowCountries(true);
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="start"
                                onClick={() => {
                                  setShowCountries(true);
                                }}
                              >
                                {newCountry?._id && (
                                  <Avatar
                                    alt={`${newCountry?.flag} flag`}
                                    src={newCountry?.flag}
                                    sx={{
                                      width: 24,
                                      height: 24
                                      // marginRight: 1
                                    }}
                                  />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        label={!hiddenLabel && displayData.secondField}
                      />
                      <TextField
                        type="number"
                        hiddenLabel={true}
                        helperText={
                          showSuccess ? (
                            <span className={styles.successicon}>
                              {displayData.successMessage}
                            </span>
                          ) : (
                            newMobile.length > 0 && (
                              <span className={styles.warnicon}>
                                {displayData.errorMessage}
                              </span>
                            )
                          )
                        }
                        variant="outlined"
                        className={styles.textField}
                        sx={{
                          mt: 4,
                          width: '65%',
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
                        value={newMobile}
                        onChange={(e: any) => {
                          setNewMobile(e.target.value);
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                              >
                                {showSuccess ? (
                                  <CheckCircleIcon
                                    className={styles.successicon}
                                  />
                                ) : (
                                  newMobile.length > 0 && (
                                    <CancelIcon className={styles.warnicon} />
                                  )
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  </>
                )}
              </>
            ) : (
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
                    (showSuccess === false || showSuccess === true) &&
                    !showSuccess
                  }
                  helperText={
                    showSuccess ? (
                      <span className={styles.successicon}>
                        {displayData.successMessage}
                      </span>
                    ) : (
                      tempText?.length > 0 && (
                        <span className={styles.alerticon}>
                          {showSecondaryError
                            ? displayData?.seondaryErrorMessage
                            : displayData.errorMessage}
                        </span>
                      )
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
                              tempText?.length > 0 && (
                                <CancelIcon className={styles.alerticon} />
                              )
                            )
                          ) : null}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                {(increaseHeight || displayData.lessIncreasesdHeight) && (
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
                                : tempTextConfirm.length > 0 &&
                                  displayData.errorMessageSecond}
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
                                  <CheckCircleIcon
                                    className={styles.successicon}
                                  />
                                ) : (
                                  tempTextConfirm.length > 0 && (
                                    <CancelIcon className={styles.alerticon} />
                                  )
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
        </>
      )}
    </>
  );
};

export default DrawerTextInput;
