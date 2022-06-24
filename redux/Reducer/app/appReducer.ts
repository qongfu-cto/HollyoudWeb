import * as actions from '../../Action/app/appActionTypes';
import { initState } from './appInitState';
import { propertyDummy } from 'utilities/propertyDummy';
import _ from 'lodash';

// import { defaultPageSize, defaultSearchFilters, defaultCountry } from '../../config';

const interestsReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.GET_ALL_INTERESTS:
      return {
        ...state,
        loading: { ...state.loading, interests: true }
      };
    case actions.GET_ALL_INTERESTS_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading, interests: false },
        interests: action.interests
      };
    case actions.GET_ALL_INTERESTS_ERROR:
      return {
        ...state,
        loading: { ...state.loading, interests: false },
        error: { ...state.error, ['interests']: action.message }
      };
    case actions.FETCH_ALL_LANGUAGES:
      return {
        ...state,
        loading: { ...state.loading }
      };
    case actions.FETCH_ALL_LANGUAGES_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading },
        languages: action.payload
      };
    case actions.FETCH_ALL_LANGUAGES_ERROR:
      return {
        ...state,
        loading: { ...state.loading }
      };
    case actions.FETCH_ALL_COUNTRIES:
      return {
        ...state,
        loading: { ...state.loading }
      };
    case actions.FETCH_ALL_COUNTRIES_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading },
        countries: action.payload
      };

    case actions.FETCH_ALL_COUNTRIES_ERROR:
      return {
        ...state,
        loading: { ...state.loading }
      };

    case actions.FETCH_ALL_GCC_COUNTRIES_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading },
        gccCountries: action.payload
      };

    case actions.FETCH_ALL_GCC_COUNTRIES_ERROR:
      return {
        ...state,
        loading: { ...state.loading }
      };

    case actions.FETCH_ALL_CWHOTSPOTS:
      return {
        ...state,
        loading: { ...state.loading }
      };
    case actions.FETCH_ALL_CWHOTSPOTS_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading },
        hotspots: action.payload
      };

    case actions.FETCH_ALL_CWHOTSPOTS_ERROR:
      return {
        ...state,
        loading: { ...state.loading }
      };
    case actions.GET_MARKETPLACE:
      return {
        ...state,
        marketplace: {
          tag: action.tags,
          tagId: action.tagId,
          length: 0,
          marketPlaces: [],
          page: 1,
          pageLength: 1,
          type: 'places'
        },
        loading: { ...state.loading, marketPlace: true }
      };
    case actions.GET_MARKETPLACE_PROPERTIES:
      return {
        ...state,
        marketplace: {
          tag: action.tags,
          tagId: action.tagId,
          length: 0,
          marketPlaces: [],
          page: 1,
          pageLength: 1,
          type: 'properties'
        },
        loading: { ...state.loading, marketPlace: true }
      };
    case actions.GET_MARKETPLACE_RECEIVE:
      console.log('GET_MARKETPLACE_RECEIVE ', action);
      console.log(state);
      return {
        ...state,
        loading: { ...state.loading, marketPlace: false },
        marketplace: { ...state.marketplace, ...action.marketPlace }
      };
    case actions.GET_MARKETPLACE_ERROR:
      return {
        ...state,
        loading: { ...state.loading, marketPlace: false },
        error: { ...state.error, ['marketplace']: action.message }
      };
    case actions.LOAD_PAGE_MARKETPLACE:
      return {
        ...state,
        marketplace: {
          ...state.marketplace,
          tag: action.tags,
          tagId: action.tagId
        },
        loading: { ...state.loading }
      };
    case actions.LOAD_PAGE_MARKETPLACE_PROPERTIES:
      return {
        ...state,
        marketplace: {
          ...state.marketplace,
          tag: action.tags,
          tagId: action.tagId
        },
        loading: { ...state.loading }
      };
    case actions.LOAD_PAGE_MARKETPLACE_RECEIVE:
      if (
        _.isEqual(
          state.marketplace.previousResult,
          action.marketPlace?.marketPlaces
        )
      ) {
        return state;
      }
      if (
        state.marketplace.length + action.marketPlace.length >
        action.marketPlace.total
      ) {
        return state;
      }

      return {
        ...state,
        loading: { ...state.loading },
        marketplace: {
          ...state.marketplace,
          total: action.marketPlace.total,
          tag: state.marketplace.tag,
          tagId: state.marketplace.tagId,
          length: state.marketplace.length + action.marketPlace.length,
          previousResult: action.marketPlace.marketPlaces,
          marketPlaces: [
            ...state.marketplace.marketPlaces,
            ...action.marketPlace.marketPlaces
          ],
          page: state.marketplace.page + 1,
          pageLength: action.marketPlace.length
        }
      };
    case actions.LOAD_PAGE_MARKETPLACE_ERROR:
      return {
        ...state,
        loading: { ...state.loading },
        error: { ...state.error, ['marketplace']: action.message }
      };
    case actions.SEARCH_TAGS:
      return {
        ...state,
        loading: { ...state.loading, search: true }
      };
    case actions.SEARCH_TAGS_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading, search: false },
        searchResults: action.searchResults
      };
    case actions.SEARCH_TAGS_ERROR:
      return {
        ...state,
        loading: { ...state.loading, places: false },
        error: { ...state.error, ['search']: action.message }
      };

    case actions.GET_CATEGORIES:
      return {
        ...state,
        loading: { ...state.loading, categories: true }
      };

    case actions.GET_CATEGORIES_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading, categories: false, subCategories: true },
        categories: [...action.categories]
      };

    case actions.GET_SUB_CATEGORIES_RECEIVE:
      return {
        ...state,
        loading: { ...state.loading, subCategories: false },
        subCategories: action.subCategories
      };
    case actions.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: { ...state.loading, categories: false },
        error: { ...state.error, ['category']: action.message }
      };

    case actions.PLACE_PROFILE_RECEIVE:
      if (
        !_.isEqual(state.rate.previousPlace, action.place._id) ||
        action.userReview
      ) {
        return {
          ...state,
          loading: { ...state.loading, place: false },
          place: { data: action.place, myPlace: action.myPlace },
          rate: {
            reviews: action.data.reviews,
            previousResult: action.data.reviews,
            previousPlace: action.place._id,
            params: action.data.params
          },
          products: action.data.marketplace
        };
      }

      if (
        _.isEqual(state.rate.previousPlace, action.place?._id) &&
        _.isEqual(state.rate.previousResult, action.data?.reviews)
      ) {
        return {
          ...state,
          place: {
            ...state.place,
            myPlace: action.myPlace
          },
          products: action.data.marketplace
        };
      }

      return {
        ...state,
        loading: { ...state.loading, place: false },
        place: { data: action.place, myPlace: action.myPlace },

        rate: {
          reviews: [...state.rate.reviews, ...action.data.reviews],
          params: {
            ...action.data.params,
            resultsInPage:
              state.rate.params.resultsInPage + action.data.params.resultsInPage
          },
          previousPlace: action.place._id,
          previousResult: action.data.reviews
        },
        products: action.data.marketplace
      };
    case actions.SEARCH_SORT:
      return {
        ...state,
        sort: {
          value: action.sort,
          permission: action.permission,
          currentSort: action.sort
        }
      };
    case actions.SET_SOCKET:
      return {
        ...state,
        socket: action.socket
      };
  }
  return state;
};

