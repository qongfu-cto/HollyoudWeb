import { userAPI } from 'services/userAPI';
import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from 'redux/Action/user/userActions';
import {
  fetchAllCountries,
  fetchAllGccCountries
} from 'redux/Action/app/appActions';
import { AuthAPI } from 'services/authAPI';

interface CountryProps {
  country: string;
  _id: string;
  flag?: string;
  dial_code?: string;
}

export const useAccountInfo = () => {
  const dispatch = useDispatch();
  const countdown: React.Ref<any> = useRef<HTMLInputElement | null>(null);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>('');
  const [userCode, setUserCode] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [mobileCountry, setMobileCountry] = useState<CountryProps>();
  const [currentMobileCountry, setCurrentMobileCountry] = useState<
    CountryProps
  >();

  const [newCountry, setNewCountry] = useState<CountryProps>();
  const [newMobile, setNewMobile] = useState('');

  const [tempText, setTempText] = useState<string>('');
  const [tempTextNew, setTempTextNew] = useState<string>('');
  const [tempTextConfirm, setTempTextConfirm] = useState<string>('');

  const [isVisible, setIsVisible] = React.useState(false);

  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = () => {
    setIsVisible(false);
    setSuccess(false);
    // clear everything once user closes
    clearAllTexts();
  };

  const [checkUsername, setCheckUsername] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [checkUserEmail, setCheckUserEmail] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [checkCountry, setCheckCountry] = useState<boolean>(false);
  const [successSecond, setSuccessSecond] = useState<boolean>(false);
  const [switchToCode, setSwitchToCode] = useState(false);
  const [showSecondaryError, setShowSecondaryError] = useState<boolean>(false);

  const [countryCode, setCountryCode] = useState('');
  const [countryId, setCountryId] = useState('');

  const [showCountries, setShowCountries] = useState(false);

  const [open, setOpen] = useState<boolean>(false);

  const [displayData, setDisplayData] = useState<any>({});

  const { profileData, countries } = useSelector((state: any) => {
    return {
      profileData: state.user.profile,
      countries: state.app.gccCountries
    };
  });
  const [allCountries, setAllCountries] = useState([]);

  const [openSearch, setOpenSearch] = useState(false);
  const [searchedCountry, setSearchedCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const [isValidForgotPassword, setIsValidForgotPassword] = useState(false);
  const [userTypedCode, setUserTypedCode] = useState('');
  const [originalCode, setOriginalCode] = useState('');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [restartCounter, setRestartCounter] = useState<any>('');
  const [timeUpForCode, setTimeUpForCode] = useState<any>(false);

  //   setSelectedCountryId(user.geolocation?.calling_code.substring(1));

  const handleResetPassword = async (e: any) => {
    setUserTypedCode(e);
    if (e?.toString() === originalCode?.toString()) {
      // change user mobile
      changeMobile();

      // close the drawer and close everything
      setIsVisible(false);
      setShowCountries(false);
      setSwitchToCode(false);
      setDisplayData(data(4));
      // setNewCountry(profileData?.mobileCountry);
      setNewMobile('');
    } else {
      setIsValidForgotPassword(false);
    }
  };

  const changeMobile = async () => {
    const result = await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      phoneNumber: `+${newCountry?.dial_code} ${newMobile}`,
      mobileCountry: newCountry?._id
    });
    if (result.status === 200) {
      toast.success('Mobile number successfully updated', {});
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('Mobile number could not be updated', {});
    }
  };

  const handleSearch = (e: any) => {
    setSearchedCountry(e.target.value);

    if (e.target.value) {
      const allcountriess = countries.filter(
        (country: any) =>
          country.country
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          country.dial_code.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setAllCountries(allcountriess);
    } else {
      setAllCountries(countries);
    }
  };

  const getUserProfileAction = () => {
    dispatch(getUserProfile(profileData.email));
  };
  const getUserProfileActionRecentlyChangedEmail = (email: string) => {
    dispatch(getUserProfile(email));
  };

  useEffect(() => {
    dispatch(fetchAllGccCountries());
    setUsername(profileData.username);
    setEmail(profileData.email);
    setMobile(profileData.mobile?.split(' ')?.[1]);
    setUserCode(profileData.mobile?.split(' ')?.[0]);
    setMobileCountry(profileData?.mobileCountry);
    setCurrentMobileCountry(profileData?.mobileCountry);
  }, [profileData]);

  const tempFieldRef = useRef('');

  const clearAllTexts = () => {
    setTempText('');
    setTempTextNew('');
    setTempTextConfirm('');
    setPassword('');
    setShowSecondaryError(false);
    setSuccess(false);
    setSuccessSecond(false);
  };

  const updateUserNameAction = () => {
    setUsername(tempText?.toLowerCase());
    if (tempText?.length > 0) {
      changeUserName(tempText.toLowerCase());
    }
  };

  const changeEmailAction = async () => {
    setEmail(tempText?.toLowerCase());
    const result = await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      newEmail: tempText
    });

    if (result.status === 200) {
      setOpen(true);
      clearAllTexts();
      getUserProfileActionRecentlyChangedEmail(tempText);
    } else {
      setOpen(false);
    }
  };

  const changeUserPasswordAction = async () => {
    setPassword(tempText);
    setNewPasswordConfirm(tempTextConfirm);
    setNewPassword(tempTextNew);

    const result = await userAPI.resetPassword({
      password: tempText,
      newPassword: tempTextConfirm,
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('Password is successfully updated');
      clearAllTexts();
    } else {
      toast.error('Password couldnot be updated');
    }
  };

  const toggleModal = () => {
    setOpen(false);
  };

  const data = (code: number) => {
    switch (code) {
      case 0:
        return {
          fieldHeader: 'Change Username',
          successMessage: 'Username is available',
          errorMessage: 'Username already taken',
          updateAction: () => {
            setSuccess(false);
          },
          change: 1,
          hiddenLabel: true,
          lowerCase: true,
          updateBtn: 'Update'
        };
      case 1:
        return {
          fieldHeader: 'Change Email',
          successMessage: 'Email is available',
          errorMessage: 'Email already taken',
          seondaryErrorMessage: 'Email format incorrect',
          updateAction: () => {
            setSuccess(false);
          },
          change: 2,
          hiddenLabel: true,
          updateBtn: 'Update'
        };
      case 2:
        return {
          fieldHeader: 'Change Password',
          successMessage: 'Current Password is correct',
          errorMessage: 'Current Password is wrong',
          seondaryErrorMessage: 'Password must be altleast 8 characters',
          firstField: 'Current Password',
          secondField: 'New Password',
          thirdField: 'Confirm New Password',
          hiddenLabel: false,
          increaseHeight: true,
          successMessageSecond: 'New password matched',
          errorMessageSecond: 'New password didnot match',
          type: 'password',
          updateAction: () => {
            setSuccess(false);
          },
          change: 3,
          updateBtn: 'Update'
        };
      case 3:
        return {
          fieldHeader: 'Change Mobile',
          successMessage: 'Mobile is available',
          errorMessage: 'Mobile is already registered',
          firstField: 'Current Mobile',
          secondField: 'New Mobile',
          hiddenLabel: false,
          increaseHeight: true,
          successMessageSecond: 'New password matched',
          errorMessageSecond: 'New password didnot match',
          type: 'text',
          currentMobileDisabled: true,
          change: 4,
          updateBtn: 'Send Pin',
          updateAction: () => {
            setSuccess(false);
          }
        };
      case 4:
        return {
          fieldHeader: 'Change Mobile',
          successMessage: 'Mobile is available',
          errorMessage: 'Mobile is already registered',
          firstField: 'Current Mobile',
          secondField: 'New Mobile',
          hiddenLabel: false,
          increaseHeight: true,
          successMessageSecond: 'New password matched',
          errorMessageSecond: 'New password didnot match',
          type: 'text',
          change: 5,
          updateBtn: 'Close',
          updateAction: () => {
            setIsVisible(false);
            setSuccess(false);
          }
        };

      default: {
      }
    }
  };

  const sendOtp = async () => {
    console.log('AUTHAPI', {
      email: profileData.email,
      mobile: `+${newCountry?.dial_code}${newMobile}`
    });
    const result = await AuthAPI.sendOtpPhone({
      email: profileData.email,
      mobile: `+${newCountry?.dial_code}${newMobile}`
    });
    console.log('RESULT', result);
    setOriginalCode(result.data.code);
    setRestartCounter(Math.floor(Math.random() * 100));
  };

  const makeAllChecksFalse = () => {
    setCheckUsername(false);
    setCheckUserEmail(false);
    setCheckPassword(false);
    setCheckCountry(false);
  };

  const checkUserNameExists = async () => {
    if (tempText?.length > 0) {
      const result = await userAPI.checkUserNameExist({
        username: tempText,
        email: JSON.parse(localStorage.getItem('profile')!)?.email
      });

      if (!result.data) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } else {
      setSuccess(false);
    }
  };

  const checkMobileExistsChecker = async () => {
    if (newMobile.length > 6) {
      const result = await userAPI.checkMobileExist({
        mobile: `+${newCountry?.dial_code} ${newMobile}`,
        id: JSON.parse(localStorage.getItem('profile')!)?._id
      });

      console.log('result', result);

      if (!result.data) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } else {
      setSuccess(false);
    }
  };

  const checkEmailExists = async () => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (tempText?.length > 0 && tempText.match(regexEmail)) {
      const result = await userAPI.checkEmailExists({
        email: tempText,
        id: JSON.parse(localStorage.getItem('profile')!)?._id
      });
      if (!result.data) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
      setShowSecondaryError(false);
    } else {
      setShowSecondaryError(true);
      setSuccess(false);
    }
  };

  const checkCurrenPassword = async () => {
    const result = await userAPI.checkPasswordExist({
      password: tempText,
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });

    if (result.data) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const changeUserName = async (userName: string) => {
    const result = await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      userName
    });
    if (result.status === 200) {
      toast.success('Username successfully updated', {
        // autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined
      });
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('Username could not be updated', {});
    }
  };

  useEffect(() => {
    // to show format error

    if (tempTextNew.length > 0) {
      if (tempTextConfirm !== tempTextNew) {
        setSuccessSecond(false);
      } else {
        if (tempTextConfirm.length < 8) {
          setShowSecondaryError(true);
        } else {
          setShowSecondaryError(false);
          setSuccessSecond(true);
        }
      }
    }
  }, [tempTextConfirm, tempTextNew]);

  useEffect(() => {
    if (checkPassword && tempText?.length > 0) {
      checkCurrenPassword();
    }
  }, [checkPassword, tempText]);

  useEffect(() => {
    if (checkUserEmail && tempText?.length > 0) {
      checkEmailExists();
    }
  }, [checkUserEmail, tempText]);

  useEffect(() => {
    if (checkUsername && tempText?.length > 0) {
      checkUserNameExists();
      // check username exists in database
    }
  }, [checkUsername, tempText]);

  useEffect(() => {
    // set the country for user mobile profile
    if (profileData?.mobileCountry && !newCountry) {
      setNewCountry(profileData?.mobileCountry);
    } else if (!newCountry) {
      setNewCountry(countries[0]);
    }

    if (checkCountry && newMobile.length > 0) {
      // even with newCountry which is country code changes check the mobile
      checkMobileExistsChecker();
    }
  }, [checkCountry, newMobile, newCountry]);

  useEffect(() => {
    // get all countries
    setAllCountries(countries);
  }, [checkCountry]);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  // const toggleVisibleMobile = () => {
  //   setIsVisibleMobile(!isVisibleMobile);
  // };

  return {
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
    setDisplayData,
    displayData,
    setCheckUserEmail,
    setTempTextNew,
    setTempTextConfirm,
    tempTextNew,
    tempTextConfirm,
    makeAllChecksFalse,
    setCheckPassword,
    setSuccessSecond,
    successSecond,
    newPassword,
    setNewPassword,
    setCheckCountry,

    changeUserName,
    updateUserNameAction,
    changeEmailAction,
    toggleModal,
    open,
    changeUserPasswordAction,
    setSuccess,
    mobileCountry,
    newCountry,
    setNewCountry,
    newMobile,
    setNewMobile,
    setShowCountries,
    showCountries,

    searchedCountry,
    handleSearch,
    allCountries,
    countryCode,
    setCountryId,
    countryId,
    setSelectedCountry,
    selectedCountry,
    setCountryCode,
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
  };
};
