import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { isEmpty, isNull, isUndefined } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { Styles } from './style';
import ARROW from '../../../assets/icons/arrow-left.svg';
import NextIcon from '../../../assets/icons/next-icon.svg';
import InfoWhite from '../../../assets/icons/info-white.svg';

import Text from '../../Atoms/text';
import Toast from '../../Atoms/toast';
import QButton from 'components/Atoms/button';
import NewToast from 'components/Atoms/newToast';

import WarningModal from 'components/Molecules/warningModal';
import MyQloudNavBar from 'components/Molecules/MyQloudNavBar';
import MyQloudNotificationBar from 'components/Molecules/MyQloudNotificationBar';

import { Branding } from 'utilities/branding';
import { useProFile } from 'container/profile';
import { RootState } from '../../../redux/Reducer/root';
// import { navList } from './navList';
import ProfileBasicInfo from 'components/Organisms/profileBacicInfo';
import ProfilePageGeneralInfo from 'components/Organisms/profilePageGeneralInfo';
import ProfilePageInfo from 'components/Organisms/profilePageInfo';
import * as userAction from '../../../redux/Action/user/userActions';
import * as appAction from '../../../redux/Action/app/appActions';
import { AuthAPI } from 'services/authAPI';

type SideTabsProps = {
  home: any;
  navList?: {}[];
  currentTab?: (item: any, value?: any) => void;
  submit?: () => void;
};

