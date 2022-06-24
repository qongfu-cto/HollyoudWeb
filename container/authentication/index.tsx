import { useRouter } from 'next/dist/client/router';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPlaces } from 'redux/Action/myQloud/myQloudActions';
import { AuthAPI } from 'services/authAPI';
import { api } from 'services/userAPI';
import OtpInputs from '../../components/Molecules/otpInputs';
import PhoneNumberInputField from '../../components/Molecules/phoneNumberInputField';
import SignupSubmitLoader from '../../components/Molecules/SignupSubmitLoader';
import SuccessRegLoader from '../../components/Molecules/SuccessRegLoader';
import * as authAction from '../../redux/Action/auth/authActions';
import * as userAction from '../../redux/Action/user/userActions';

import { RootState } from '../../redux/Reducer/root';
import { useValidation } from '../../utilities/hook/useValidation';

import { withRouter } from 'next/router';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';

// Import Screens
/**
 1. Signup
 2. Login
 3. Forget Password
 4. Reset Password
 5. Social OAuth (Future Sprints)
 6. Terms & Conditions
 7. Privacy Policy
 8. Country + Mobile
 9.OTP
 10.Invitation (Future Sprints)
 */

/**
 * Authentication Container
 *
 * Loads the Authentication Organism
 * which will use both Login and Signup
 * use cases.
 *
 */
type authValid = {
  email: {
    value: string;
    state: boolean;
  };
  password: {
    value: string;
    state: boolean;
  };
};

