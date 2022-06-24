import { all, fork } from 'redux-saga/effects';
import * as authSaga from './authSaga';
import * as userSaga from './userSaga';
import * as appSaga from './appSaga';
import * as myQloudSaga from './myQloudSaga';

export function* authWatcherSaga() {
  yield all([
    fork(authSaga.createFirebaseAccount),
    fork(authSaga.signinWithEmailAndPassword),
    fork(authSaga.sendOTP),
    fork(authSaga.signOutFirebaseAccount)
  ]);
}

export function* myQloudWatcherSaga() {
  yield all([fork(myQloudSaga.getMyPlaces), fork(myQloudSaga.updateMyPlaces)]);
}
export function* userWatcherSaga() {
  yield all([
    fork(userSaga.createAccount),
    fork(userSaga.getUserIPAddress),
    fork(userSaga.getUserGeolocation),
    fork(userSaga.updateProfileWithPhoneNumber),
    fork(userSaga.getUserProfile),
    // fork(userSaga.getUserPath),
    fork(userSaga.updateProfile),
    fork(userSaga.getUserFullName),
    fork(userSaga.checkUserName),
    fork(userSaga.getUserName),
    fork(userSaga.uploadAvatar),
    fork(userSaga.userFeedback)
  ]);
}

export function* appWatcherSaga() {
  yield all([
    fork(appSaga.getAllInterests),
    fork(appSaga.getCategories),
    fork(appSaga.searchTags),
    fork(appSaga.getMarketPlace),
    fork(appSaga.getMarketPlaceProperties),
    fork(appSaga.loadPageMarketPlace),
    fork(appSaga.loadPageMarketPlaceProperties),
    fork(appSaga.getLanguages),
    fork(appSaga.getCountries),
    fork(appSaga.getGccCountries),
    fork(appSaga.getAllCWHotspots),
    fork(appSaga.getPlace)
  ]);
}

export function* rootSagas() {
  yield all([
    authWatcherSaga(),
    userWatcherSaga(),
    appWatcherSaga(),
    myQloudWatcherSaga()
  ]);
}
