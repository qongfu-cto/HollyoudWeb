import React, { useState, useEffect } from 'react';
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

const QloudShopLayout = () => {
  const style = useAuthenticatedLayoutStylesEN();
  const router = useRouter();
  const [width, handleSideBarClick, openSideBar] = useHandleResize();
  const [emailSent, setEmailSent] = useState(false);

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
        // height: typeof window !== 'undefined' ? window.innerHeight : '100vh'
      }}
    >
      <Sidebar
        route="./"
        openSideBar={openSideBar}
        toggleSideBar={handleSideBarClick}
        width={width}
        activeIdProp={3}
        topSection={sideBarData.topSection2}
      />

      <Box className={style.navigation}>
        <AuthenticatedPageHeader
          handleSideBarClick={handleSideBarClick}
          textOnly={true}
        />

        <SecondaryNavigation
          component={'qloudShop'}
          width={width}
          withShadow
          averageNavItemWidth={245}
          subClicked={() => {}}
          subDeleted={() => {}}
        />
      </Box>
    </Box>
  );
};

export default QloudShopLayout;
