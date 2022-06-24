/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Styles } from './style';
import ModalLayout from 'components/Atoms/modal';
import ModalHeaderAuth from 'components/Molecules/modalHeaderAuth';
import {
  generateArrayOfYears,
  generateDates,
  getNumberOfYear,
  MONTHS,
  MONTHS30,
  onMobile
} from 'utilities/utils';
import QAvatar from 'components/Atoms/avatar';
import { api, userAPI } from 'services/userAPI';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import StarIcon from '@mui/icons-material/Star';
import { Button, TextField } from '@mui/material';
import QRating from 'components/Atoms/Qrating';
import Success from 'components/Molecules/success';
import LottieAnimation from 'components/Atoms/lottie';
import AuthenticationLayout from 'components/Layouts/authenticationLayout';
import InputCode from 'components/Organisms/InputCode';
import ResetPassword from 'components/Organisms/resetPassword';
import ForgotPassword from 'components/Organisms/ForgotPassword';
import * as animationData from '../../../assets/lotties/loaders/login.json';
import * as ratingLottie from '../../../assets/lotties/rating-lottie.json';
import * as SignupData from '../../../assets/lotties/loaders/signup_submit_loader.json';

import { imageAPI } from 'services/imageAPI';
import { useSelector } from 'react-redux';
import { useAuthentication } from 'container/authentication';
import { ratingAPI } from 'services/ratingAPI';
import CropImage from 'components/Molecules/cropImange';
import NewToast from 'components/Atoms/newToast';
import { useDispatch } from 'react-redux';
import { hideNotification } from 'redux/Action/auth/authActions';
import SocialMediaAuthentication from 'components/Molecules/socialMediaAuthentication';
import CreateUserProfile from '../CreateUserProfile';
import { appAPI } from 'services/appApi';
import 'moment-timezone';
import moment from 'moment';
import Text from '../../Atoms/text';
import { getUserProfile } from 'redux/Action/user/userActions';
import { placeProfile } from 'redux/Action/app/appActions';
import ModalHeader from 'components/Molecules/modalHeader';
import { AuthAPI } from 'services/authAPI';
import EmailUnverified from '../emailUnverified';
import { useParser } from 'utilities/hook/useParser';

