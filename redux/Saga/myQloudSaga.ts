import {
  call,
  delay,
  fork,
  put,
  select,
  takeEvery,
  takeLatest
} from '@redux-saga/core/effects';
import * as actionTypes from '../Action/myQloud/myQloudActionTypes';
import * as actions from '../Action/myQloud/myQloudActions';
import { myQloudAPI } from '../../services/myQloudApi';
import Cookies from 'js-cookie';
import { RootState } from 'redux/Reducer/root';

const token: string = Cookies.get('token') ?? '';



export function* getMyPlaces() {
  yield takeEvery(
    actionTypes.GET_MY_PLACES,
    

    function*() {

      const { userEmail } = yield select((state:RootState) => {
        return {
          
          userEmail:state.user.profile.email
        };
      });


      const response: response = yield call(myQloudAPI.getMyPlaces, userEmail);

      if (response.status == 200) {
        yield put(actions.getMyPlacesReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.getMyPlacesError(response.data));
      }
    })
}
export function* updateMyPlaces() {
  yield takeEvery(
    actionTypes.UPDATE_MY_PLACES,
    

    function*({ marketplaceId}: any) {
      const { userId } = yield select((state:RootState) => {
        return {
          
          userId:state.user.profile.email
        };
      });

      const response: response = yield call(myQloudAPI.updateMyPlaces, marketplaceId , userId);

      if (response.status == 200) {
        yield put(actions.updateMyPlacesReceive(response.data));
      }
      if (response.status == 401) {
        yield put(actions.updateMyPlacesError(response.data));
      }
    })
}