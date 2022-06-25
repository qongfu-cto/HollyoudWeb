import React, { useEffect, useState } from 'react';
import AuthenticatedPageHeader from '../../Organisms/authenticatedPageHeader';
import { useAuthenticatedLayoutStylesEN } from './styleEN';
import ChatLayout from '../chatLayout';
import SecondaryNavigation from '../../Organisms/secondaryNavigation';
import Sidebar from '../../Organisms/sidebar';
import { useHandleResize } from 'utilities/hook/useHandleResize';
import InfoWhite from '../../../assets/icons/info-white.svg';
import QLOUDICON from '../../../assets/icons/qloudCityIcon.svg';

import NewToast from 'components/Atoms/newToast';
import MyQloudNotificationBar from 'components/Molecules/MyQloudNotificationBar';
import MyQloudNavBar from 'components/Molecules/MyQloudNavBar';
import { AuthAPI } from 'services/authAPI';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { sideBarData } from 'components/Organisms/sidebar/sideBardata';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { isEmpty, isUndefined } from 'lodash';
import { fullPageHeight } from 'utilities/utils';
import { Branding } from 'utilities/branding';

const AuthenticatedLayout = () => {
  const style = useAuthenticatedLayoutStylesEN();
  const router = useRouter();
  const [width, handleSideBarClick, openSideBar] = useHandleResize();
  const [emailSent, setEmailSent] = useState(false);
  const [profile, setProfile] = useState<any>();
  const height = fullPageHeight();
  const { profileData } = useSelector((state: RootState) => {
    return {
      profileData: state.user.profile
    };
  });

  useEffect(() => {
    if (isUndefined(profile)) {
      if (!isEmpty(profileData?.first_name)) {
        setProfile(profileData);
      } else {
        setProfile(JSON.parse(localStorage.getItem('profile')!));
      }
    }
    // if (!profile) back();
  }, [profile, profileData]);

  const handleResendVerification = async () => {
    const result = await AuthAPI.resendVerifictionEmail({
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });
    console.log('result', result);
    if (result.status === 200) {
      setEmailSent(true);
    }
  };

  const isServer = () => typeof window === `undefined`;

  return isServer() ? null : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {/* <div style={{ width: openSideBar ? 250 : 75 }}>
        <div style={{ position: 'fixed', backgroundColor: 'white' }}>
          <Sidebar
            route={'./'}
            openSideBar={openSideBar}
            toggleSideBar={handleSideBarClick}
            width={width}
            activeIdProp={3}
            topSection={sideBarData.topSection2}
          />
        </div>
      </div> */}
      <Sidebar
        route={'./'}
        openSideBar={openSideBar}
        toggleSideBar={handleSideBarClick}
        width={width}
        activeIdProp={3}
        topSection={sideBarData.topSection2}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box className={style.navigation}>
          <AuthenticatedPageHeader
            handleSideBarClick={handleSideBarClick}
            textOnly={true}
          />
          <MyQloudNavBar
            backBottonText="Go to QloudCity"
            title={'@' + profile?.username}
            icon={<Image src={QLOUDICON} alt="" width={24} height={24} />}
            secondBotton="Manage My Profile"
            firstBottonStyle={style.profilebtn}
            secondBottonStyle={style.profilebtn}
            secondAction={() =>
              router.push('/myqloud/profile/edit/profile-info')
            }
            backAction={() => router.push('/')}
          />

          {JSON.parse(localStorage.getItem('profile')!) &&
            !JSON.parse(localStorage.getItem('profile')!)?.verified && (
              <MyQloudNotificationBar
                message="Please check your email for a verification request. If you haven't
            received a request to verify your email please click the Resend Email
            button."
                btnMessage={'Resend Email'}
                icon={InfoWhite}
                action={handleResendVerification}
              />
            )}

          <NewToast
            message={'Email sent'}
            type={'success'}
            visible={emailSent}
            setVisible={setEmailSent}
            duration={2000}
          />

          <SecondaryNavigation
            component={'profile'}
            width={width}
            // withShadow
            averageNavItemWidth={245}
            subClicked={() => {}}
            subDeleted={() => {}}
          />

          {/* <ChatLayout /> */}
        </Box>
      </div>
    </Box>
  );
};

export default AuthenticatedLayout;
