import Img from 'components/Atoms/img';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import User from '../../../assets/icons/user.svg';
import { signOutFirebase } from '../../../redux/Action/auth/authActions';
import { Branding } from '../../../utilities/branding';
import QMenu from '../../Atoms/menu';
import Text from '../../Atoms/text';
import HeaderLayoutRightSide from '../../Molecules/headerLayoutRightSide';
import { useAuthenticatedPageHeaderStylesEN } from './styleEN';
import menu from '../../../assets/icons/menu_icon.svg';
import cityLogo from '../../../assets/images/QloudCityLogo_Compact.svg';
import { useSelector } from 'react-redux';
import { api } from 'services/userAPI';
import { userIsLoggedOut } from 'redux/Action/user/userActions';
import { RootState } from 'redux/Reducer/root';
import { isEmpty } from 'lodash';

interface AuthenticatedPageHeaderProps {
  handleSideBarClick: () => void;
  textOnly: boolean;
}

const AuthenticatedPageHeader = ({
  handleSideBarClick,
  textOnly
}: AuthenticatedPageHeaderProps) => {
  const reduxProfile = useSelector((state: any) => state.user.profile);
  const { avatar } = useSelector((state: RootState) => {
    return {
      avatar: state.user.avatar
    };
  });
  const styles = useAuthenticatedPageHeaderStylesEN();
  const dispatch = useDispatch();
  const { push } = useRouter();
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  const menuClickHandler = useCallback(
    index => {
      switch (index) {
        case 0:
          // TODO: Set this up post MVP
          // push('./');
          // push('./myqloud/profile');
          dispatch(signOutFirebase());
          dispatch(userIsLoggedOut());
          push('/');
          break;
      }
    },
    [dispatch]
  );
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {width < 768 ? (
          <Img source={cityLogo} alt="logo" style={styles.img} />
        ) : null}
        <Img
          source={menu}
          alt="logo"
          style={styles.menu}
          click={handleSideBarClick}
        />
        {/* {textOnly ? (
          <Text labelColor={Branding.Colors.black[100]} label="Welcome back!" />
        ) : (
          <Breadcrumb
            // onClick={undefined}
            paths={[{ label: 'Back to My Profile', route: '/home' }]}
            pageName={'Profile'}
          />
        )} */}
      </div>
      <HeaderLayoutRightSide
        unStyled
        right={
          <QMenu
            icon={
              reduxProfile?.avatar?.includes('https')
                ? reduxProfile?.avatar
                : reduxProfile?.avatar
                ? `${api}/profile/uploads/${reduxProfile?.avatar}`
                : !isEmpty(avatar)
                ? `${api}/profile/uploads/${avatar}`
                : User
            }
            menuList={['Logout']}
            onMenuClicked={menuClickHandler}
            avatar={true}
          />
        }
        // center={
        //   <Text
        //     label={JSON.parse(localStorage.getItem('profile')!)?.username}
        //     labelColor={Branding.Colors.black[100]}
        //   />
        // }
        // left={
        //   <div style={{ display: 'flex', flexDirection: 'row' }}>
        //     <div className={styles.box} />
        //     <div className={styles.box} />
        //     <div className={styles.box} />
        //   </div>
        // }
      />
    </div>
  );
};

export default AuthenticatedPageHeader;
