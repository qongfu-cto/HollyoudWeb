import {
  call,
  delay,
  fork,
  put,
  select,
  takeEvery,
  takeLatest
} from '@redux-saga/core/effects';
import * as actionTypes from '../Action/user/userActionTypes';
import * as actions from '../Action/user/userActions';
import { userAPI } from '../../services/userAPI';
import Cookies from 'js-cookie';
import { RootState } from 'redux/Reducer/root';

const token: string = Cookies.get('token') ?? '';

export function* createAccount() {
  yield takeEvery(
    actionTypes.CREATE_ACCOUNT,

    function*() {
      const { email, token, password } = yield select(state => state.auth);

      const response: response = yield call(
        userAPI.createAccount,
        password,
        email
      );

      if (response.status == 200) {
        // localStorage.setItem('profile', JSON.stringify(response.data));
        yield put(actions.createAccountReceive(response.data));
      }

      if (response.status == 401) {
        yield put(actions.createAccountError(response.data));
      }
    }
  );
}

export function* getUserIPAddress() {
  yield takeEvery(
    actionTypes.GET_USER_IP_ADDRESS,

    function*() {
      const response: response = yield call(userAPI.userIP);

      if (response.status == 200) {
        sessionStorage.setItem('IPAddress', JSON.stringify(response.data));
        yield put(actions.getUserIPAddressReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.getUserIPAddressError(response.data));
      }
    }
  );
}

export function* getUserGeolocation() {
  yield takeEvery(
    actionTypes.GET_USER_GEOLOCATION,

    function*() {
      const { ipAddress } = yield select(state => {
        return {
          ipAddress: state.user.ipAddress
        };
      });

      const response: response = yield call(userAPI.userGeolocationIP);

      if (response.status == 200) {
        sessionStorage.setItem('geolocation', JSON.stringify(response.data));
        yield put(actions.getUserGeolocationReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.getUserGeolocationError(response.data));
      }
    }
  );
}
export function* getUserPath() {
  let path;
  // yield delay(1000);

  const { hasMobile, requireOnBoarding, userIsLogged } = yield select(state => {
    return {
      hasMobile: state.user.hasMobile,
      requireOnBoarding: state.user.requireOnBoarding,
      userIsLogged: state.user.userIsLogged
    };
  });

  if (!userIsLogged) {
    path = '/';
  } else if (userIsLogged && !hasMobile) {
    path = '/signup';
  } else if (userIsLogged && hasMobile && requireOnBoarding) {
    path = '/signup/onboarding';
  } else if (userIsLogged && hasMobile && !requireOnBoarding) {
    path = '/home';
  }

  if (path) {
    localStorage.setItem('path', path);
    yield put(actions.userStatePathReceive(path));
  }
}

export function* getUserProfile() {
  yield takeLatest(
    actionTypes.GET_USER_PROFILE,

    function*({ email, token }: any) {
      const response: response = yield call(
        userAPI.getUserProfile,
        token,
        email
      );

      if (response.status == 200 || response.status == 201) {
        localStorage.setItem('profile', JSON.stringify(response.data));

        yield put(actions.getUserProfileReceive(response.data, ''));
        yield fork(getUserPath);
      }
      if (response.status == 401) {
        yield put(actions.getUserProfileError(response.data));
        yield call(actions.createAccount);
      }
    }
  );

  //yield takeLatest(actions.userStatePath, getUserPath);
}

export function* updateProfile() {
  yield takeEvery(
    actionTypes.UPDATE_PROFILE,

    function*({ payload }: any) {
      // const { id } = yield select(state => {
      //   return {
      //     id: state.user.profile._id
      //   };
      // });

      const response: response = yield call(userAPI.updateProfile, payload);
      console.log('updateProfile response ', response);
      if (response.status == 200) {
        localStorage.setItem('profile', JSON.stringify(response.data));
        yield put(
          actions.getUserProfile(
            JSON.parse(localStorage.getItem('profile')!)?.email
          )
        );
        yield put(actions.updateProfileReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.updateProfileError(response.data));
      }
    }
  );
}