const SideTabs = ({ home, currentTab }: SideTabsProps) => {
  const style = Styles();
  const router = useRouter();
  const dispatch = useDispatch();

  const [active, setActive] = useState(home);
  const [currentProps, setCurrentProps] = useState(home);
  const { profileData } = useSelector((state: RootState) => {
    return {
      profileData: state.user.profile
    };
  });
  const { user } = useSelector((state: any) => ({ ...state }));
  const [profile, setProfile] = useState<any>();
  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [disableUpdate, setDisableUpdate] = useState(true);

  useEffect(() => {
    if (count === 1) {
      dispatch(appAction.fetchAllCountries());
      dispatch(appAction.fetchAllLanguages());
      setCount(2);
    }
    if (isEmpty(profile)) {
      console.log('Profile empty');
      if (!isEmpty(profileData?.first_name)) {
        console.log('get Profile from state');
        console.log(profileData);
        setProfile(profileData);
      } else {
        console.log('get Profile from storage');
        setProfile(JSON.parse(localStorage.getItem('profile')!));
      }
    }
    // if (!profile) back();
  }, [profile, profileData]);

  console.log('profile SideTabs', profile);
  const [showToast, setShowToast] = useState({
    state: false,
    message: '',
    error: false
  });
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({
    displayName: profile?.display_name ? profile?.display_name : '',
    tagLine: profile?.tagLine ? profile?.tagLine : '',
    bio: profile?.bio ? profile?.bio : '',
    firstName: profile?.first_name ? profile?.first_name : '',
    lastName: profile?.last_name ? profile?.last_name : '',
    dob: profile?.dob ? profile?.dob : '',
    languages: profile?.languages ? profile?.languages : [],
    gender: profile?.gender ? profile?.gender : '',
    nationality: profile?.nationality?.name
      ? {
          value: profile?.nationality?.id,
          label: profile?.nationality?.name
        }
      : { value: 0, label: '' }
  });

  useEffect(() => {
    if (!isEmpty(profileData?.first_name)) {
      setInputs({
        displayName: profileData?.display_name,
        tagLine: profileData?.tagLine,
        bio: profileData?.bio,
        firstName: profileData?.first_name,
        lastName: profileData?.last_name,
        dob: profileData?.dob,
        languages: profileData?.languages,
        gender: profileData?.gender,
        nationality: {
          value: profileData?.nationality?.id,
          label: profileData?.nationality?.name
        }
      });
    } else {
      const Data = JSON.parse(localStorage.getItem('profile')!);
      setInputs({
        displayName: Data?.display_name,
        tagLine: Data?.tagLine,
        bio: Data?.bio,
        firstName: Data?.first_name,
        lastName: Data?.last_name,
        dob: Data?.dob,
        languages: Data?.languages,
        gender: Data?.gender,
        nationality: {
          value: Data?.nationality?.id,
          label: Data?.nationality?.name
        }
      });
    }

    // if (!profile) back();
  }, [profileData]);

  const handleInputsChange = (value: any, type: any) => {
    console.log('handleInputsChange');
    console.log(value);
    console.log(type);
    setDisableUpdate(false);
    if (type === 'name') {
      inputs.displayName = value;
    } else if (type === 'tag') {
      inputs.tagLine = value;
    } else if (type === 'bio') {
      inputs.bio = value;
    } else if (type === 'firstName') {
      inputs.firstName = value;
    } else if (type === 'lastName') {
      inputs.lastName = value;
    } else if (type === 'language') {
      inputs.languages = value;
    } else {
      const birthday = moment(value).format('YYYY-MM-DD');
      console.log('Data ', birthday);
      inputs.dob = birthday;
    }
  };

  const handleMenuChange = (value: any, type: any) => {
    console.log('handleMenuChange');
    console.log(value);
    console.log(type);
    setDisableUpdate(false);
    if (type === 'gender') {
      inputs.gender = value[0].label;
    } else if (type === 'Nationality') {
      inputs.nationality = value[0];
    }
  };

  const navList = [
    {
      id: 1,
      label: 'My Account',
      title: 'General Information',
      description: '',
      tabPage: true,
      route: 'account',
      component: (
        <ProfilePageGeneralInfo setShow={setShow} setShowToast={setShowToast} />
      )
    },
    {
      id: 2,
      label: 'Profile Info',
      title: 'Profile Info',
      description: '',
      tabPage: true,
      route: 'profile-info',
      component: <ProfilePageInfo handleInputsChange={handleInputsChange} />
    },
    {
      id: 3,
      label: 'Personal Info',
      title: 'Personal Info',
      description: '',
      tabPage: true,
      route: 'basic-info',
      component: (
        <ProfileBasicInfo
          handleInputsChange={handleInputsChange}
          handleMenuChange={handleMenuChange}
        />
      )
    }
    // {
    //   id: 4,
    //   label: 'My Interests',
    //   title: 'My Interests',
    //   description: '',
    //   tabPage: false,
    //   route: 'account',
    //   component: <div>My Interests</div>
    // }
  ];

  const data: any = navList.find(data => data.id === currentProps);

  const handleResendVerification = async () => {
    const result = await AuthAPI.resendVerifictionEmail({
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });
    console.log('result', result);
    if (result.status === 200) {
      setEmailSent(true);
    }
  };
  const [emailSent, setEmailSent] = useState(false);

  const onListClick = (id: number, tabPage: boolean, route: string) => {
    if (!tabPage) return;
    // TODO: Set this up post MVP
    router.push(`/myqloud/profile/edit/${route}`);
    setActive(id);
    setCurrentProps(id);
    //currentTab(id);
  };

  useMemo(() => {
    setTimeout(() => {
      console.log('useMemo user', user);
      if (show) {
        if (user.errors.profile === '') {
          setShowToast({
            state: true,
            message: 'Updated Successfully',
            error: false
          });
        } else if (isUndefined(user.errors.profile)) {
          setShowToast({
            state: false,
            message: '',
            error: false
          });
        } else {
          setShowToast({
            state: true,
            message: user.errors.profile,
            error: true
          });
        }
      } else {
        setShowToast({
          state: false,
          message: '',
          error: false
        });
      }
    }, 1000);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [show, user]);

  const handleClose = () => {
    console.log('disableUpdate ', disableUpdate);
    if (!disableUpdate) {
      console.log(localStorage.getItem('confirm'));
      if (!isNull(localStorage.getItem('confirm'))) {
        const confirm = localStorage.getItem('confirm')!;
        if (confirm !== 'true') {
          setOpen(true);
        } else {
          router.push('/home');
        }
      } else {
        setOpen(true);
      }
    } else {
      router.push('/home');
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('save in localStorage');
    setChecked(event.target.checked);
    localStorage.setItem('confirm', event.target.checked.toString());
  };

  const Confirm = () => {
    router.push('/home');
    setOpen(false);
  };

  const submit = () => {
    console.log('payload ', inputs);
    console.log(profile);
    setDisableUpdate(true);
    // const result = await userAPI.userProfile({
    //   email: JSON.parse(localStorage.getItem('profile')!)?.email,
    //   bio: tempText
    // });
    dispatch(
      userAction.updateProfile({
        email: JSON.parse(localStorage.getItem('profile')!)?.email,
        first_name: inputs.firstName,
        last_name: inputs.lastName,
        displayName: inputs.displayName,
        tagLine: inputs.tagLine,
        bio: inputs.bio,
        gender: inputs.gender,
        nationality: {
          id: inputs.nationality.value,
          name: inputs.nationality.label
        },
        dob: inputs.dob,
        languages: inputs.languages
      })
    );
    setShow(true);
  };

  return (
    <>
      <MyQloudNavBar
        backBottonText="Back to Main"
        title="Manage Profile"
        icon={<Image src={ARROW} alt="" width={6} height={11} />}
        firstBotton="Close"
        secondBotton="Update"
        firstBottonStyle={style.closebtn}
        secondBottonStyle={style.updatebtn}
        firstAction={() => handleClose()}
        secondAction={() => submit()}
        backAction={() => router.push('/home')}
        disabled={disableUpdate}
      />
      <WarningModal
        open={open}
        handleClose={handleCloseModal}
        maxWidth="xs"
        title="Are you sure?"
        content={
          <>
            <Text
              label={'Warning! You will lose all your changes.'}
              textProps={{
                classes: { root: style.modalText }
              }}
            />
            <FormGroup className={style.check}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChecked} />
                }
                label={
                  <Text
                    label={'Do not ask again.'}
                    textProps={{
                      classes: { root: style.checkText }
                    }}
                  />
                }
              />
            </FormGroup>
          </>
        }
        firstBtn={'DISCARD CHANGES'}
        secondBtn={'CANCEL'}
        firstBtnStyle={style.discardButton}
        secondBtnStyle={style.cancelButton}
        action={Confirm}
      />
      <Box className={style.container}>
        {showToast.state && (
          <Box className={style.container2}>
            <Toast
              text={showToast.message}
              error={showToast.error}
              margin={`10px 0 0 0`}
            />
          </Box>
        )}
        <Box className={style.tabContainer}>
          {navList?.map((l: navListObject, index: any) => (
            <Box
              key={index}
              className={[style.tabCard, active === l.id && style.active].join(
                ' '
              )}
              onClick={() => onListClick(l.id, l.tabPage, l.route)}
              onTouchStart={() => setActive(l.id)}
            >
              <Text
                label={l.label}
                textProps={{
                  classes: {
                    root:
                      active === l.id ? style.activeText : style.inactiveText
                  }
                }}
              />
              <Image src={NextIcon} alt="" width={24} height={24} />
            </Box>
          ))}
        </Box>
        <Box className={style.componentContainer}>
          <Box className={style.btnHeader}>
            <Box className={style.header}>
              <Text
                label={data?.title}
                textProps={{ classes: { root: style.title } }}
              />
              <Text
                label={data?.description}
                textProps={{ classes: { root: style.subTitle } }}
              />
            </Box>
          </Box>
          {data?.component}
        </Box>
      </Box>
    </>
  );
};

export default SideTabs;