interface AuthenticationContextProps {
  openSignupFlowModal: boolean;
  signupFlowStepper: () => stepperFlow;
  validateEmailAndPasswordHandler: (
    data: string,
    type: 'email' | 'password'
  ) => void;
  SignUpModalOpenHandler: () => void;
  SignUpModalCloseHandler: () => void;
  signupButtonHandler: () => void;
  signinButtonHandler: () => void;
  updateProfileWithPhoneNumber: () => void;
  backButtonHandler: () => void;
  setSteps: React.Dispatch<number>;
  InactiveNextButton: boolean;
  showToast: {
    state: boolean;
    message: string;
  };
  authValid: authValid;
  handleGoogleLogin: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps
);
export const AuthenticationContainer = ({ children }: any) => {
  const errorsReducer = useSelector((state: any) => state.auth.errors);
  const { getProfile } = useUserIsLogged();
  const [openSignupFlowModal, setOpenSignupFlowModal] = useState(false);
  const [InactiveNextButton, setInactiveNextButton] = useState(true);
  // const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({ state: false, message: '' });
  const [authValid, setAuthValid] = useState<authValid>({
    email: {
      value: '',
      state: false
    },
    password: {
      value: '',
      state: false
    }
  });
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(0);
  const [steps, setSteps] = useState(1);
  const dispatch = useDispatch();
  const { push, pathname } = useRouter();
  const router = useRouter();

  const {
    createdAnAccount,
    createdAProfile,
    profileError,
    signUpError,
    otpError,
    hasMobile,
    userIsLogged,
    onBoarding,
    otpLoading,
    SigninError,
    userIsLoggedAuth
  } = useSelector(({ auth, user }: RootState) => {
    return {
      createdAnAccount: auth.createdAnAccount,
      createdAProfile: user.createdAProfile,
      profileError: user.errors.profile,
      signUpError: auth.errors.signup,
      otpError: auth.errors.otp,
      hasMobile: user.hasMobile,
      userIsLogged: user.userIsLogged,
      onBoarding: user.requireOnBoarding,
      otpLoading: auth.loading.otp,
      SigninError: auth.errors.signin,
      userIsLoggedAuth: auth.userIsLogged
    };
  });

  const {
    phoneValidationSchema,
    emailValidationSchema,
    passwordValidationSchema,
    otpValidationSchema,
    validation,
    error
  } = useValidation();

  // --------------SignUp functions ----------------

  const SignUpModalOpenHandler = useCallback(() => {
    setOpenSignupFlowModal(true);
  }, []);

  const SignUpModalCloseHandler = useCallback(() => {
    setOpenSignupFlowModal(false);
  }, []);

  const validateEmailAndPasswordHandler = async (
    data: string,
    type: 'email' | 'password'
  ) => {
    const schema =
      type === 'email' ? emailValidationSchema : passwordValidationSchema;
    const validateData = type === 'email' ? data.toLowerCase() : data;
    const validate = await validation(schema, validateData, type);

    if (validate) {
      setAuthValid({
        ...authValid,
        [type]: {
          state: true,
          value: validateData
        }
      });
    } else {
      setAuthValid({
        ...authValid,
        [type]: {
          state: false,
          value: validateData
        }
      });
    }
  };

  const signupButtonHandler = useCallback(() => {
    dispatch(
      authAction.createFirebaseAccount(
        authValid.email.value,
        authValid.password.value
      )
    );
  }, [dispatch, authValid]);

  const handleGoogleLogin = async () => {
    // save the redirect path in localStorage
    localStorage.setItem('redirectPath', JSON.stringify(router.asPath));
    window.open(`${api}/authentication/google`, '_self');
  };

  // for registering user
  useMemo(() => {
    setTimeout(() => {
      if (createdAnAccount) {
        // dispatch(userAction.createAccount());
        setShowToast({ state: false, message: '' });
      }

      if (!createdAnAccount && signUpError) {
        setShowToast({ state: true, message: signUpError });
      }
    }, 1000);
  }, [createdAnAccount, signUpError]);

  // for signin user
  useMemo(() => {
    setTimeout(() => {
      if (!userIsLoggedAuth && SigninError) {
        setShowToast({
          state: true,
          message: SigninError
        });
      }
    }, 1000);
  }, [SigninError]);

  useMemo(() => {
    if (createdAProfile && userIsLogged && !hasMobile) {
      SignUpModalOpenHandler();
    }
    if (!createdAProfile && !userIsLogged && !hasMobile) {
      SignUpModalCloseHandler();
    }
    if (!createdAProfile && profileError) {
      SignUpModalCloseHandler();
      setShowToast({ state: true, message: profileError });
    }
  }, [
    userIsLogged,
    createdAProfile,
    SignUpModalOpenHandler,
    SignUpModalCloseHandler,
    hasMobile,
    profileError
  ]);

  useMemo(() => {
    if (showToast.state) {
      setTimeout(() => {
        setShowToast({ state: false, message: '' });
      }, 5000);
    }
  }, [showToast]);
  //--------------------------SignUp Flow Functions-------------------------------------

  const validatePhoneNumberHandler = useCallback(
    async (phone: string) => {
      setPhone(phone);
      const validate = await validation(phoneValidationSchema, phone, 'phone');
      if (validate) {
        setInactiveNextButton(false);
      } else {
        setInactiveNextButton(true);
      }
    },
    [validation, phoneValidationSchema]
  );

  const nextButtonHandler = useCallback(() => {
    setSteps(steps + 1);
    setInactiveNextButton(true);
  }, [steps]);

  const backButtonHandler = useCallback(() => {
    setSteps(steps - 1);
    setInactiveNextButton(true);
  }, [steps]);

  const validateOtpHandler = useCallback(async () => {
    const validate = await validation(otpValidationSchema, otp, 'otp');
    if (validate) {
      setInactiveNextButton(false);
    } else {
      setInactiveNextButton(true);
    }
  }, [otp]);

  useEffect(() => {
    if (otp.toString().length == 6) {
      validateOtpHandler();
    } else if (otp.toString().length < 6) {
      setInactiveNextButton(true);
    }
  }, [otp]);

  const updateProfileWithPhoneNumber = () => {
    const phoneNumber = `+973${phone.replace(/ /g, '')}`;
    if (steps === 1) {
      //  setLoading(true);
      dispatch(userAction.updateProfileWithPhoneNumber(phoneNumber));
      dispatch(authAction.sendTOP(phoneNumber));
      return nextButtonHandler();
    }

    if (steps === 2) {
      return nextButtonHandler();
    }
  };

  useMemo(() => {
    if (steps === 3 && hasMobile && !otpLoading) nextButtonHandler();
  }, [hasMobile, steps, otpLoading, nextButtonHandler]);

  const signupFlowStepper = (): stepperFlow => {
    switch (steps) {
      case 1:
        return {
          title: 'Get Moving with QloudCity',
          subTitle: 'Choose your country code and enter your mobile number.',
          headerButton: 'closeButton',
          component: (
            <PhoneNumberInputField
              error={error.phone.state}
              errorMessage={error.phone.message}
              value={phone}
              placeholder="0000 0000"
              onKeyboardTyping={() => setInactiveNextButton(true)}
              handlePhoneNumberChange={validatePhoneNumberHandler}
            />
          )
        };

      case 2:
        return {
          title: 'Input Code',
          subTitle: 'Type the code that we have sent to you.',
          headerButton: 'backButton',
          error: otpError,
          component: (
            <OtpInputs
              otpInputHandler={value => setOtp(value)}
              otp={otp.toString()}
              otpError={error.otp.state}
              otpErrorMassage={error.otp.message}
            />
          )
        };
      case 3:
        return {
          title: '',
          subTitle: '',
          headerButton: undefined,
          component: <SignupSubmitLoader openModal={otpLoading} />
        };
      case 4:
        return {
          title: '',
          subTitle: '',
          headerButton: undefined,
          component: (
            <SuccessRegLoader
              openModal={hasMobile ? (!onBoarding ? true : onBoarding) : false}
              onClick={() => push('/signup/onboarding')}
            />
          )
        };
      default:
        return {
          title: '',
          subTitle: '',
          headerButton: 'closeButton',
          component: <div />
        };
    }
  };
  //--------------------login with email and password---------

  const signinButtonHandler = async () => {
    dispatch(
      authAction.siginToFirebaseAccount(
        authValid.email.value,
        authValid.password.value
      )
    );
  };

  return (
    <AuthenticationContext.Provider
      value={{
        SignUpModalOpenHandler,
        SignUpModalCloseHandler,
        openSignupFlowModal,
        InactiveNextButton,
        setSteps,
        signupFlowStepper,
        validateEmailAndPasswordHandler,
        authValid,
        signupButtonHandler,
        showToast,
        updateProfileWithPhoneNumber,
        signinButtonHandler,
        backButtonHandler,
        handleGoogleLogin
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication() {
  const context = useContext(AuthenticationContext);

  return context;
}
