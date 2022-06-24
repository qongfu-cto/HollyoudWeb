import React, { useState, useEffect, useCallback, Dispatch } from 'react';
import { Branding } from '../../../utilities/branding';
import QButton from '../../Atoms/button';
import { useSignupLoginButtonStyleEN } from './stylesEN';
import { useRouter } from 'next/router';
import { onMobile } from 'utilities/utils';
import AuthenticationManagement from 'components/Organisms/AuthenticationManagement';
import { useSelector, useDispatch } from 'react-redux';
import HeaderLayoutRightSide from '../headerLayoutRightSide';
import QMenu from 'components/Atoms/menu';
import User from '../../../assets/icons/user.svg';

import {
  signOut,
  signOutFirebase
} from '../../../redux/Action/auth/authActions';
import { api } from 'services/userAPI';
import { userIsLoggedOut } from 'redux/Action/user/userActions';
import { RootState } from 'redux/Reducer/root';
import { isEmpty } from 'lodash';
import { useSearch } from 'container/search';

function SignupLoginButton() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state: any) => state.user);
  const reduxProfile = useSelector((state: any) => state.user.profile);
  const { avatar, socket } = useSelector((state: RootState) => {
    return {
      avatar: state.user.avatar,
      socket: state.app.socket
    };
  });
  const { setSearchText } = useSearch();

  console.log('reduxProfile ', setSearchText);
  console.log('reduxProfile ', avatar);
  const styles = useSignupLoginButtonStyleEN();
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState<any>('');
  const [hideButtons, setHideButtons] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);

  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem('profile')!);

    if (userprofile) {
      setHideButtons(true);
    } else {
      setHideButtons(false);
    }
  }, [
    typeof window !== 'undefined' && localStorage.getItem('profile'),
    userProfile
  ]);

  const { push } = useRouter();
  const isMobile = onMobile();
  const buttonStyle = {
    borderRadius: 4,
    height: 32,
    width: isMobile ? 80 : 120,
    marginRight: isMobile ? 5 : 10,
    marginBottom: 5
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const menuClickHandler = useCallback(
    (index: any) => {
      switch (index) {
        case 0:
          // setOpenForgot(true);
          push('/home');
          break;
        case 1:
          // signout user
          dispatch(signOut());
          dispatch(userIsLoggedOut());
          // close the socket connection
          socket && socket.close();
          // redirect the user back to dashboard
          push('/', undefined, { shallow: true });
          break;
      }
    },
    [dispatch]
  );

  return (
    <div>
      {!hideButtons ? (
        <>
          <QButton
            label=" Login"
            outline
            labelStyles={{
              color: Branding.Colors.primary.normal,
              fontSize: 14,
              textTransform: 'none'
            }}
            style={buttonStyle}
            onClick={() => {
              setOpen('login');
              toggleModal();
            }}
          />
          <QButton
            label="Sign up"
            labelStyles={{
              fontSize: onMobile() ? 12 : 14,
              textTransform: 'none',
              fontWeight: 'lighter'
            }}
            style={{
              ...buttonStyle
              // backgroundColor: Branding.Colors.primary.normal,
            }}
            onClick={() => {
              setOpen('register');
              toggleModal();
            }}
          />
        </>
      ) : (
        <HeaderLayoutRightSide
          unStyled
          right={
            <>
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
                menuList={['Move to My Qloud', 'Logout']}
                onMenuClicked={menuClickHandler}
                avatar={true}
              />
            </>
          }
        />
      )}

      <AuthenticationManagement
        setSearchText={setSearchText}
        open={open}
        showModal={showModal}
        toggleModal={toggleModal}
        setOpen={setOpen}
        setShowModal={setShowModal}
        forgotPassword={openForgot}
        setOpenForgot={setOpenForgot}
      />
    </div>
  );
}
export default SignupLoginButton;
