import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import Img from '../../components/Atoms/img';
import AuthenticationInputs from '../../components/Molecules/authenticationInputs';
import usernameIcon from '../../assets/icons/usernameIcon.svg';
import * as userAction from '../../redux/Action/user/userActions';
import OnBoardingInterestContainer from '../../components/Organisms/onboardingIntrestModal';
import Gender from '../../components/Molecules/gender';
import DatePickerInput from '../../components/Atoms/datePicker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/Reducer/root';
import moment from 'moment';
import UpdateProfileLoader from '../../components/Molecules/UpdateProfileLoader';
import { useRouter } from 'next/dist/client/router';

interface OnBoardingContextProps {
  onBoardingFlowStepper: () => stepperFlow;
  InactiveNextButton: boolean;
  backButtonHandler: () => void;
  onboardingComplete: () => void;
  skip: boolean;
}

const OnBoardingContext = createContext<OnBoardingContextProps>(
  {} as OnBoardingContextProps
);

export const UseOnBoardingProvider = ({ children }: any) => {
  const {
    steps,
    email,
    suggestion,
    userNameExist,
    profile,
    loading,
    requireOnBoarding
  } = useSelector(({ user }: RootState) => ({
    steps: user.profile.onboarding_step,
    email: user.profile.email,
    suggestion: user.profile.username,
    profile: user.profile,
    userNameExist: user.userNameSuggestion.userNameExist,
    loading: user.loading,
    requireOnBoarding: user.requireOnBoarding
  }));

  const [inputs, setInputs] = useState({
    firstName: profile.first_name,
    lastName: profile.last_name,
    userName: '',
    Gender: profile.gender,
    dob: profile.dob
  });
  const [InactiveNextButton, setInactiveNextButton] = useState(true);
  const [skip, setSkip] = useState(false);

  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    if (steps == 1) {
      setSkip(false);
      dispatch(userAction.getUserName());
    }
    if (steps === 2) {
      setInactiveNextButton(false);
      setSkip(true);
    }
    if (steps === 3) {
      setSkip(false);
      setInactiveNextButton(true);
    }
  }, [steps, email, dispatch]);

  useEffect(() => {
    if (userNameExist && steps == 2) {
      setSkip(true);
    }
  }, [userNameExist, steps]);

  // useEffect(() => {
  //   setInputs({ ...inputs, userName: suggestion });
  // }, [suggestion, inputs]);
  // const nextButtonHandler = useCallback(() => {
  //   //setSteps(steps + 1);
  //   setInactiveNextButton(true);
  // }, [steps]);

  const onNameChange = (label: 'firstName' | 'lastName', value: string) => {
    setInputs({ ...inputs, [label]: value });

    if (inputs.firstName?.length > 0 && inputs.lastName?.length > 0) {
      setInactiveNextButton(false);
    } else {
      setInactiveNextButton(true);
    }
  };

  const checkUserNameAvailable = (name: string) => {
    dispatch(userAction.checkUserName(name));
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

  const userNameHandler = () => {
    if (skip) {
      //update on boarding steps
      dispatch(userAction.updateProfile({ onboarding_step: 3 }));
      return;
    }

    // update user name
    dispatch(
      userAction.updateProfile({
        username: inputs.userName,
        onboarding_step: steps + 1
      })
    );
  };

  const onBioDataSubmit = useCallback(() => {
    dispatch(
      userAction.updateProfile({
        gender: inputs.Gender,
        dob: inputs.dob,
        onboarding_step: steps + 1
      })
    );
  }, [inputs, steps, dispatch]);

  const onboardingComplete = useCallback(() => {
    dispatch(
      userAction.updateProfile({
        require_onboarding: false,
        onboarding_step: steps + 1
      })
    );
  }, [dispatch, steps]);

  const backButtonHandler = useCallback(() => {
    dispatch(userAction.updateProfile({ onboarding_step: steps - 1 }));
  }, [steps, dispatch]);

  useMemo(() => {
    if (!requireOnBoarding && !loading.updateProfile) push('/home');
  }, [requireOnBoarding, loading, push]);

  const onBoardingFlowStepper = (): stepperFlow => {
    switch (steps) {
      case 1:
        return {
          title: 'Your Name',
          subTitle:
            'Your name will be displayed on your public profile for others to identify you.',
          headerButton: undefined,
          onClick: () =>
            dispatch(
              userAction.getUserFullName(inputs.firstName, inputs.lastName)
            ),
          component: (
            <>
              <AuthenticationInputs
                label="FIRST NAME"
                placeholder="Eg.John"
                size="small"
                onChangeText={e => setInputs({ ...inputs, firstName: e })}
                onSubmit={e => onNameChange('firstName', e)}
                defaultValue={inputs.firstName}
              />
              <AuthenticationInputs
                label="LAST NAME"
                placeholder="Eg.Doe"
                defaultValue={inputs.lastName}
                size="small"
                onSubmit={e => onNameChange('lastName', e)}
                onChangeText={e => setInputs({ ...inputs, lastName: e })}
              />
            </>
          )
        };

      case 2:
        return {
          title: 'Username',
          subTitle:
            'Your username will help you access your account, and let others connect with you.',
          headerButton: 'backButton',
          onClick: userNameHandler,
          onSkip: userNameHandler,
          component: (
            <AuthenticationInputs
              error={userNameExist}
              defaultValue={inputs.userName}
              messageCenter
              errorMessage={'username is not available'}
              successMessage={' username is available'}
              startIcon={<Img source={usernameIcon} alt="" />}
              placeholder="Eg.Doe"
              size="small"
              onChangeText={e => setInputs({ ...inputs, userName: e })}
              onSubmit={checkUserNameAvailable}
            />
          )
        };

      case 3:
        return {
          title: 'Your Bio Data',
          subTitle:
            'Your Bio Data will be used to help enhance and customize your overall experience!',
          headerButton: 'backButton',
          direction: 'column',
          onClick: onBioDataSubmit,
          component: (
            <>
              <Gender
                setGenderValue={value =>
                  setInputs({
                    ...inputs,
                    Gender: value.male ? 'male' : 'female'
                  })
                }
              />
              <DatePickerInput
                onDateChangeHandler={onDateChangeHandler}
                date={''}
              />
            </>
          )
        };
      case 4:
        return {
          title: 'Your Interests',
          subTitle:
            'Share your interests and customize your overall QloudCity experience.',
          headerButton: 'backButton',
          component: <OnBoardingInterestContainer />
        };
      case 5:
        return {
          title: '',
          subTitle: '',
          headerButton: undefined,
          component: <UpdateProfileLoader openModal={true} />
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
  return (
    <OnBoardingContext.Provider
      value={{
        onBoardingFlowStepper,
        InactiveNextButton,
        skip,
        backButtonHandler,
        onboardingComplete
      }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
};

export function useOnBoarding() {
  const context = useContext(OnBoardingContext);

  return context;
}
