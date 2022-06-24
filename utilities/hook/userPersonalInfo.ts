import { fetchAllCountries } from './../../redux/Action/app/appActions';
import Toast from 'components/Atoms/toast';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLanguages } from 'redux/Action/app/appActions';
import { formatDateToMonthDayAndYear } from '../../utilities/utils';
import { userAPI } from 'services/userAPI';
import { toast } from 'react-toastify';
import { getUserProfile } from 'redux/Action/user/userActions';

export const usePersonalInfo = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [dob, setDob] = useState('');
  const [realdob, setRealDob] = useState('');
  const [gender, setGender] = useState<string>('');
  const [nationality, setNationality] = useState('');
  const [userLanguages, setUserLanguages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [displayData, setDisplayData] = useState<any>({});
  const [success, setSuccess] = useState<any>(null);

  // selections
  const [searchedValue, setSearchedValue] = useState('');
  const [allCountries, setAllCountries] = useState([]);

  const [selectionId, setSelectionId] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectionIdLanguage, setSelectionIdLanguage] = useState('');
  const [allLanguages, setAllLanguages] = useState<any>([]);
  const [allRealLanguages, setAllRealLanguages] = useState<any>([]);

  const [selectedLanguages, setSelectedLanguages] = useState<any>({});

  const [tempText, setTempText] = useState<string>('');
  const [tempTextNew, setTempTextNew] = useState<string>('');

  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  const { languages, countries, profileData } = useSelector((state: any) => {
    return {
      languages: state.app.languages,
      countries: state.app.countries,
      profileData: state.user.profile
    };
  });

  useEffect(() => {
    setFirstName(profileData.first_name);
    setSecondName(profileData.last_name);

    if (profileData?.dob) {
      setDob(
        formatDateToMonthDayAndYear(new Date(profileData.dob), 'MM/dd/yyyy')
      );
      setRealDob(profileData.dob);
    }
    setGender(profileData.gender);
    setSelectionId(profileData.nationality?.id);
    setSelectedNationality(profileData.nationality?.name);
    setNationality(profileData.nationality?.name);

    setAllLanguages(
      profileData.languages.map((language: any) => language.language)
    );

    profileData.languages.map((language: any) => {
      // setSelectedLanguages((prev:any) => {...prev })
      setSelectedLanguages((prev: any) => ({
        ...prev,
        [language._id.toString()]: true
      }));
    });
  }, [profileData]);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleChangeSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setSelectedLanguages({
      ...selectedLanguages,
      [id]: event.target.checked
    });
  };

  const data = (code: number) => {
    switch (code) {
      case 9:
        return {
          fieldHeader: 'Change Name',
          successMessage: '',
          errorMessage: '',
          firstField: 'First Name',
          secondField: 'Last Name',
          updateAction: () => {
            // setSuccess(false);
          },
          change: 9,
          lowerCase: true,
          updateBtn: 'Update',
          hiddenLabel: false,
          lessIncreasesdHeight: true,
          only2Inputs: true,
          textFields: true
        };
      case 10:
        return {
          fieldHeader: 'Date of Birth',
          successMessage: '',
          errorMessage: '',
          firstField: '',
          secondField: '',
          updateAction: () => {
            // setSuccess(false);
            // setTempText('');
          },
          change: 10,
          lowerCase: true,
          updateBtn: 'Update',
          hiddenLabel: true,
          // increaseHeight: true,
          dob: true
        };
      case 11:
        return {
          fieldHeader: 'Set Gender',
          successMessage: '',
          errorMessage: '',
          firstField: '',
          secondField: '',
          updateAction: () => {
            // setSuccess(false);
            // setTempText('');
          },
          change: 11,
          lowerCase: true,
          updateBtn: 'Done',
          hiddenLabel: true,
          // increaseHeight: true,
          gender: true
        };
      case 12:
        return {
          fieldHeader: 'Set Nationality',
          successMessage: '',
          errorMessage: '',
          firstField: '',
          secondField: '',
          updateAction: () => {
            setSearchedValue('');
            setAllCountries(countries);
          },
          change: 12,
          lowerCase: true,
          updateBtn: 'Done',
          hiddenLabel: true,
          nationalities: true,
          increaseHeight: true
        };
      case 13:
        return {
          fieldHeader: 'Languages',
          successMessage: '',
          errorMessage: '',
          firstField: '',
          secondField: '',
          updateAction: () => {
            setSearchedValue('');
            // setSuccess(false);
            // setTempText('');
          },
          change: 13,
          lowerCase: true,
          updateBtn: 'Done',
          hiddenLabel: true,
          languages: true,
          increaseHeight: true
        };

      default: {
      }
    }
  };

  const handleSearch = (e: any) => {
    setSearchedValue(e.target.value);

    if (e.target.value) {
      const allcountriess = countries.filter(
        (country: any) =>
          country.country
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          country.nationality
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          country.dial_code.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setAllCountries(allcountriess);
    } else {
      setAllCountries(countries);
    }
  };

  useEffect(() => {
    if (languages.length > 0) {
      setAllRealLanguages(languages);
    }
  }, [languages.length]);

  useEffect(() => {
    if (countries.length > 0) {
      setAllCountries(countries);
    }
  }, [countries.length]);

  const handleSearchLanguages = (e: any) => {
    setSearchedValue(e.target.value);

    if (e.target.value) {
      const allLanguagess = languages.filter((language: any) =>
        language.language.toLowerCase().includes(e.target?.value?.toLowerCase())
      );
      setAllRealLanguages(allLanguagess);
    } else {
      setAllCountries(countries);
    }
  };

  const getUserProfileAction = () => {
    dispatch(getUserProfile(profileData.email));
  };

  const clearAllTexts = () => {
    setTempText('');
    setTempTextNew('');
  };

  const updateUserFirstAndLastName = async () => {
    setFirstName(tempText);
    setSecondName(tempTextNew);
    // backend update username
    const result = await userAPI.userProfile({
      email: profileData.email,
      first_name: tempText,
      last_name: tempTextNew
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('User First and last name updated', {});
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('User First and last name could not be updated', {});
    }
  };

  const updateUserLanguages = async () => {
    // remove prev languages
    setAllLanguages([]);
    const tempLanguages: any[] = [];

    Object.keys(selectedLanguages).forEach((key: any) => {
      const newLanguage = allRealLanguages.filter(
        (language: any) => language._id.toString() === key.toString()
      );

      if (selectedLanguages[key]) {
        setAllLanguages((prev: any) => [...prev, newLanguage[0]?.language]);

        tempLanguages.push(newLanguage[0]?._id);
      }
    });

    // backend
    const result = await userAPI.userProfile({
      email: profileData.email,
      languages: tempLanguages
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('Languages updated', {});
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('Languages could not be updated', {});
    }
  };

  const updateDOB = async () => {
    const newDate = formatDateToMonthDayAndYear(tempText, 'MM/dd/yyyy');

    setDob(newDate);
    setRealDob(tempText);
    // backend update user dob
    const result = await userAPI.userProfile({
      email: profileData.email,
      dob: tempText
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('User date of birth updated', {});
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('User date of birth could not be updated', {});
    }
  };

  const updateUserGender = async (userGender: string) => {
    setGender(userGender);

    const result = await userAPI.userProfile({
      email: profileData.email,
      gender: userGender
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('User Gender updated', {});
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('Mobile number could not be updated', {});
    }
  };

  const updateUserNationality = async () => {
    setNationality(selectedNationality);

    // backend update user dob
    const result = await userAPI.userProfile({
      email: profileData.email,
      nationality: {
        id: selectionId,
        name: selectedNationality
      }
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('User nationality updated', {});
      getUserProfileAction();
      clearAllTexts();
    } else {
      toast.error('User nationality could not be updated', {});
    }
  };

  useEffect(() => {
    dispatch(fetchAllLanguages());
    dispatch(fetchAllCountries());
  }, []);

  return {
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
  };
};
