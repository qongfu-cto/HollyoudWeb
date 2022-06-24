import Img from 'components/Atoms/img';
import AuthenticationInputs from 'components/Molecules/authenticationInputs';
import OtpInputs from 'components/Molecules/otpInputs';
import PhoneNumberInputField from 'components/Molecules/phoneNumberInputField';
import ShowPasswordIcon from 'components/Molecules/showPasswordIcon';
import SuccessRegLoader from 'components/Molecules/SuccessRegLoader';
import UpdateProfileLoader from 'components/Molecules/UpdateProfileLoader';
import ProfilePageGeneralInfo from 'components/Organisms/profilePageGeneralInfo';
import ProfilePageInfo from 'components/Organisms/profilePageInfo';
import moment from 'moment';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useValidation } from 'utilities/hook/useValidation';
import usernameIcon from '../../assets/icons/usernameIcon.svg';
import * as userAction from '../../redux/Action/user/userActions';
import * as authAction from '../../redux/Action/auth/authActions';
import { userAPI } from '../../services/userAPI';
import { AuthAPI } from '../../services/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  UPDATE_ERROR,
  UPDATE_PROFILE_ERROR
} from 'redux/Action/user/userActionTypes';
import ModalHeader from 'components/Molecules/modalHeader';
import Success from 'components/Molecules/success';
import Error from 'components/Molecules/error';
import { isEmpty, isUndefined } from 'lodash';
import { SEND_OTP_RECEIVE } from 'redux/Action/auth/authActionTypes';

type authValid = {
  email: {
    value: string;
    state: boolean;
  };
  password: {
    value: string;
    state: boolean;
  };
  confirmPassword: { value: string; state: boolean };
  previousPassword: {
    value: string;
    state: boolean;
  };
};

interface ProfileContextProps {
  ProfileModals: () => stepperFlow;
  InactiveNextButton: boolean;
  backButtonHandler: () => void;
  skip: boolean;
  modalOpenHandler: (modal: number) => void;
  modalCloseHandler: VoidFunction;
  openModal: boolean;
  showLoading: boolean;
  onDateChangeHandler: (value: any) => void;
}

const ProfileContext = createContext<ProfileContextProps>(
  {} as ProfileContextProps
);

