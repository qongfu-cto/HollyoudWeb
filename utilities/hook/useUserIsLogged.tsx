import { onAuthStateChanged } from '@firebase/auth';
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import {
  getUserGeolocation,
  getUserGeolocationReceive,
  getUserIPAddress,
  getUserIPAddressReceive,
  getUserProfile,
  getUserProfileReceive,
  userIsLoggedIn,
  userIsLoggedOut
} from '../../redux/Action/user/userActions';
import nookies from 'nookies';
import { RootState } from '../../redux/Reducer/root';
import { signinFirebase } from '../../redux/Action/auth/authActions';
import router from 'next/router';
import { Profile } from 'types/userProfile';
import { getMyPlaces } from 'redux/Action/myQloud/myQloudActions';

interface useUserIsLoggedContextProps {
  path: string | null;
  isLogged: boolean;
  profile: any | Profile;
  getProfile: () => void;
}

const UserIsLoggedContext = createContext<useUserIsLoggedContextProps>(
  {} as useUserIsLoggedContextProps
);

export const UserIsLoggedProvider = ({ children }: any) => {
  const {
    path,
    userIsLogged,
    authIsLogged,
    ipAddressLoading,
    profile
  } = useSelector((state: RootState) => {
    return {
      path: state.user.path,
      authIsLogged: state.auth.userIsLogged,
      userIsLogged: state.user.userIsLogged,
      ipAddressLoading: state.user.loading.ipAddress,
      profile: state.user.profile
    };
  });

  const isLogged = useMemo(() => userIsLogged, [userIsLogged]);
  const localProfile =
    typeof window !== 'undefined' && localStorage.getItem('profile');
  const userprofile = localProfile ? JSON.parse(localProfile) : null;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userprofile) {
      getProfile();
    } else {
      localStorage.removeItem('profile');
      localStorage.removeItem('path');
      nookies.destroy(null, 'uid');
      dispatch(userIsLoggedOut());
    }
  }, [typeof window !== 'undefined' && localStorage.getItem('profile')]);
  
  const getProfile = () => {
    const localProfile = localStorage.getItem('profile');

    if (localProfile) {
      const path = localStorage.getItem('path');
      const getPath = path ?? '/home';
      dispatch(getUserProfileReceive(JSON.parse(localProfile), getPath));
    }

    dispatch(userIsLoggedIn());
    dispatch(getMyPlaces());
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  const getIpAddress = () => {
    const location = sessionStorage.getItem('geolocation');
    const currentLocation = sessionStorage.getItem('currentLocation');
    const locationData = currentLocation
      ? JSON.parse(currentLocation)
      : location
      ? JSON.parse(location)
      : null;

    if (locationData) {
      dispatch(getUserGeolocationReceive(locationData));
      localStorage.setItem('geolocation', JSON.stringify(locationData));
      return;
    }
    // dispatch(getUserIPAddress());
    dispatch(getUserGeolocation());
  };

  return (
    <UserIsLoggedContext.Provider
      value={{ path, isLogged, profile, getProfile }}
    >
      {/* {loading ? <Loading /> : children} */}
      {children}
    </UserIsLoggedContext.Provider>
  );
};

export function useUserIsLogged() {
  const context = useContext(UserIsLoggedContext);

  return context;
}
