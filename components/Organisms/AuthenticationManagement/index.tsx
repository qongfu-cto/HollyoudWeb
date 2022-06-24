import ModalLayout from 'components/Atoms/modal';
import AuthenticationLayout from 'components/Layouts/authenticationLayout';
import { useAuthentication } from 'container/authentication';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  generateArrayOfYears,
  MONTHS,
  onMobile,
  generateDates,
  MONTHS30,
  getNumberOfYear
} from 'utilities/utils';
import { useSelector } from 'react-redux';
import { Styles } from './style';
import { userAPI } from 'services/userAPI';
import LottieAnimation from 'components/Atoms/lottie';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import * as SignupData from '../../../assets/lotties/loaders/signup_submit_loader.json';
import ModalHeaderAuth from 'components/Molecules/modalHeaderAuth';
import Success from 'components/Molecules/success';

import CropImage from 'components/Molecules/cropImange';
import { imageAPI } from 'services/imageAPI';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../resetPassword';
import InputCode from '../InputCode';
import { useDispatch } from 'react-redux';

import NewToast from 'components/Atoms/newToast';
import { hideNotification } from 'redux/Action/auth/authActions';
import { appAPI } from '../../../services/appApi';
import CreateUserProfile from '../CreateUserProfile';
import 'moment-timezone';
import moment from 'moment';
import { getUserProfile } from 'redux/Action/user/userActions';
import { Button } from '@mui/material';
import { useParser } from 'utilities/hook/useParser';

