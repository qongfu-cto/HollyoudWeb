import * as actions from './appActionTypes';

export const fetchInitialData = () => {
  return { type: actions.FETCH_INITIAL_DATA };
};

export const fetchInitialDataReceive = (payload: any) => {
  return { type: actions.FETCH_INITIAL_DATA_RECEIVE, payload };
};

export const fetchInitialDataError = () => ({
  type: actions.FETCH_INITIAL_DATA_ERROR
});

export const fetchAllCountries = () => {
  return { type: actions.FETCH_ALL_COUNTRIES };
};

export const fetchAllGccCountries = () => {
  return { type: actions.FETCH_ALL_GCC_COUNTRIES };
};

export const fetchAllGccCountriesReceive = (payload: any) => {
  return { type: actions.FETCH_ALL_GCC_COUNTRIES_RECEIVE, payload };
};

export const fetchAllGccCountriesError = (error: any) => {
  return { type: actions.FETCH_ALL_GCC_COUNTRIES_ERROR, error };
};

export const fetchAllCountriesReceive = (payload: any) => {
  return { type: actions.FETCH_ALL_COUNTRIES_RECEIVE, payload };
};

export const fetchAllCountriesError = (error: any) => {
  return { type: actions.FETCH_ALL_COUNTRIES_ERROR, error };
};

export const fetchAllCWHotspots = () => {
  return { type: actions.FETCH_ALL_CWHOTSPOTS };
};

export const fetchAllCWHotspotsReceive = (payload: any) => {
  return { type: actions.FETCH_ALL_CWHOTSPOTS_RECEIVE, payload };
};

export const fetchAllCWHotspotsError = (error: any) => {
  return { type: actions.FETCH_ALL_CWHOTSPOTS_ERROR, error };
};

export const fetchAllLanguages = () => {
  return {
    type: actions.FETCH_ALL_LANGUAGES
  };
};

export const fetchAllLanguagesReceive = (payload: any) => {
  return { type: actions.FETCH_ALL_LANGUAGES_RECEIVE, payload };
};

export const fetchAllLanguagesError = (error: any) => {
  return { type: actions.FETCH_ALL_LANGUAGES_ERROR, error };
};

export const fetchAllQongfus = () => {
  return {
    type: actions.FETCH_ALL_QONGFUS
  };
};

export const fetchAllQongfusReceive = (payload: any) => {
  return { type: actions.FETCH_ALL_QONGFUS_RECEIVE, payload };
};

export const fetchAllQongfusError = (message: any) => {
  return { type: actions.FETCH_ALL_QONGFUS_ERROR, message };
};

export const getAllLifestyles = () => {
  return { type: actions.GET_ALL_LIFESTYLES };
};

export const getAllLifestylesReceive = (payload: any) => {
  return { type: actions.GET_ALL_LIFESTYLES_RECEIVE, payload };
};

export const getAllLifestylesError = (message: any) => {
  return { type: actions.GET_ALL_LIFESTYLES_ERROR, message };
};

export const getAllSubLifestyles = () => {
  return { type: actions.GET_ALL_SUB_LIFESTYLES };
};

export const getAllSubLifestylesReceive = (payload: any) => {
  return { type: actions.GET_ALL_SUB_LIFESTYLES_RECEIVE, payload };
};

export const getAllSubLifestylesError = (message: any) => {
  return { type: actions.GET_ALL_SUB_LIFESTYLES_ERROR, message };
};

export const getAllInterests = () => {
  return { type: actions.GET_ALL_INTERESTS };
};

export const getAllInterestsReceive = (interests: any) => {
  return { type: actions.GET_ALL_INTERESTS_RECEIVE, interests };
};

export const getAllInterestsError = (message: any) => {
  return { type: actions.GET_ALL_INTERESTS_ERROR, message };
};

export const getCategories = () => {
  return { type: actions.GET_CATEGORIES };
};

export const getCategoriesReceive = (categories: []) => {
  return { type: actions.GET_CATEGORIES_RECEIVE, categories };
};

export const getSubCategoriesReceive = (subCategories: categoryObject[]) => {
  return {
    type: actions.GET_SUB_CATEGORIES_RECEIVE,
    subCategories: subCategories
  };
};
export const getCategoriesError = (message: any) => {
  return { type: actions.GET_CATEGORIES_ERROR, message };
};

export const searchTags = (tags: [], categoryType: string) => {
  return { type: actions.SEARCH_TAGS, tags, categoryType };
};

export const searchTagsReceive = (searchResults: {
  length: number;
  tags: [];
}) => {
  return { type: actions.SEARCH_TAGS_RECEIVE, searchResults };
};

export const searchTagsError = (message: any) => {
  return { type: actions.SEARCH_TAGS_ERROR, message };
};

export const getMarketPlace = (
  tags: string[] | null,
  sort: string,
  tagId?: string,
  location?: any[],
  opened?: any,
  verified?: boolean
) => {
  return {
    type: actions.GET_MARKETPLACE,
    tags,
    sort,
    tagId,
    location,
    opened,
    verified
  };
};

export const getMarketPlaceReceive = (marketPlace: {
  length: number;
  marketPlaces: {}[];
  total: number;
}) => {
  return { type: actions.GET_MARKETPLACE_RECEIVE, marketPlace };
};

export const getMarketPlaceError = (message: any) => {
  return { type: actions.GET_MARKETPLACE_ERROR, message };
};

export const getMarketPlaceProperties = (
  tags: string[] | null,
  sort: string,
  tagId?: string
) => {
  return { type: actions.GET_MARKETPLACE_PROPERTIES, tags, sort, tagId };
};

export const loadPageMarketPlace = (
  tags: string[] | null,
  sort: string,
  tagId?: string,
  location?: any[],
  opened?: any,
  verified?: boolean
) => {
  return {
    type: actions.LOAD_PAGE_MARKETPLACE,
    tags,
    sort,
    tagId,
    location,
    opened,
    verified
  };
};

export const loadPageMarketPlaceProperties = (
  tags: string[] | null,
  sort: string,
  tagId?: string
) => {
  return { type: actions.LOAD_PAGE_MARKETPLACE_PROPERTIES, tags, sort, tagId };
};

export const loadPageMarketPlaceReceive = (marketPlace: {
  length: number;
  marketPlaces: [];
}) => {
  return { type: actions.LOAD_PAGE_MARKETPLACE_RECEIVE, marketPlace };
};

export const loadPageMarketPlaceError = (message: any) => {
  return { type: actions.LOAD_PAGE_MARKETPLACE_ERROR, message };
};

export const placeProfile = (id: string, userReview?: boolean) => {
  return { type: actions.PLACE_PROFILE, id, userReview };
};
export const placeProfileReceive = (
  place: {},
  data: {},
  myPlace: boolean,
  userReview?: boolean
) => {
  return {
    type: actions.PLACE_PROFILE_RECEIVE,
    place,
    myPlace,
    data,
    userReview
  };
};

export const placeProfileError = (message: any) => {
  return { type: actions.PLACE_PROFILE_ERROR, message };
};

export const searchSort = (sort: string, permission: 'granted' | 'denied') => {
  return { type: actions.SEARCH_SORT, sort, permission };
};

export const setSocket = (socket: any) => {
  return { type: actions.SET_SOCKET, socket };
};
