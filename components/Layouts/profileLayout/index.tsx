import React from 'react';
import { useAuthenticatedLayoutStylesEN } from './styleEN';
// import { sideBarData } from './sideBarData';
import Sidebar from '../../Organisms/sidebar';
import { useHandleResize } from 'utilities/hook/useHandleResize';
import { Branding } from 'utilities/branding';
import AuthenticatedPageHeader from 'components/Organisms/authenticatedPageHeader';
import { sideBarData } from 'components/Organisms/sidebar/sideBardata';

const ProfileLayout = ({
  children,
  content,
  route
}: {
  children: React.ReactElement;
  content?: React.ReactElement;
  route: string;
}) => {
  const [width, handleSideBarClick, openSideBar] = useHandleResize();

  const styles = useAuthenticatedLayoutStylesEN();
  const isServer = () => typeof window === `undefined`;

  return isServer() ? null : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row'
        // height: typeof window !== 'undefined' ? window.innerHeight : '100vh'
      }}
    >
      <Sidebar
        route={route}
        openSideBar={openSideBar}
        toggleSideBar={handleSideBarClick}
        width={width}
        activeIdProp={3}
        topSection={sideBarData.topSection}
        // bottomSection={sideBarData.bottomSection}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: Branding.Colors.offWhite,
          width: '100%',
          overflowY: 'auto'
        }}
      >
        <div className={styles.navigation}>
          <AuthenticatedPageHeader
            handleSideBarClick={handleSideBarClick}
            textOnly={false}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