const AuthenticationManagement = ({
  open,
  showModal,
  toggleModal,
  setOpen,
  setShowModal,
  forgotPassword,
  setOpenForgot,
  setSearchText
}: any) => {
  const dispatch = useDispatch();
  const countdown: React.Ref<any> = useRef<HTMLInputElement | null>(null);
  const [showSecondModal, setShowSecondModal] = useState<any>(false);

  const uploadRef = useRef<HTMLInputElement>(null);

  const reduxProfile = useSelector((state: any) => state.user.profile);
  const geoLocation = useSelector((state: any) => state.user.geolocation);
  const authReducer = useSelector((state: any) => state.auth);
  const [avatar, setAvatar] = useState<FormData>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // create profile
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryId, setCountryId] = useState();
  const [allCountries, setAllCountries] = useState([]);
  const [allOriginalCountries, setAllOriginalCountries] = useState([]);

  const [userName, setUserName] = useState('');
  const [genders, setGenders] = useState(['male', 'female']);
  const [selectedGender, setSelectedGender] = useState(genders[0]);

  const [month, setMonth] = useState<any>('');
  const [year, setYear] = useState('');
  const [bdayDate, setBdayDate] = useState('');
  const [dates, setDates] = useState(generateDates(1, 31));
  const [months, setMonths] = useState(MONTHS);
  const [years, setYears] = useState(generateArrayOfYears());

  useEffect(() => {
    if (MONTHS30.indexOf(month) !== -1) {
      setDates(generateDates(1, 30));
    } else {
      setDates(generateDates(1, 31));
    }
  }, [month]);

  const [loadingRegisterProcess, setLoadingRegisterProcess] = useState<any>(
    false
  );
  const [imageKey, setImageKey] = useState('');
  const [
    successRegisterationProcess,
    setSuccessRegisterationProcess
  ] = useState<any>(false);

  const [successPassword, setSuccessPassword] = useState<any>(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState<any>(false);
  const [forgotPasswordInputCode, setForgotPasswordInputCode] = useState<any>(
    false
  );
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserConfirmPassword, setNewUserConfirmPassword] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [timeUpForCode, setTimeUpForCode] = useState<any>(false);
  const [restartCounter, setRestartCounter] = useState<any>('');
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [newPassword, setNewPassword] = useState<any>(false);
  const [email, setEmail] = useState('');
  const [isValidForgotPassword, setIsValidForgotPassword] = useState(false);
  const [originalCode, setOriginalCode] = useState('');
  const [userTypedCode, setUserTypedCode] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [userNameError, setUserNameError] = useState(false);
  const [toastType, setToastType] = useState<
    'error' | 'warning' | 'info' | 'success' | undefined
  >('error');

  const { parserData } = useParser();
  const styles: any = Styles();

  useEffect(() => {
    forgotPassword && setForgotPasswordModal(true);
  }, [forgotPassword]);

  const getAllCountriesFunc = async () => {
    const countries = await appAPI.getAllCountries();
    setAllCountries(countries.data);
    setAllOriginalCountries(countries.data);

    countries?.data?.map((country: any) => {
      // if any country matches with users current country set the code to it
      if (
        country?.country?.toLowerCase() ===
        geoLocation?.country_name?.toLowerCase()
      ) {
        setCountryCode(country.dial_code);
        setCountryId(country._id.toString());
      }
    });
    // .country, .dial_code, .country_code
  };

  useEffect(() => {
    // get all countries
    getAllCountriesFunc();
  }, []);

  const handleCountryCode = (event: any) => {
    const {
      target: { value }
    } = event;

    setCountryCode(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleGender = (event: any) => {
    const {
      target: { value }
    } = event;

    setSelectedGender(typeof value === 'string' ? value.split(',') : value);
  };

  const { signinButtonHandler, signupButtonHandler } = useAuthentication();
  const [terms, setTerms] = useState({
    state: false,
    title: '',
    content: ''
  });

  const uploadAvatarUser = async () => {
    const image = await imageAPI.uploadThumbnail({
      formData: avatar
    });

    setImageKey(image.data);
  };

  const redirectAction = () => {
    if (open === 'register') {
      setOpen('login');
    } else {
      setOpen('register');
    }
  };

  const closeAllModal = () => {
    setShowSecondModal(false);
    setShowModal(false);
    setForgotPasswordModal(false);

    setEmailInvalid(false);
    setTimeUpForCode(false);
    setPasswordsDontMatch(false);
    setNewPassword(false);
    setIsValidForgotPassword(false);
    setOriginalCode('');
    setUserTypedCode('');
    setOpen('');
    setCurrentTime(0);
  };

  const closeAllAndShowSignup = () => {
    setShowSecondModal(false);

    // if user forgots password from change password button means he is logged in no need to show sign in button
    if (!forgotPassword) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    setForgotPasswordModal(false);
    setOpenForgot(false);

    setEmailInvalid(false);
    setTimeUpForCode(false);
    setPasswordsDontMatch(false);
    setNewPassword(false);
    setIsValidForgotPassword(false);
    setOriginalCode('');
    setUserTypedCode('');
    setOpen('');
    setSuccessPassword(false);
    setCurrentTime(0);
  };

  const handleForgot = () => {
    closeAllModal();
    setForgotPasswordModal(true);
    setShowForgotPassword(true);
  };

  const handleResetPassword = (e: any) => {
    setUserTypedCode(e);
    if (e.toString() === originalCode.toString()) {
      setIsValidForgotPassword(true);
    } else {
      setIsValidForgotPassword(false);
    }
  };

  const showNewPasswordContent = () => {
    // setSearchText && setSearchText('');
    if (isValidForgotPassword && !timeUpForCode) {
      setNewPassword(true);
      setTimeout(function() {
        setForgotPasswordInputCode(false);
      }, 1000);
    }
  };

  const resendCodeForPassword = async () => {
    // remove user typed code
    setUserTypedCode('');
    // start the timer again
    setRestartCounter(Math.floor(Math.random() * 100));
    // start from this timer
    setCurrentTime(Date.now());
    const result = await userAPI.forgotPassword({
      email
    });
    if (result.data.code) {
      setOriginalCode(result.data.code);
    } else {
      setEmailInvalid(true);
      setOriginalCode('');
    }
  };

  const sendForgotPasswordCode = async () => {
    // start the timer
    countdown?.current?.click();

    const result = await userAPI.forgotPassword({
      email
    });

    if (result.data.code) {
      closeAllModal();
      setOriginalCode(result.data.code);
      setForgotPasswordModal(true);
      setForgotPasswordInputCode(true);

      // close forgot password modal
      setShowForgotPassword(false);
      setEmailInvalid(false);
    } else {
      setEmailInvalid(true);
    }
  };

  const confirmUserPassword = async () => {
    if (newUserPassword === newUserConfirmPassword) {
      setPasswordsDontMatch(false);
      // change user password
      const changePassword = await userAPI.finalForgotPassword({
        // email,
        password: newUserPassword,
        // newPassword: newUserConfirmPassword,
        resetCode: originalCode
      });

      if (changePassword.status === 200 || changePassword.status === 201) {
        setNewPassword(false);
        setSuccessPassword(true);
      }
    } else {
      setPasswordsDontMatch(true);
      setUserTypedCode('');
    }
  };

  const showToastFunc = (message: string) => {
    setShowToast(true);
    setMessage(message);
    setToastType('success');
  };

  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem('profile')!);

    if (userprofile) {
      if (open === 'register') {
        setShowSecondModal(true);
      } else {
        setShowSecondModal(false);
        closeAllModal();
      }
      setShowModal(false);
    }
  }, [
    typeof window !== 'undefined' && localStorage.getItem('profile'),
    reduxProfile
  ]);

  useEffect(() => {
    authReducer.userIsLogged &&
      !authReducer.createdAnAccount &&
      authReducer.showNotification &&
      showToastFunc('Welcome back to QloudCity!');
    dispatch(hideNotification());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReducer.userIsLogged]);

  useEffect(() => {
    if (avatar) {
      uploadAvatarUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  const createUserProfile = async () => {
    if (firstName) {
      if (avatar) {
        const userAvatar = await userAPI.updateUserAccount({
          email: JSON.parse(localStorage.getItem('profile')!)?.email || '',
          avatar: imageKey
        });
      }

      const user = await userAPI.userProfile({
        first_name: firstName,
        last_name: lastName,
        email: JSON.parse(localStorage.getItem('profile')!)?.email || '',
        userName,
        phoneNumber:
          countryCode && mobileNumber ? `+${countryCode} ${mobileNumber}` : '',
        gender: selectedGender,
        dob: moment
          .tz(
            `${year}-${Number(getNumberOfYear(month))}-${bdayDate}`,
            geoLocation?.time_zone?.name
          )
          .toDate(),
        mobileCountry: countryId
      });

      setLoadingRegisterProcess(true);

      if (user.status === 200) {
        setTimeout(function() {
          setLoadingRegisterProcess(false);
          setSuccessRegisterationProcess(true);
        }, 1000);
        setTimeout(function() {
          // close success message modal
          setSuccessRegisterationProcess(false);
        }, 2000);
        setTimeout(function() {
          // close all and show rating now
          closeAllModal();

          // update user profile in localStorage
          dispatch(
            getUserProfile(JSON.parse(localStorage.getItem('profile')!)?.email)
          );
        }, 2000);
      }
      setTimeout(function() {
        setLoadingRegisterProcess(false);
      }, 5000);
    }
    // first save the avatar in the backend
    // then take the key and save it profile
  };

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed || (!restartCounter && timeUpForCode)) {
      setTimeUpForCode(true);
      // Render a completed state
      return (
        <div style={{ margin: '8px auto 16px'}}>
          <QText
            label={'Code expired'}
            labelStyle={{ fontSize: 14 }}
            labelColor={Branding.Colors.danger.normal}
          />
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div style={{ margin: '8px auto 16px'}}>
          <QText
            label={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            labelStyle={{ fontSize: 14 }}
            labelColor={Branding.Colors.green.variant_2}
          />
        </div>
      );
    }
  };

  return (
    <>
      <CropImage
        ref={uploadRef}
        imageResult={setAvatar}
        container={styles.icon}
        sendImages
        circularCrop={true}
      >
        <span></span>
      </CropImage>
      <NewToast
        message={message}
        type={toastType}
        visible={showToast}
        setVisible={setShowToast}
        duration={2000}
      />
      {/* window.innerHeight / 1.025 */}
      <ModalLayout
        openModal={showModal}
        handleCloseModal={closeAllModal}
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 580
            : 730
        }
        modalWidth={onMobile() ? window.outerWidth : 750}
      >
        {open === 'register' ? (
          <AuthenticationLayout
            signup
            terms={setTerms}
            buttonLabel="Sign Up Now"
            switchLayoutButtonLabel={'Login'}
            switchLayoutButtonLink="/signin"
            onClickHandler={signupButtonHandler}
            loading={false}
            rate={true}
            closeButton
            onCloseButtonClick={closeAllModal}
            redirectAction={redirectAction}
          />
        ) : (
          <AuthenticationLayout
            terms={setTerms}
            buttonLabel="LOGIN"
            switchLayoutButtonLabel=" Signup"
            switchLayoutButtonLink="/signup"
            onClickHandler={() => {
              signinButtonHandler();
            }}
            loading={false}
            rate={true}
            closeButton
            onCloseButtonClick={closeAllModal}
            handleForgot={handleForgot}
            redirectAction={redirectAction}
          />
        )}
      </ModalLayout>
      {/* // to be deleted */}
      <ModalLayout
        openModal={false}
        handleCloseModal={
          loadingRegisterProcess || successRegisterationProcess
            ? closeAllModal
            : () => {}
        }
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 450
            : 730
        }
        modalWidth={
          onMobile()
            ? window.outerWidth
            : !loadingRegisterProcess && !successRegisterationProcess
            ? 720
            : 750
        }
      >
        <>
          <ModalHeaderAuth
            title={'Add Mobile Number'}
            // closeButton
            // onCloseButtonClick={closeAllModal}
          />
          <div
            className={[
              styles.container,
              onMobile() ? styles.minHeightMobile : styles.minHeight
            ].join(' ')}
          >
            <QText
              label={`Add your mobile number for extra security. We will send a message to confirm your number.`}
              labelStyle={{
                fontSize: 16,
                marginTop: 10,
                fontFamily: 'Roboto',
                textAlign: 'center'
              }}
              labelColor={Branding.Colors.primary.dark}
            />
            <Button
              onClick={closeAllModal}
              variant="text"
              style={{
                backgroundColor: Branding.Colors.primary.normal,
                color: Branding.Colors.white,
                width: 156,
                height: 48,
                borderRadius: 12,
                marginTop: 'auto'
              }}
            >
              <p className={styles.label}>Okay</p>
            </Button>
          </div>
        </>
      </ModalLayout>

      {/* window.innerHeight / 1.05 */}
      <ModalLayout
        openModal={showSecondModal}
        handleCloseModal={
          loadingRegisterProcess || successRegisterationProcess
            ? closeAllModal
            : () => {}
        }
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 450
            : 730
        }
        modalWidth={
          onMobile()
            ? window.outerWidth
            : !loadingRegisterProcess && !successRegisterationProcess
            ? 720
            : 750
        }
      >
        <>
          {loadingRegisterProcess && (
            <>
              <div className={styles.container}>
                <LottieAnimation
                  animationData={SignupData}
                  height={256}
                  width={256}
                />
                <QText
                  label={'Please wait'}
                  labelStyle={{ fontSize: 32 }}
                  labelColor={Branding.Colors.primary.normal}
                />
                <QText
                  label={'We are submitting your registeration to the server.'}
                  labelStyle={{ fontSize: 16 }}
                  labelColor={Branding.Colors.black[86]}
                />
              </div>
            </>
          )}
          {successRegisterationProcess && (
            <>
              <ModalHeaderAuth
                title={''}
                // closeButton
                // onCloseButtonClick={closeAllModal}
              />
              <div className={styles.center}>
                <Success
                  message="Your account has been registered!"
                  closeAll={closeAllModal}
                  // showDone
                />
              </div>
            </>
          )}
          {!loadingRegisterProcess && !successRegisterationProcess && (
            <CreateUserProfile
              closeAllModal={closeAllModal}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              setMobileNumber={setMobileNumber}
              countryCode={countryCode}
              mobileNumber={mobileNumber}
              handleCountryCode={handleCountryCode}
              setCountryCode={setCountryCode}
              allCountries={allCountries}
              userName={userName}
              setUserName={setUserName}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              genders={genders}
              handleGender={handleGender}
              bdayDate={bdayDate}
              setBdayDate={setBdayDate}
              dates={dates}
              month={month}
              setYear={setYear}
              years={years}
              year={year}
              months={months}
              setMonth={setMonth}
              createUserProfile={createUserProfile}
              setUserNameError={setUserNameError}
              userNameError={userNameError}
              setCountryId={setCountryId}
              countryId={countryId}
              allOriginalCountries={allOriginalCountries}
              setAllCountries={setAllCountries}
            />
          )}
        </>
      </ModalLayout>

      {/* window.innerHeight / 1.05 */}
      <ModalLayout
        openModal={forgotPasswordModal}
        handleCloseModal={
          forgotPasswordInputCode || newPassword ? () => {} : closeAllModal
        }
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 450
            : 730
        }
        modalWidth={onMobile() ? window.outerWidth : 750}
      >
        {forgotPasswordInputCode && (
          <div
            className={[
              onMobile() ? styles.noMobileCentercontainer : styles.container,
              styles.centerContainer
            ].join(' ')}
          >
            <div style={{
                position: 'inherit',
                width: '100%',
                margin: 
                  parserData.device.type === 'mobile'
                    ? '20% auto 0px'
                    : 'none',
              }}>
              <ModalHeaderAuth
                title={'Input Code'}
                // closeButton
                // onCloseButtonClick={closeAllModal}
              />
            </div>
            <div className={onMobile() ? styles.centerForgot : undefined}>
              <InputCode
                containerStyle={
                  onMobile() ? styles.forgotContainer : styles.container
                }
                countdown={countdown}
                renderer={renderer}
                restartCounter={restartCounter}
                handleResetPassword={handleResetPassword}
                isValidForgotPassword={isValidForgotPassword}
                showNewPasswordContent={showNewPasswordContent}
                resendCodeForPassword={resendCodeForPassword}
                closeAll={closeAllModal}
                userTypedCode={userTypedCode}
                timeUpForCode={timeUpForCode}
                setCurrentTime={setCurrentTime}
                currentTime={currentTime}
              />
            </div>
          </div>
        )}
        {newPassword && (
          <div
            className={[
              onMobile() ? styles.noMobileCentercontainer : styles.container,
              styles.centerContainer
            ].join(' ')}
          >
            <div style={{
                position: 'inherit',
                width: '100%',
                margin: 
                  parserData.device.type === 'mobile'
                    ? '20% auto 0px'
                    : 'none',
            }}>
              <ModalHeaderAuth
                title={'New Password'}
                // closeButton
                // onCloseButtonClick={closeAllModal}
              />
            </div>

            <ResetPassword
              containerStyle={
                onMobile() ? styles.forgotContainer : styles.container
              }
              setNewUserPassword={setNewUserPassword}
              newUserPassword={newUserPassword}
              newUserConfirmPassword={newUserConfirmPassword}
              setNewUserConfirmPassword={setNewUserConfirmPassword}
              closeAll={closeAllModal}
              confirmUserPassword={confirmUserPassword}
              passwordsDontMatch={passwordsDontMatch}
              parserData={parserData}
            />
          </div>
        )}
        {successPassword && (
          <>
            <ModalHeaderAuth
              title={''}
              // closeButton
              // onCloseButtonClick={closeAllModal}
            />
            <div className={styles.center}>
              <Success
                message="Your password has been successfully changed!"
                closeAll={closeAllAndShowSignup}
                showDone
              />
            </div>
          </>
        )}
        {!forgotPasswordInputCode &&
          !newPassword &&
          !successPassword &&
          showForgotPassword && (
            <div style={{
              top: '0px !important'
            }}>
              <div style={{
                position: 'inherit',
                width: '100%',
                margin: 
                  parserData.device.type === 'mobile'
                    ? '20% auto 0px'
                    : 'none',
              }}>
                <ModalHeaderAuth
                  title={'Forgot Password'}
                  closeButton={!onMobile() ? true : false}
                  onCloseButtonClick={closeAllModal}
                />
              </div>
              <div className={onMobile() ? styles.centerForgot : undefined}>
                <ForgotPassword
                  closeAll={closeAllModal}
                  setEmail={setEmail}
                  emailInvalid={emailInvalid}
                  sendForgotPasswordCode={sendForgotPasswordCode}
                  email={email}
                  containerStyle={
                    onMobile() ? styles.forgotContainer : styles.container
                  }
                  parserData={parserData}
                />
              </div>
            </div>
          )}
      </ModalLayout>
    </>
  );
};
export default AuthenticationManagement;
