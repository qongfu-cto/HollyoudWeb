import { call, put, select, takeEvery, delay } from 'redux-saga/effects';
// import { API } from '../../services/appAPI';
import { appAPI } from '../../services/appApi';
import * as actionType from '../Action/app/appActionTypes';
import * as actions from '../Action/app/appActions';
import Cookies from 'js-cookie';

const token: string = Cookies.get('token') ?? '';

export function* getAllInterests() {
  yield takeEvery(actionType.GET_ALL_INTERESTS, function*() {
    const response: response = yield call(appAPI.getAllInterests);

    if (response.status == 200) {
      yield put(actions.getAllInterestsReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.getAllInterestsError(response.data));
    }
  });
}

export function* getCategories() {
  yield takeEvery(actionType.GET_CATEGORIES, function*() {
    const response: response = yield call(appAPI.getCatagories);

    if (response.status == 200) {
      yield put(actions.getCategoriesReceive(response.data.categories));
    }
    if (response.status == 401) {
      yield put(actions.getCategoriesError(response.data));
    }
  });
}

export function* getLanguages() {
  yield takeEvery(actionType.FETCH_ALL_LANGUAGES, function*() {
    const response: response = yield call(appAPI.getAllLanguages);

    console.log('saga response');
    console.log(response);

    if (response.status == 200) {
      yield put(actions.fetchAllLanguagesReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.fetchAllLanguagesError(response.data));
    }
  });
}

export function* getCountries() {
  yield takeEvery(actionType.FETCH_ALL_COUNTRIES, function*() {
    const response: response = yield call(appAPI.getAllCountries);

    console.log('getCountries response');
    console.log(response);

    if (response.status == 200) {
      yield put(actions.fetchAllCountriesReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.fetchAllCountriesError(response.data));
    }
  });
}

export function* getGccCountries() {
  yield takeEvery(actionType.FETCH_ALL_GCC_COUNTRIES, function*() {
    const response: response = yield call(appAPI.getAllGccCountries);

    console.log('getAllGccCountries response');
    console.log(response);

    if (response.status == 200) {
      yield put(actions.fetchAllGccCountriesReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.fetchAllGccCountriesError(response.data));
    }
  });
}

export function* getAllCWHotspots() {
  yield takeEvery(actionType.FETCH_ALL_CWHOTSPOTS, function*() {
    const response: response = yield call(appAPI.getAllCWHotspots);

    console.log('getAllCWHotspots response');
    console.log(response);

    if (response.status == 200) {
      yield put(actions.fetchAllCWHotspotsReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.fetchAllCWHotspotsError(response.data));
    }
  });
}

export function* searchTags() {
  yield takeEvery(actionType.SEARCH_TAGS, function*({
    tags,
    categoryType
  }: any) {
    if (!categoryType) categoryType = 'places';

    const response: response = yield call(
      appAPI.searchTags,
      tags,
      categoryType
    );

    if (response.status == 200) {
      yield put(actions.searchTagsReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.searchTagsError(response.data));
    }
  });
}

export function* getMarketPlace() {
  yield takeEvery(actionType.GET_MARKETPLACE, function*({
    tags,
    sort,
    tagId,
    location,
    opened,
    verified
  }: any) {
    const { geolocation } = yield select(state => {
      return {
        geolocation: state.user.geolocation
      };
    });

    const response: response = yield call(
      appAPI.marketPlace,
      tags,
      0,
      geolocation,
      sort,
      tagId,
      location,
      opened,
      verified
    );



    if (response.status == 200) {
      yield put(actions.getMarketPlaceReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.getMarketPlaceError(response.data));
    }
  });
}

export function* getMarketPlaceProperties() {
  yield takeEvery(actionType.GET_MARKETPLACE_PROPERTIES, function*({
    tags,
    sort,
    tagId
  }: any) {
    const { geolocation } = yield select(state => {
      return {
        geolocation: state.user.geolocation
      };
    });

    const response: response = yield call(
      appAPI.marketPlaceProperty,
      tags,
      0,
      geolocation,
      sort,
      tagId
    );

    if (response.status == 200) {
      yield put(actions.getMarketPlaceReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.getMarketPlaceError(response.data));
    }
  });
}

export function* loadPageMarketPlace() {
  yield takeEvery(actionType.LOAD_PAGE_MARKETPLACE, function*({
    tags,
    sort,
    tagId,
    location,
    opened,
    verified
  }: any) {
    const { marketplace } = yield select(state => state.app);
    const { geolocation } = yield select(state => {
      return {
        geolocation: state.user.geolocation
      };
    });

    const response: response = yield call(
      appAPI.marketPlace,
      tags,
      marketplace.page,
      geolocation,
      sort,
      tagId,
      location,
      opened,
      verified
    );

    if (response.status == 200) {
      yield put(actions.loadPageMarketPlaceReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.loadPageMarketPlaceError(response.data));
    }
  });
}

export function* loadPageMarketPlaceProperties() {
  yield takeEvery(actionType.LOAD_PAGE_MARKETPLACE_PROPERTIES, function*({
    tags,
    sort,
    tagId
  }: any) {
    const { marketplace } = yield select(state => state.app);
    const { geolocation } = yield select(state => {
      return {
        geolocation: state.user.geolocation
      };
    });

    const response: response = yield call(
      appAPI.marketPlaceProperty,
      tags,
      marketplace.page,
      geolocation,
      sort,
      tagId
    );

    if (response.status == 200) {
      yield put(actions.loadPageMarketPlaceReceive(response.data));
    }
    if (response.status == 401) {
      yield put(actions.loadPageMarketPlaceError(response.data));
    }
  });
}

export function* getPlace() {
  yield takeEvery(actionType.PLACE_PROFILE, function*({ id, userReview }: any) {
    // const { marketplace } = yield select(state => state.app);
    const { currentPage, max, myPlace } = yield select(state => {
      return {
        currentPage: state.app.rate.params.currentPage,
        max: state.app.rate.params.maxRecordsPerPage,
        myPlace: state.app.place.myPlace
      };
    });
    const params = `?page=${currentPage + 1}&perPage=${max}`;
    const countryId = '612e252bdf4ea2803cde4b84';

    const response: response = yield call(
      appAPI.getPlace,
      countryId,
      id,
      params
    );

    if (response.status == 200) {
      yield put(
        actions.placeProfileReceive(response.data?.data, response.data, myPlace , userReview)
      );
    }
    if (response.status == 401) {
      yield put(actions.placeProfileError(response.data));
    }
  });
}