export function* updateProfileWithPhoneNumber() {
  yield takeEvery(
    actionTypes.UPDATE_PROFILE_WITH_PHONE_NUMBER,

    function*({ phone }: any) {
      const { id, token, email } = yield select(state => {
        return {
          id: state.user.profile._id,
          email: state.user.profile.email,
          token: state.auth.token
        };
      });

      const payload = {
        mobile: phone
      };

      const response: response = yield call(
        userAPI.updateProfile,
        payload,
        id,
        token
      );

      if (response.status == 200) {
        // yield call(actions.getUserProfile, email, token);
        localStorage.setItem('profile', JSON.stringify(response.data));
        yield put(actions.updateProfileWithPhoneNumberReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.updateProfileWithPhoneNumberError(response.data));
      }
    }
  );
}

export function* checkUserName() {
  yield takeLatest(
    actionTypes.CHECK_USER_NAME,

    function*({ payload }: any) {
      console.log('checkUserName  saga ', payload);
      const response: response = yield call(userAPI.checkUserName, payload);
      console.log('checkUserName  response ', response);
      if (response.status == 200) {
        yield put(actions.checkUserNameReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.checkUserNameError(response.data));
      }
    }
  );
}

export function* getUserName() {
  yield takeLatest(
    actionTypes.GET_USER_NAME,

    function*() {
      const { email } = yield select(state => state.user.profile);
      const index = email.indexOf('@');
      const userName = email.slice(0, index);

      const response: response = yield call(userAPI.checkUserName, userName);

      if (response.status == 200) {
        yield put(actions.checkUserNameReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.checkUserNameError(response.data));
      }
    }
  );
}

export function* getUserFullName() {
  yield takeLatest(
    actionTypes.GET_USER_FULL_NAME,

    function*({ first_name, last_name }: any) {
      yield delay(2000);
      const { email, token, uid, username } = yield select(state => {
        return {
          token: state.auth.token,
          email: state.user.profile.user.email,
          uid: state.auth.uid,
          username: state.user.userNameSuggestion.suggestion,
          user: state.user
        };
      });

      const response: response = yield call(
        userAPI.getUserFullName,
        first_name,
        last_name,
        username,
        email,
        token,
        uid
      );

      if (response.status == 200) {
        localStorage.setItem('profile', JSON.stringify(response.data));

        yield put(actions.getUserProfileReceive(response.data, ''));
        yield fork(getUserPath);
      }
      if (response.status == 401) {
        yield put(actions.getUserProfileError(response.data));
      }
    }
  );

  //  yield takeLatest(actions.userStatePath, getUserPath);
}

export function* uploadAvatar() {
  yield takeEvery(
    actionTypes.UPLOAD_AVATAR,

    function*({ avatar }: any) {
      const { id } = yield select(state => {
        return {
          id: state.user.profile._id
        };
      });

      avatar.append('userId', id);

      const response: response = yield call(
        userAPI.uploadAvatar,
        avatar,
        token
      );

      if (response.status == 200) {
        localStorage.setItem('profile', JSON.stringify(response.data.user));
        yield put(actions.uploadAvatarReceive(response.data.key));
      }
      if (response.status == 401) {
        yield put(actions.uploadAvatarError(response.data));
      }
    }
  );
}

export function* getAvatar(key: any) {
  const response: response = yield call(userAPI.getAvatar, key, token);

  if (response.status == 200) {
    yield put(actions.uploadAvatarReceive(response.data));
  }
  if (response.status == 401) {
    yield put(actions.uploadAvatarError(response.data));
  }
}

export function* userFeedback() {
  yield takeEvery(
    actionTypes.USER_FEEDBACK,

    function*({ feedback, parserData }: any) {
      const { ip, userIsLogged, userId } = yield select((state: RootState) => {
        return {
          ip: state.user.ipAddress,
          userIsLogged: state.user.userIsLogged,
          userId: state.user.profile._id
        };
      });

      const user = userIsLogged ? userId : null;

      const response: response = yield call(
        userAPI.userFeedback,
        feedback,
        parserData,
        ip,
        user
      );

      if (response.status == 200) {
        yield put(actions.userFeedbackReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.userFeedbackError(response.data));
      }
    }
  );
}