const RatingManagement = ({
  toggleModal,
  place,
  setShowModal,
  setSuccessRating,
  showModal,
  successRating,
  showNotLoggedInModal,
  setShowNotLoggedInModal,
  toggleShowNotLoggedInModal,
  setShowNotLoggedIn,
  showNotLogged,
  unverifiedUser,
  setUnVerifiedUser
}: any) => {
  const styles = Styles();
  const reduxProfile = useSelector((state: any) => state.user.profile);
  const geoLocation = useSelector((state: any) => state.user.geolocation);

  const { parserData } = useParser();

  const {
    signinButtonHandler,
    signupButtonHandler,
    handleGoogleLogin
  } = useAuthentication();
  const authReducer = useSelector((state: any) => state.auth);

  let COUNT = 1;
  const [terms, setTerms] = useState({
    state: false,
    title: '',
    content: ''
  });

  const [rate, setRate] = useState(0);
  const [review, setReview] = useState('');
  const scrollTrackingRef = useRef(null);
  const [avatar, setAvatar] = useState<FormData>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageKey, setImageKey] = useState('');
  const countdown: React.Ref<any> = useRef<HTMLInputElement | null>(null);
  const uploadRef = useRef<HTMLInputElement>(null);

  // create profile
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryId, setCountryId] = useState(false);
  const [allCountries, setAllCountries] = useState([]);
  const [allOriginalCountries, setAllOriginalCountries] = useState([]);

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [genders, setGenders] = useState(['female', 'male']);

  const [month, setMonth] = useState<any>('');
  const [year, setYear] = useState('');
  const [bdayDate, setBdayDate] = useState('');
  const [dates, setDates] = useState(generateDates(1, 31));
  const [months, setMonths] = useState(MONTHS);
  const [years, setYears] = useState(generateArrayOfYears());

  // const [showNotLoggedInModal, setShowNotLoggedInModal] = useState(false);
  // const [showNotLogged, setShowNotLoggedIn] = useState<any>(false);
  const [showLoginForm, setShowLoginForm] = useState<any>(false);
  const [showRegisterForm, setShowRegisterForm] = useState<any>(false);
  //   const [successRating, setSuccessRating] = useState(false);
  const [authType, setAuthType] = useState('');

  const [registerProcess, setRegisterProcess] = useState(false);
  const [loadingRegisterProcess, setLoadingRegisterProcess] = useState<any>(
    false
  );
  const [userJustLoggedIn, setUserJustLoggedIn] = useState<any>(false);

  const [forgotPasswordModal, setForgotPasswordModal] = useState<any>(false);
  const [forgotPasswordInputCode, setForgotPasswordInputCode] = useState<any>(
    false
  );
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<any>(false);
  const [successPassword, setSuccessPassword] = useState<any>(false);
  const [email, setEmail] = useState('');
  const [isValidForgotPassword, setIsValidForgotPassword] = useState(false);
  const [originalCode, setOriginalCode] = useState('');
  const [userTypedCode, setUserTypedCode] = useState('');
  const [currentTime, setCurrentTime] = useState<number>(0);

  const [
    successRegisterationProcess,
    setSuccessRegisterationProcess
  ] = useState<any>(false);
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserConfirmPassword, setNewUserConfirmPassword] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [timeUpForCode, setTimeUpForCode] = useState<any>(false);
  const [restartCounter, setRestartCounter] = useState<any>('');
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [toastType, setToastType] = useState<
    'error' | 'warning' | 'info' | 'success' | undefined
  >('error');

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

  const showToastFunc = (message: string) => {
    setShowToast(true);
    setMessage(message);
    setToastType('success');
  };

  // useEffect(() => {
  //   const userprofile = JSON.parse(localStorage.getItem('profile')!);
  //   if (authType === 'register' && userprofile) {
  //     setRegisterProcess(true);
  //     setShowModal(false);
  //     setShowNotLoggedInModal(false);
  //     setShowNotLoggedIn(false);
  //     setShowLoginForm(false);
  //     setSuccessRating(false);
  //   }
  // }, [
  //   typeof window !== 'undefined' && localStorage.getItem('profile'),
  //   reduxProfile
  // ]);

  useEffect(() => {
    if (MONTHS30.indexOf(month) !== -1) {
      setDates(generateDates(1, 30));
    } else {
      setDates(generateDates(1, 31));
    }
  }, [month]);

  const getAllCountriesFunc = async () => {
    const countries = await appAPI.getAllCountries();
    setAllCountries(countries.data);
    setAllOriginalCountries(countries.data);
    // .country, .dial_code, .country_code
    countries?.data?.map((country: any) => {
      // if any country matches with users current country set the code to it
      if (country.country === geoLocation.country_name) {
        setCountryCode(country.dial_code);
        setCountryId(country._id.toString());
      }
    });
  };

  useEffect(() => {
    // get all countries
    getAllCountriesFunc();
  }, []);

  useEffect(() => {
    if (reduxProfile) {
      getRatingsForMarketPlace();
    }
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    typeof window !== 'undefined' && localStorage.getItem('profile'),
    reduxProfile
  ]);

  useEffect(() => {
    if (avatar) {
      uploadAvatarUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem('profile')!);

    if (JSON.parse(localStorage.getItem('profile')!)?.verified) {
      setUnVerifiedUser(false);
    }
    if (authType === 'register' && userprofile) {
      // setRegisterProcess(true);

      setLoadingRegisterProcess(true);
      setTimeout(function() {
        setLoadingRegisterProcess(false);
        setSuccessRegisterationProcess(true);
      }, 2000);

      setShowModal(false);
      setShowNotLoggedInModal(false);
      setShowNotLoggedIn(false);
      setShowLoginForm(false);
      setSuccessRating(false);
    }
  }, [
    typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('profile')!),
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

  // useEffect(() => {
  //   authReducer.userIsLogged &&
  //     authReducer.createdAnAccount &&
  //     authReducer.showNotification &&
  //     showToastFunc('Account successfullly created');
  //   dispatch(hideNotification());

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [authReducer.createdAnAccount]);

  const getRatingsForMarketPlace = async () => {
    const userprofile = JSON.parse(localStorage.getItem('profile')!);
    if (userprofile) {
      const result = await ratingAPI.getRating({
        marketplaceId: place._id,
        userId: userprofile._id
      });

      if (result.data.exists) {
        setRate(result.data.rating.rating);
        setReview(result.data.rating.review);
      }
      if (COUNT > 1 || userJustLoggedIn) {
        if (reduxProfile.verified) {
          setShowModal(true);
        } else {
          setUnVerifiedUser(true);
        }
        // setShowModal(true);
        setShowNotLoggedIn(false);
        setShowLoginForm(false);
        setShowNotLoggedInModal(false);
      }
      COUNT = COUNT + 1;
    }
  };

  const redirectAction = () => {
    if (authType === 'register') {
      setAuthType('login');
      setShowRegisterForm(false);
    } else {
      setAuthType('register');
      setShowRegisterForm(true);
    }
  };

  const toggleShowLoginform = () => {
    setShowLoginForm(!showLoginForm);
    setShowLoginForm(false);
    setShowNotLoggedInModal(false);
  };

  const handleForgot = () => {
    closeAllModal();
    setForgotPasswordModal(true);
    setShowForgotPassword(true);
  };

  const uploadAvatarUser = async () => {
    const image = await imageAPI.uploadThumbnail({
      formData: avatar
    });

    setImageKey(image.data);
  };

  const createUserProfile = async () => {
    setAuthType('');
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

      // update user profile in localStorage
      dispatch(
        getUserProfile(JSON.parse(localStorage.getItem('profile')!)?.email)
      );

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
          closeAllbutShowRating();
        }, 2000);
      }
      setTimeout(function() {
        setLoadingRegisterProcess(false);
      }, 5000);
    }
    // first save the avatar in the backend
    // then take the key and save it profile
  };

  const closeAllbutShowRating = async () => {
    // close both of them and decide what to show
    setUnVerifiedUser(false);
    setShowModal(false);

    if (JSON.parse(localStorage.getItem('profile')!)?.verified) {
      setShowModal(true);
    } else {
      setUnVerifiedUser(true);
      await userAPI.sendVerificationEmail(
        JSON.parse(localStorage.getItem('profile')!)?.email,
        JSON.parse(localStorage.getItem('profile')!)?._id
      );
    }

    setShowNotLoggedInModal(false);
    setShowNotLoggedIn(false);
    setShowLoginForm(false);
    setSuccessRating(false);
    setShowRegisterForm(false);
    setRegisterProcess(false);
    setUserJustLoggedIn(false);
    setSuccessRegisterationProcess(false);

    setForgotPasswordModal(false);
    setForgotPasswordInputCode(false);
    setNewPassword(false);
    setSuccessPassword(false);
  };
  const closeAllModal = () => {
    setUnVerifiedUser(false);
    setShowModal(false);
    setShowNotLoggedInModal(false);
    setShowNotLoggedIn(false);
    setShowLoginForm(false);
    setSuccessRating(false);
    setShowRegisterForm(false);
    setRegisterProcess(false);
    setUserJustLoggedIn(false);
    setSuccessRegisterationProcess(false);

    setForgotPasswordModal(false);
    setForgotPasswordInputCode(false);
    setNewPassword(false);
    setSuccessPassword(false);

    setPasswordsDontMatch(false);
    setEmailInvalid(false);
    setCurrentTime(0);
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
      setEmailInvalid(false);
      setShowForgotPassword(false);
    } else {
      setEmailInvalid(true);
    }
  };

  const resendCodeForPassword = async () => {
    // remove user typed code
    setUserTypedCode('');

    // start from this timer
    setCurrentTime(Date.now());

    // start the timer again
    setRestartCounter(Math.floor(Math.random() * 100));

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
  const handleResendVerification = async () => {
    const result = await AuthAPI.resendVerifictionEmail({
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });
    console.log('result', result);
    if (result.status === 200) {
      setRestartCounter(Math.floor(Math.random() * 100));
    }
  };

  const handleResetPassword = (e: any) => {
    setUserTypedCode(e);
    if (e.toString() === originalCode.toString()) {
      setIsValidForgotPassword(true);
    } else {
      setIsValidForgotPassword(false);
    }
  };

  const handleReview = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed || (!restartCounter && timeUpForCode)) {
      setTimeUpForCode(true);
      // Render a completed state
      return (
        <QText
          label={'Code expired'}
          labelStyle={{ fontSize: 14 }}
          labelColor={Branding.Colors.danger.normal}
        />
      );
    } else {
      // Render a countdown
      return (
        <QText
          label={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
          labelStyle={{ fontSize: 14 }}
          labelColor={Branding.Colors.green.variant_2}
        />
      );
    }
  };

  const showNewPasswordContent = () => {
    if (isValidForgotPassword && !timeUpForCode) {
      setForgotPasswordInputCode(false);
      setNewPassword(true);
    }
  };

  const confirmUserPassword = async () => {
    if (newUserPassword === newUserConfirmPassword) {
      setPasswordsDontMatch(false);
      // change user password
      const changePassword = await userAPI.finalForgotPassword({
        password: newUserPassword,
        resetCode: originalCode
      });

      if (changePassword.status === 200 || changePassword.status === 201) {
        setNewPassword(false);
        setSuccessPassword(true);
        // forgotPasswordModal
        setTimeout(function() {
          setForgotPasswordModal(false);
        }, 4000);
      }
    } else {
      setPasswordsDontMatch(true);
      setUserTypedCode('');
    }
  };

  const showLogin = () => {
    setShowNotLoggedIn(false);
    setShowLoginForm(true);
    setAuthType('login');
    setUserJustLoggedIn(true);
  };

  const showRegister = () => {
    setShowNotLoggedIn(false);
    setShowLoginForm(true);
    setShowRegisterForm(true);
    setAuthType('register');
  };

  const sendRating = async () => {
    const profile = JSON.parse(localStorage.getItem('profile')!);

    if (!profile) {
      toggleModal();
      toggleShowNotLoggedInModal();
      setShowNotLoggedIn(true);
    } else {
      // means authtype is signin
      const result = await ratingAPI.createRating({
        marketplaceId: place._id,
        rating: rate,
        review,
        userId: profile?._id
      });

      if (result.status === 200) {
        // so it doesnot close anything because registeration finished
        setAuthType('');
        // close everything it is rated
        setShowModal(true);
        setShowNotLoggedInModal(false);
        setShowNotLoggedIn(false);
        setShowLoginForm(false);
        setSuccessRating(true);
      }
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

      <ModalLayout
        openModal={unverifiedUser}
        handleCloseModal={closeAllModal}
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 570
            : 296
        }
        modalWidth={onMobile() ? window.outerWidth : 496}
      >
        <ModalHeaderAuth
          title={'Please verify your email'}
          // closeButton
          // onCloseButtonClick={closeAllModal}
        />
        <EmailUnverified
          countdown={countdown}
          currentTime={currentTime}
          renderer={renderer}
          setCurrentTime={setCurrentTime}
          restartCounter={restartCounter}
          handleResendVerification={handleResendVerification}
          closeAllModal={closeAllModal}
        />
      </ModalLayout>
      {/* window.innerHeight / 1.25 */}
      <ModalLayout
        openModal={showModal}
        handleCloseModal={toggleModal}
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 588
            : 588
        }
        modalWidth={onMobile() ? window.outerWidth : 750}
      >
        <ModalHeaderAuth
          title={'Rate Us'}
          closeButton={!successRating}
          onCloseButtonClick={closeAllModal}
        />
        <div className={styles.container}>
          <QAvatar
            avatar={
              `${api}/profile/uploads/${place.images[0]}` ??
              '"../../../assets/images/avatar.png"'
            }
            avatarStyle={{
              width: 127,
              height: 127,
              border: `2px solid white`,
              objectFit: 'cover'
            }}
          />
          <QText
            label={place.name}
            labelStyle={{
              fontSize: 28,
              fontWeight: 'bold'
            }}
            labelColor={Branding.Colors.primary.dark}
          />

          {successRating ? (
            <>
              <QText
                label={rate}
                labelColor={Branding.Colors.white}
                labelStyle={{
                  fontSize: 32,
                  position: 'relative',
                  top: 85,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  margin: 0
                }}
              />

              <StarIcon className={styles.star} sx={{ fontSize: 120 }} />

              <QText
                label={'Submitted! Thanks for your feedback.'}
                labelStyle={{ fontSize: 16 }}
                labelColor={Branding.Colors.black[86]}
              />

              <Button
                onClick={() => {
                  closeAllModal(), location.reload();
                }}
                variant="text"
                style={{
                  backgroundColor: `${
                    rate > 0
                      ? Branding.Colors.primary.normal
                      : Branding.Colors.black[36]
                  }`,
                  color: Branding.Colors.white,
                  width: 208,
                  height: 48,
                  borderRadius: 12,
                  marginTop: 30
                }}
              >
                <p className={styles.label}>Done</p>
              </Button>
            </>
          ) : (
            <>
              <div className={styles.mt16}>
                <QRating
                  precision={1.0}
                  rate={rate}
                  size="large"
                  noContainer={true}
                  onChange={(event: any, newValue: any) => {
                    setRate(newValue);
                    // setValue(newValue);
                  }}
                />
              </div>
              <TextField
                value={review}
                onChange={handleReview}
                label={'Write your review here...'}
                rows={2}
                multiline
                fullWidth
                className={styles.containerFill}
              />
              <Button
                disableElevation
                disabled={rate === 0}
                onClick={sendRating}
                variant="text"
                style={{
                  backgroundColor: `${
                    rate > 0
                      ? Branding.Colors.primary.normal
                      : Branding.Colors.black[36]
                  }`,
                  color: Branding.Colors.white,
                  width: 208,
                  height: 48,
                  borderRadius: 12,
                  marginTop: 30
                }}
              >
                <p className={styles.label}>Submit Review</p>
              </Button>
            </>
          )}
        </div>
      </ModalLayout>

      {/* window.innerHeight / 1.05 */}
      <ModalLayout
        openModal={registerProcess}
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
        modalWidth={onMobile() ? window.outerWidth : 720}
      >
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
                closeAll={closeAllbutShowRating}
              />
            </div>
          </>
        )}

        {/* // TODO */}
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
            setCountryId={setCountryId}
            countryId={countryId}
            allOriginalCountries={allOriginalCountries}
            setAllCountries={setAllCountries}
          />
        )}
      </ModalLayout>

      {/* window.innerHeight / 1.05 */}
      <ModalLayout
        openModal={showNotLoggedInModal}
        handleCloseModal={closeAllModal}
        modalStyle={styles.modal}
        modalHeight={
          onMobile()
            ? window.outerHeight
            : typeof window !== 'undefined'
            ? 600
            : 730
        }
        modalWidth={onMobile() ? window.outerWidth : 750}
      >
        {showNotLogged && (
          <div className={styles.centerDiv}>
            <ModalHeader
              title={'Whoops!'}
              closeButton
              onCloseButtonClick={closeAllModal}
              subTitle={`You need to be logged in to rate \ud83d\ude05`}
              newSubtitle={true}
            />
            <div className={styles.container}>
              <LottieAnimation
                animationData={ratingLottie}
                height={192}
                width={192}
              />
              <QText
                label={"Let's get you sorted!"}
                labelStyle={{ fontSize: 22 }}
                labelColor={Branding.Colors.black[86]}
              />
              <div className={[styles.row, styles.mt].join(' ')}>
                <Button
                  onClick={showRegister}
                  variant="text"
                  style={{
                    backgroundColor: Branding.Colors.white,
                    color: Branding.Colors.primary.normal,
                    width: 112,
                    height: 40,
                    borderRadius: 12,
                    marginRight: 16,
                    border: `1px solid ${Branding.Colors.primary.normal}`
                  }}
                  disableElevation
                >
                  <p className={styles.label}>Sign up</p>
                </Button>
                <Button
                  onClick={showLogin}
                  variant="text"
                  style={{
                    backgroundColor: Branding.Colors.primary.normal,
                    color: Branding.Colors.white,

                    width: 112,
                    height: 40,
                    borderRadius: 12
                  }}
                  disableElevation
                >
                  <p className={styles.label}>Login</p>
                </Button>
              </div>
              <div className={styles.socialMedia}>
                <SocialMediaAuthentication
                  dividerLabel={'Continue'}
                  handleGoogleLogin={handleGoogleLogin}
                />
              </div>
              <div onClick={closeAllModal}>
                <Text
                  label={'Maybe Later'}
                  labelStyle={{
                    fontSize: 14,
                    marginTop: 10,
                    cursor: 'pointer'
                  }}
                  labelColor={Branding.Colors.black[60]}
                />
              </div>
            </div>
          </div>
        )}

        {showLoginForm && (
          <>
            {showRegisterForm ? (
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
                // onCloseButtonClick={toggleShowLoginform}
                onCloseButtonClick={closeAllModal}
                redirectAction={redirectAction}
              />
            ) : (
              <AuthenticationLayout
                terms={setTerms}
                buttonLabel="LOGIN"
                switchLayoutButtonLabel=" Signup"
                switchLayoutButtonLink="/signup"
                onClickHandler={signinButtonHandler}
                loading={false}
                rate={true}
                closeButton
                onCloseButtonClick={closeAllModal}
                handleForgot={handleForgot}
                redirectAction={redirectAction}
              />
            )}
          </>
        )}
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
          </div>
        )}
        {newPassword && (
          <div
            className={[
              onMobile() ? styles.noMobileCentercontainer : styles.container,
              styles.centerContainer
            ].join(' ')}
          >
            <ModalHeaderAuth
              title={'New Password'}
              // closeButton
              // onCloseButtonClick={closeAllModal}
            />
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
                closeAll={() => {
                  toggleShowNotLoggedInModal();
                  setShowNotLoggedIn(true);
                }}
                showDone
              />
            </div>
          </>
        )}
        {!forgotPasswordInputCode &&
          !newPassword &&
          !successPassword &&
          showForgotPassword && (
            <div
              style={{
                position: 'inherit',
                width: '100%',
                margin:
                  parserData.device.type === 'mobile' ? '20% auto 0px' : 'none'
              }}
            >
              <ModalHeaderAuth
                title={'Forgot Password'}
                closeButton={!onMobile() ? true : false}
                onCloseButtonClick={closeAllModal}
              />
              {/* // TODO */}
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

export default RatingManagement;
