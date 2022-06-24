import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AuthAPI } from '../../services/authAPI';
import * as actionType from '../Action/auth/authActionTypes';
import * as userAction from '../Action/user/userActions';
import * as action from '../Action/auth/authActions';

import { createFirebaseAccountProps } from '../Action/auth/authActions';

export function* createFirebaseAccount() {
  yield takeEvery(actionType.CREATE_FIREBASE_ACCOUNT, function*({
    email,
    password
  }: createFirebaseAccountProps) {
    const response: response = yield call(AuthAPI.createAccount, {
      email,
      password
    });
    console.log(
      'MASLSSS',
      response.status == 201,
      email,
      password,
      response.status,
      response
    );
    if (response.status == 200 || response.status == 201) {
      //  yield call(AuthAPI.userLoggedin)
      yield put(
        action.createFirebaseAccountReceive(email, password, 'to be deleted')
      );
      yield put(userAction.createAccountReceive(response.data));
      localStorage.setItem('profile', JSON.stringify(response.data));
    }
    if (response.status === 202) {
      //  yield call(AuthAPI.userLoggedin)
      yield put(action.createFirebaseAccountError('User already registered'));
    }
    if (response.status == 401) {
      if (response.data === 'auth/email-already-in-use') {
        const message = 'Email has been  already.';

        yield put(action.createFirebaseAccountError(message));
        yield put(userAction.createAccountError(response.data));
      }
      userAction;
    }
  });
}

export function* signinWithEmailAndPassword() {
  yield takeEvery(actionType.SIGNIN_TO_FIREBASE_ACCOUNT, function*({
    email,
    password
  }: any) {
    const response: response = yield call(
      AuthAPI.signinWithEmailAndPassword,
      email,
      password
    );
    if (response.status === 200 || response.status === 201) {
      // get user profile
      yield call(userAction.getUserProfile, email);
      yield put(
        action.siginToFirebaseAccountReceive(email, response.data.token)
      );
    }
    if (response.status == 400) {
      let message = '';
      if (response.data === 'auth/user-not-found') {
        message = 'Email is not registered .';
        yield put(action.siginToFirebaseAccountError(message));
      } else if (response.data === 'auth/wrong-password') {
        message = 'wrong Password .';
        yield put(action.siginToFirebaseAccountError(message));
      } else if (response.data === 'auth/too-many-requests') {
        message = 'Too Many Requests.';
        yield put(action.siginToFirebaseAccountError(message));
      } else {
        yield put(
          action.siginToFirebaseAccountError('Incorrect Email or password')
        );
      }
    }
  });
}

export function* sendOTP() {
  yield takeEvery(actionType.SEND_OTP, function*({ mobile }: any) {
    const response: response = yield call(AuthAPI.sendOTP, mobile);

    if (response.status == 200) {
      yield put(action.sendTOPReceive(response.data.data.otp));
    }
    if (response.status == 401) {
      yield put(action.sendTOPError(response.data));
    }
  });
}

export function* signOutFirebaseAccount() {
  yield takeEvery(actionType.SIGN_OUT_FIREBASE_ACCOUNT, function*() {
    const response: response = yield call(AuthAPI.signOut);
    console.log('signOutFirebaseAccount ', response);

    if (response.status == 200 || response.status === 201) {
      yield put(action.signOutFirebaseReceive());
    }
    if (response.status == 401) {
      yield put(action.signOutFirebaseError(response.data));
    }
  });
}