// const interestsReducer = (state = initState, action: any = {}) => {
//   switch (action.type) {
//     case actions.FETCH_INITIAL_DATA:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: true },
//       };
//     case actions.FETCH_INITIAL_DATA_RECEIVE:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         qongfus: action.payload.qongfus,
//         lifestyles: action.payload.lifestyles,
//         countries: action.payload.countries,
//         languages: action.payload.languages,
//         amenities: action.payload.amenities,
//         globalConfig: action.payload.globalConfig,
//         isinterestsInitialized: true,
//       };
//     case actions.FETCH_INITIAL_DATA_ERROR:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         isinterestsInitialized: false,
//       };
//     case actions.FETCH_ALL_QONGFUS:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: true },
//       };
//     case actions.FETCH_ALL_QONGFUS_RECEIVE:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         qongfus: [...action.payload.qongfus],
//       };
//     case actions.FETCH_ALL_QONGFUS_ERROR:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//       };

//     case actions.FETCH_ALL_LANGUAGES:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: true },
//       };
//     case actions.FETCH_ALL_LANGUAGES_RECEIVE:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         languages: [...action.payload.languages],
//       };
//     case actions.FETCH_ALL_LANGUAGES_ERROR:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//       };
//     case actions.GET_ALL_LIFESTYLES:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: true },
//       };
//     case actions.GET_ALL_LIFESTYLES_RECEIVE:
//       console.log('GET_ALL_LIFESTYLES_RECEIVE');
//       console.log(action.payload);
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         lifestyles: [...action.payload.lifestyles],
//       };
//     case actions.GET_ALL_LIFESTYLES_ERROR:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//       };
//     case actions.GET_ALL_SUB_LIFESTYLES:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: true },
//       };
//     case actions.GET_ALL_SUB_LIFESTYLES_RECEIVE:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         subLifestyles: [...action.payload.subLifestyles],
//       };
//     case actions.GET_ALL_SUB_LIFESTYLES_ERROR:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//       };

//     case actions.GET_ALL_INTERESTS:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: true },
//       };
//     case actions.GET_ALL_INTERESTS_RECEIVE:
//       console.log('GET_ALL_INTERESTS_RECEIVE');

//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         interests: action.interests,
//       };
//     case actions.GET_ALL_INTERESTS_ERROR:
//       return {
//         ...state,
//         loading: { ...state.loading, interests: false },
//         error: { ...state.error, ['interests']: null },
//       };

//   }
//   return state;
// };

export default interestsReducer;