export const ProfileContainer = ({ children }: any) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => ({ ...state }));

  const [count, setCount] = useState(1);
  console.log('useruser ', user?.profile);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    Gender: '',
    dob: '',
    email: '',
    confirmPass: ''
  });
  const [message, setMessage] = useState('');
  const [confirmPassMessage, setConfirmPassMessage] = useState({
    error: false,
    message: ''
  });
  const [existPhoneMessage, setExistPhoneMessage] = useState({
    error: false,
    message: ''
  });
  const [authValid, setAuthValid] = useState<authValid>({
    email: {
      value: '',
      state: false
    },
    password: {
      value: '',
      state: false
    },
    confirmPassword: {
      value: '',
      state: false
    },
    previousPassword: {
      value: '',
      state: false
    }
  });
  //to active next button
  const [InactiveNextButton, setInactiveNextButton] = useState(true);
  //handle skip button
  const [skip, setSkip] = useState(false);
  const [otp, setOtp] = useState(0);
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState<any>();
  const [enable, setEnable] = useState({
    previous: false,
    new: false,
    confirm: false
  });
  const [showPassword, setShowPassword] = useState({
    previous: false,
    new: false,
    confirm: false
  });
  const [openModal, setOpenModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [modal, setModal] = useState(0);
  const { push } = useRouter();
  const {
    phoneValidationSchema,
    emailValidationSchema,
    passwordValidationSchema,
    otpValidationSchema,
    validation,
    error,
    setError
  } = useValidation();

  const modalOpenHandler = useCallback((modal: number) => {
    setOpenModal(true);
    setModal(modal);
  }, []);

  const modalCloseHandler = useCallback(() => {
    setOpenModal(false);
  }, []);

  const onUpdateHandler = useCallback(() => {
    setShowLoading(true);
    console.log('onUpdateHandler', user);
  }, [user]);

  const onNextHandler = useCallback(modal => {
    setModal(modal);
  }, []);
  const backButtonHandler = useCallback(() => {
    //handle back button
  }, []);

  /*********************
   * userName change
   ********************/
  const checkUserNameAvailable = (name: string) => {
    setInactiveNextButton(false);
    dispatch(
      userAction.checkUserName({ userName: name, email: user.profile.email })
    );
    console.log('user Data ', user);
    //when submit after finish typing
  };

  const userNameHandler = () => {
    onUpdateHandler();
    console.log('inputs ', inputs);
    dispatch(
      userAction.updateProfile({
        email: JSON.parse(localStorage.getItem('profile')!)?.email,
        userName: inputs.userName
      })
    );
  };

  /*********************
   * Email Change
   ********************/

  const validateEmailAndPasswordHandler = async (
    data: string,
    type: 'email' | 'password' | 'previousPassword' | 'confirmPassword'
  ) => {
    console.log('inputs ', data);
    console.log('type ', type);
    const schema =
      type === 'email' ? emailValidationSchema : passwordValidationSchema;
    const validateData = type === 'email' ? data.toLowerCase() : data;

    if (type === 'email') {
      const validate = await validation(
        emailValidationSchema,
        data.toLowerCase(),
        type
      );

      if (validate) {
        const response = await userAPI.checkEmailExists({
          email: inputs.email,
          id: user?.profile?._id
        });
        if (response.data) {
          setInactiveNextButton(true);
          setError({
            ...error,
            [type]: {
              state: true,
              message: 'User already exists with the email'
            }
          });
          setAuthValid({
            ...authValid,
            email: {
              state: false,
              value: validateData
            }
          });
        } else {
          setInactiveNextButton(false);
          setAuthValid({
            ...authValid,
            [type]: {
              state: true,
              value: validateData
            }
          });
        }
      } else {
        setInactiveNextButton(true);
        setAuthValid({
          ...authValid,
          [type]: {
            state: false,
            value: validateData
          }
        });
      }
    } else if (type === 'previousPassword') {
      const validate = await validation(passwordValidationSchema, data, type);

      if (validate) {
        // setInactiveNextButton(false);
        setAuthValid({
          ...authValid,
          [type]: {
            state: true,
            value: validateData
          }
        });
      } else {
        setInactiveNextButton(true);
        setAuthValid({
          ...authValid,
          [type]: {
            state: false,
            value: validateData
          }
        });
      }
    } else if (type === 'password') {
      const validate = await validation(passwordValidationSchema, data, type);

      if (validate) {
        // setInactiveNextButton(false);
        setAuthValid({
          ...authValid,
          [type]: {
            state: true,
            value: validateData
          }
        });
      } else {
        setInactiveNextButton(true);
        setAuthValid({
          ...authValid,
          [type]: {
            state: false,
            value: validateData
          }
        });
      }
    } else if (type === 'confirmPassword') {
      const validate = await validation(passwordValidationSchema, data, type);

      if (validate) {
        console.log('validateEmailAndPasswordHandler ', authValid);
        console.log(inputs.confirmPass);

        //authValid.password.value

        if (authValid.password.value === inputs.confirmPass) {
          setInactiveNextButton(false);
          confirmPassMessage.error = false;
          confirmPassMessage.message = '';
          setAuthValid({
            ...authValid,
            [type]: {
              state: true,
              value: validateData
            }
          });
        } else {
          setInactiveNextButton(true);
          confirmPassMessage.error = true;
          confirmPassMessage.message = 'Passwords did not match';
          setAuthValid({
            ...authValid,
            [type]: {
              state: false,
              value: validateData
            }
          });
        }
      } else {
        setInactiveNextButton(true);
        setAuthValid({
          ...authValid,
          [type]: {
            state: false,
            value: validateData
          }
        });
      }
    }
  };

  const emailHandler = async () => {
    console.log('authValid ', authValid);
    console.log('authValid ', inputs.email);

    onUpdateHandler();
    dispatch(
      userAction.updateProfile({
        email: JSON.parse(localStorage.getItem('profile')!)?.email,
        newEmail: inputs.email
      })
    );

    //when press update
  };

  /*********************
   * Password Change
   ********************/

  const savePassword = (password: any) => {
    if (password.length > 0) {
      setEnable({ ...enable, confirm: true });
      inputs.confirmPass = password;
    } else {
      setEnable({ ...enable, confirm: false });
    }
  };

  const passWordHandler = async () => {
    onUpdateHandler();
    console.log('authValid ', authValid);
    console.log('authValid ', user);
    const response = await userAPI.resetPassword({
      email: user.profile.email,
      password: authValid.previousPassword.value,
      newPassword: authValid.password.value
    });

    console.log('passWordHandler response');
    console.log(response);
    if (response.status === 201) {
      setMessage('User Password has been updated.');
      onNextHandler(6);
      // setTimeout(() => {
      //   dispatch(authAction.signOutFirebase());
      //   push('/');
      // }, 1000);
    } else {
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        message: 'Something is wrong'
      });
      setMessage('Something is wrong');
      onNextHandler(7);
    }
    //when press update
  };

  /*********************
   * Mobile Number Change
   ********************/

  const mobilePhoneHandler = async () => {
    console.log('setPhone ', phone);
    console.log('country Code', countryCode?.dial_code);
    const phoneNumber = `+${countryCode?.dial_code} ${phone.replace(/ /g, '')}`;
    const mobileNumber = countryCode?.dial_code + ' ' + phone.replace(/ /g, '');
    console.log(phoneNumber);

    // const response = await AuthAPI.sendOTP(phoneNumber);

    const response = await userAPI.checkMobileExist({
      mobile: phoneNumber,
      id: user?.profile?._id
    });

    console.log('mobilePhoneHandlerresponse', response);

    if (response.status === 200) {
      if (!response.data) {
        const result = await AuthAPI.sendOtpPhone({
          email: user?.profile?.email,
          mobile: phoneNumber
        });
        console.log('result ', result);
        if (result.status === 200) {
          dispatch({
            type: SEND_OTP_RECEIVE,
            otp: result.data.code
          });
          onNextHandler(5);
        }
      } else {
        existPhoneMessage.error = true;
        existPhoneMessage.message = `The mobile number is already registered to another user.`;
      }
    } else {
      setMessage('');
      onNextHandler(7);
    }
  };

  const validatePhoneNumberHandler = useCallback(
    async (phone: string, countryCode: any) => {
      console.log('phone', phone);
      setPhone(phone);
      setCountryCode(countryCode);
      existPhoneMessage.error = false;
      existPhoneMessage.message = '';
      const validate = await validation(phoneValidationSchema, phone, 'phone');
      if (validate) {
        setInactiveNextButton(false);
      } else {
        setInactiveNextButton(true);
      }
    },
    [validation, phoneValidationSchema]
  );

  const validateOtpHandler = useCallback(async () => {
    const validate = await validation(otpValidationSchema, otp, 'otp');
    if (validate) {
      setInactiveNextButton(false);
    } else {
      setInactiveNextButton(true);
    }
  }, [otp]);

  useEffect(() => {
    console.log('OTP ', otp);
    if (otp.toString().length == 6) {
      validateOtpHandler();
    } else if (otp.toString().length < 6) {
      setInactiveNextButton(true);
    }
  }, [otp]);

  const changeMobile = () => {
    const phoneNumber = `+${countryCode?.dial_code} ${phone.replace(/ /g, '')}`;
    const fullNumber = `+${countryCode?.dial_code}${phone.replace(/ /g, '')}`;
    console.log('OTP ', phoneNumber);
    console.log('countryCode ', countryCode);
    onUpdateHandler();

    dispatch(
      userAction.updateProfile({
        email: JSON.parse(localStorage.getItem('profile')!)?.email,
        phoneNumber: phoneNumber,
        fullMobile: fullNumber,
        country_code: countryCode?.dial_code,
        mobileCountry: countryCode
      })
    );
  };

  const onDateChangeHandler = (value: Date) => {
    const birthday = moment(value).format('YYYY-MM-DD');
    const age = moment().diff(birthday, 'years');

    if (age >= 18) {
      setInputs({
        ...inputs,
        dob: birthday
      });
      setInactiveNextButton(false);
    }
    if (age < 18) {
      setInactiveNextButton(true);
    }
  };

  useMemo(() => {
    setTimeout(() => {
      console.log('useMemo profile', user.loading.updateProfile);
      console.log('modal ', isEmpty(user?.profile?.username));

      if (count === 1) {
        if (!isEmpty(user?.profile?.username)) {
          inputs.userName = user?.profile?.username;
          setInputs({ ...inputs });
          setCount(2);
        }
      }

      if (user.loading.updateProfile) {
        ///User already exists with the email
        setShowLoading(false);
        if (user.errors.profile === '') {
          setShowLoading(false);
          if (modal === 1) {
            setMessage('Username has been updated.');
          } else if (modal === 2) {
            setMessage('Email has been updated.');
          } else if (modal === 3) {
            setMessage('User Password has been updated.');
          } else if (modal === 5) {
            setMessage('Mobile number has been updated.');
          }
          onNextHandler(6);
        } else if (isUndefined(user.errors.profile)) {
          setShowLoading(false);
          setMessage('');
          onNextHandler(7);
        } else {
          setMessage(user.errors.profile);
          onNextHandler(7);
          setShowLoading(false);
        }
      }
    }, 1000);
  }, [onNextHandler, user]);

  const ProfileModals = (): stepperFlow => {
    switch (modal) {
      case 1:
        return {
          title: 'Username',
          subTitle:
            'Your username will help you access your account, and let others connect with you.',
          headerButton: 'closeButton',
          onClick: userNameHandler,
          onSkip: userNameHandler,
          component: (
            <AuthenticationInputs
              placeholder="Eg.Doe"
              defaultValue={inputs.userName}
              messageCenter
              error={user?.userNameSuggestion?.userNameExist} //from api if it true it show error
              errorMessage={
                user?.userNameSuggestion?.userNameExist === true
                  ? 'username is not available  check ' +
                    user?.userNameSuggestion?.suggestion
                  : ''
              }
              successMessage={'username is available'}
              startIcon={<Img source={usernameIcon} alt="" />}
              size="small"
              onChangeText={e => setInputs({ ...inputs, userName: e })}
              onSubmit={checkUserNameAvailable}
            />
          )
        };
      case 2:
        return {
          title: 'Contact Email',
          subTitle:
            'The email will be used for communications between Qloud City and your place.',
          headerButton: 'closeButton',
          onClick: emailHandler,
          onSkip: emailHandler,
          component: (
            <AuthenticationInputs
              inputType="email"
              label="EMAIL"
              defaultValue={inputs.email}
              messageCenter
              placeholder="Type your email here..."
              successMessage={'Email is valid'}
              error={error.email.state}
              errorMessage={error.email.message}
              onSubmit={e => validateEmailAndPasswordHandler(e, 'email')}
              onChangeText={e => setInputs({ ...inputs, email: e })}
            />
          )
        };
      case 3:
        return {
          title: 'Change Password',
          subTitle: `Let's Create your New Password.`,
          headerButton: 'closeButton',
          onClick: passWordHandler,
          // onSkip: ,
          height: 550,
          direction: 'column',
          component: (
            <>
              <AuthenticationInputs
                inputType={showPassword.previous ? 'text' : 'password'}
                label="CURRENT PASSWORD"
                placeholder="Type Current Password here..."
                error={error.previousPassword.state}
                errorMessage={error.previousPassword.message}
                onChangeText={text => {
                  text.length > 0
                    ? setEnable({ ...enable, previous: true })
                    : setEnable({ ...enable, previous: false });
                }}
                size={'small'}
                endIcon={
                  <ShowPasswordIcon
                    enable={enable.previous}
                    showPassword={show =>
                      setShowPassword({ ...showPassword, previous: show })
                    }
                    show={showPassword.previous}
                  />
                }
                onSubmit={e =>
                  validateEmailAndPasswordHandler(e, 'previousPassword')
                }
              />
              <AuthenticationInputs
                inputType={showPassword.new ? 'text' : 'password'}
                label="NEW PASSWORD"
                placeholder="Type New Password here..."
                error={error.password.state}
                errorMessage={error.password.message}
                onChangeText={text => {
                  text.length > 0
                    ? setEnable({ ...enable, new: true })
                    : setEnable({ ...enable, new: false });
                }}
                size={'small'}
                endIcon={
                  <ShowPasswordIcon
                    enable={enable.new}
                    showPassword={show =>
                      setShowPassword({ ...showPassword, new: show })
                    }
                    show={showPassword.new}
                  />
                }
                onSubmit={e => validateEmailAndPasswordHandler(e, 'password')}
              />

              <AuthenticationInputs
                inputType={showPassword.confirm ? 'text' : 'password'}
                label="CONFIRM PASSWORD"
                placeholder="Confirm New Password here..."
                error={confirmPassMessage.error}
                errorMessage={confirmPassMessage.message}
                onChangeText={(text: any) => savePassword(text)}
                size={'small'}
                endIcon={
                  <ShowPasswordIcon
                    enable={enable.confirm}
                    showPassword={show =>
                      setShowPassword({ ...showPassword, confirm: show })
                    }
                    show={showPassword.confirm}
                  />
                }
                onSubmit={e =>
                  validateEmailAndPasswordHandler(e, 'confirmPassword')
                }
              />
            </>
          )
        };
      case 4:
        return {
          title: 'Update Contact Number',
          subTitle: 'Choose your country code and enter your mobile number.',
          headerButton: 'closeButton',
          onClick: mobilePhoneHandler,
          next: true,
          component: (
            <PhoneNumberInputField
              error={error.phone.state || existPhoneMessage.error}
              errorMessage={
                existPhoneMessage.error
                  ? existPhoneMessage.message
                  : error.phone.message
              }
              value={phone}
              placeholder="0000 0000"
              onKeyboardTyping={() => setInactiveNextButton(true)}
              handlePhoneNumberChange={validatePhoneNumberHandler}
            />
          )
        };
      case 5:
        return {
          title: 'Input Code',
          subTitle: 'Type the code that we have sent to you.',
          headerButton: 'backButton',
          onClick: changeMobile,
          //  error: otpError, from API
          component: (
            <OtpInputs
              otpInputHandler={value => setOtp(value)}
              otp={otp.toString()}
              otpError={error.otp.state}
              otpErrorMassage={error.otp.message}
            />
          )
        };
      case 6:
        return {
          title: '',
          subTitle: '',
          headerButton: 'closeButton',
          height: 496,
          // onClick: changeMobile,
          //  error: otpError, from API
          component: (
            <>
              <ModalHeader
                title={''}
                // closeButton
                // onCloseButtonClick={closeAllModal}
              />
              <Success
                message={message}
                closeAll={modalCloseHandler}
                showDone
              />
            </>
          )
        };
      case 7:
        return {
          title: '',
          subTitle: '',
          headerButton: 'closeButton',
          height: 496,
          // onClick: changeMobile,
          //  error: otpError, from API
          component: (
            <>
              <ModalHeader
                title={''}
                // closeButton
                // onCloseButtonClick={closeAllModal}
              />
              <Error message={message} closeAll={modalCloseHandler} showDone />
            </>
          )
        };
      default:
        return {
          title: '0',
          subTitle: '',
          headerButton: 'closeButton',
          component: <div />
        };
    }
  };
  return (
    <ProfileContext.Provider
      value={{
        ProfileModals,
        InactiveNextButton,
        backButtonHandler,
        skip,
        modalCloseHandler,
        modalOpenHandler,
        openModal,
        showLoading,
        onDateChangeHandler
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export function useProFile() {
  const context = useContext(ProfileContext);

  return context;
}
