import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Styles } from './style';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MobileQloudNavbar from 'components/Molecules/MobileQloudNavbar';
import UserProfileData from 'components/Molecules/userProfileData';
import Background from '../../../assets/images/3028@3x.png';

import ProfileCard from '../../Atoms/profileCard';
import Drawer from 'react-bottom-drawer';
import InfoWhite from '../../../assets/icons/info-white.svg';

import EditProfileIcon from '../../../assets/images/edit_profile_icon.svg';
import ViewPublicProfileIcon from '../../../assets/images/view_public_profile_icon.svg';
import SettingsIcon from '../../../assets/images/settings_icon.svg';
import Interests from '../../../assets/images/interests.svg';
import PublicProfile from '../../../assets/images/public-profile.svg';
import HelpDeskIcon from '../../../assets/images/help_desk_icon.svg';
import MyPlaces from 'assets/icons/my-places-icon.svg';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import MyQloudNotificationBar from 'components/Molecules/MyQloudNotificationBar';
import { AuthAPI } from 'services/authAPI';
import NewToast from 'components/Atoms/newToast';
import { getUserProfile } from 'redux/Action/user/userActions';

const MobileProfileLayout = () => {
  const styles = Styles();
  const { push } = useRouter();
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = React.useState(false);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  const [emailSent, setEmailSent] = useState(false);

  const { myPlaces } = useSelector((state: RootState) => ({
    myPlaces: state.myQloud.myPlaces
  }));
  const toggleDrawer = () => {
    setIsVisible(!isVisible);
  };

  const handleResendVerification = async () => {
    const result = await AuthAPI.resendVerifictionEmail({
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });
    console.log('result', result);
    if (result.status === 200) {
      setEmailSent(true);
    }
  };

  return (
    <div>
      <NewToast
        message={'Email sent'}
        type={'success'}
        visible={emailSent}
        setVisible={setEmailSent}
        duration={2000}
      />
      <MobileQloudNavbar toggleDrawer={toggleDrawer} />
      <Box className={styles.navigation}>
        {JSON.parse(localStorage.getItem('profile')!) &&
          !JSON.parse(localStorage.getItem('profile')!)?.verified && (
            <MyQloudNotificationBar
              message="Email verification request sent"
              btnMessage={'Tap To Resend'}
              icon={InfoWhite}
              action={handleResendVerification}
              onMobile={true}
            />
          )}
        <Image
          className={styles.bgImage}
          alt="User avatar"
          src={Background}
          layout="responsive"
          objectFit="contain"
        />
        <UserProfileData />

        <div className={styles.cardsSection}>
          <p className={styles.about}>Manage</p>
          <ProfileCard
            icon={MyPlaces}
            cardHeader="My Places"
            cardBody="All my favorited places"
            action={() => {
              push('/home/myplaces');
            }}
            hasShadow={true}
          />
        </div>

        <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
        >
          <div className="drawer-content">
            <ProfileCard
              cardHeader="My Account"
              // icon={<ModeEditIcon className={styles.drawericon} />}
              icon={EditProfileIcon}
              action={() => {
                push('/accountInfo', undefined, { shallow: true });
              }}
            />
            <ProfileCard
              cardHeader="Profile Info"
              icon={ViewPublicProfileIcon}
              action={() => {
                push('/home/profile', undefined, { shallow: true });
              }}
            />
            <ProfileCard
              cardHeader="Personal Info"
              icon={SettingsIcon}
              action={() => {
                push('/home/personalInfo', undefined, { shallow: true });
              }}
            />
            {/* <ProfileCard
              cardHeader="My Interests"
              icon={Interests}
              action={() => {}}
            /> */}
            <ProfileCard
              cardHeader="View my Public Profile"
              icon={PublicProfile}
              action={() => {
                push('/home/publicProfile', undefined, { shallow: true });
              }}
            />
            {/* <ProfileCard
              cardHeader="Settings"
              icon={HelpDeskIcon}
              action={() => {}}
            /> */}
          </div>
        </Drawer>
      </Box>
    </div>
  );
};

export default MobileProfileLayout;
