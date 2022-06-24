import * as actions from '../../Action/user/userActionTypes';
import { initState } from './userInitState';
import nookies from 'nookies';

const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.CREATE_ACCOUNT:
      return {
        ...state,
        createdAProfile: false,
        loading: {
          ...state.loading,
          createProfile: true
        },
        errors: {
          ...state.errors,
          profile: ''
        }
      };
    case actions.CREATE_ACCOUNT_RECEIVE:
      return {
        ...state,
        createdAProfile: true,
        profile: action.profile,
        userIsLogged: true,
        loading: {
          ...state.loading,
          createProfile: false
        }
      };
    case actions.CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        createdAProfile: false,
        errors: {
          ...state.errors,
          profile: action.message
        },
        loading: {
          ...state.loading,
          createProfile: false,
          getUserData: false
        }
      };
    case actions.GET_USER_IP_ADDRESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          ipAddress: true
        },
        errors: {
          ...state.errors,
          ipAddress: ''
        }
      };
    case actions.GET_USER_IP_ADDRESS_RECEIVE:
      return {
        ...state,
        ipAddress: action.ip,
        loading: {
          ...state.loading,
          ipAddress: false
        }
      };
    case actions.GET_USER_IP_ADDRESS_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ipAddress: action.message
        },
        loading: {
          ...state.loading,
          ipAddress: true
        }
      };

    case actions.GET_USER_GEOLOCATION:
      return {
        ...state,
        loading: {
          ...state.loading,
          geolocation: true
        },
        errors: {
          ...state.errors,
          geolocation: ''
        }
      };
    case actions.GET_USER_GEOLOCATION_RECEIVE:
      return {
        ...state,
        geolocation: action.geolocation,
        ipAddress: action.geolocation?.ip,
        loading: {
          ...state.loading,
          geolocation: false
        }
      };
    case actions.GET_USER_GEOLOCATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          geolocation: action.message
        },
        loading: {
          ...state.loading,
          geolocation: false
        }
      };
    case actions.USER_IS_LOGGED_IN:
      nookies.set(undefined, 'uid', state.profile._id, { path: '/' });
      return {
        ...state,
        userIsLogged: true
      };
    case actions.USER_IS_LOGGED_OUT:
      nookies.destroy(null, 'uid');

      return {
        ...state,
        userIsLogged: false,
        createdAProfile: false,
        hasMobile: false,
        requireOnBoarding: false,
        path: '/',
        profile: {},
        avatar: '',
        loading: {
          ...state.loading,
          getUserData: false
        }
      };

    case actions.GET_USER_PROFILE:
      return {
        ...state,
        createdAProfile: true,
        userIsLogged: true,
        loading: {
          ...state.loading,
          getUserData: true
        }
      };

    case actions.GET_USER_PROFILE_RECEIVE:
      console.log('GET_USER_PROFILE_RECEIVE');
      console.log(action);
      return {
        ...state,
        createdAProfile: true,
        hasMobile: !!action.profile?.mobile,
        requireOnBoarding: action.profile?.require_onboarding,
        avatar: action.profile.avatar ?? null,
        profile: action.profile,
        userIsLogged: true,
        path: action.path,
        loading: {
          ...state.loading,
          getUserData: false
        }
      };

    case actions.GET_USER_PROFILE_ERROR:
      return {
        ...state,
        createdAProfile: false,
        userIsLogged: false,
        loading: {
          ...state.loading,
          getUserData: false
        },
        errors: {
          ...state.errors,
          profile: action.message
        }
      };
    case actions.UPDATE_PROFILE:
      return {
        ...state,
        loading: {
          ...state.loading,
          updateProfile: true,
          getUserData: true
        },
        errors: {
          ...state.errors,
          profile: ''
        }
      };
    case actions.UPDATE_PROFILE_RECEIVE:
      console.log('UPDATE_PROFILE_RECEIVE');
      console.log(action);
      return {
        ...state,
        profile: action.profile,
        avatar: action.profile.avatar ?? null,
        requireOnBoarding: action.profile?.require_onboarding,
        loading: {
          ...state.loading,
          updateProfile: false,
          getUserData: false
        }
      };
    case actions.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        feedback: false,
        errors: {
          ...state.errors,
          profile: action.message,
          feedback: action.message,
          loading: {
            ...state.loading,
            updateProfile: false,
            getUserData: false
          }
        }
      };
    case actions.UPDATE_ERROR:
      return {
        ...state,
        exist: {
          ...state.exist,
          email: action?.email,
          mobile: action?.mobile
        }
      };
    case actions.USER_FEEDBACK:
      return {
        ...state,
        feedback: false,
        loading: {
          ...state.loading,
          feedback: true
        },
        errors: {
          ...state.errors,
          feedback: ''
        }
      };
    case actions.USER_FEEDBACK_RECEIVE:
      return {
        ...state,
        feedback: true,
        feedbackData: action.data,
        loading: {
          ...state.loading,
          feedback: false
        }
      };
    case actions.UPDATE_PROFILE_WITH_PHONE_NUMBER:
      return {
        ...state,
        createdProfile: true,
        hasMobile: false,
        errors: {
          ...state.errors,
          profile: action.message
        }
      };
    case actions.UPDATE_PROFILE_WITH_PHONE_NUMBER_RECEIVE:
      return {
        ...state,
        createdProfile: true,
        hasMobile: true,
        profile: action.profile
      };
    case actions.UPDATE_PROFILE_WITH_PHONE_NUMBER_ERROR:
      return {
        ...state,
        createdProfile: true,
        hasMobile: false,
        errors: {
          ...state.errors,
          profile: action.message
        }
      };

    case actions.USER_STATE_PATH:
      return {
        ...state,
        loading: {
          ...state.loading,
          getUserData: true
        }
      };
    case actions.USER_STATE_PATH_RECEIVE:
      return {
        ...state,
        path: action.path,
        loading: {
          ...state.loading,
          getUserData: false
        }
      };
    case actions.CHECK_USER_NAME_RECEIVE:
      return {
        ...state,
        userNameSuggestion: {
          userNameExist: action.results.userNameExist,
          suggestion: action.results.suggestion
        }
      };

    case actions.UPLOAD_AVATAR_RECEIVE:
      console.log('action.image.key', action);
      return {
        ...state,
        avatar: action.image,
        profile: action.image.user,
        loading: {
          ...state.loading,
          updateProfile: false,
          getUserData: false
        }
      };

    case actions.UPLOAD_AVATAR_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          profile: action.message,
          loading: {
            ...state.loading,
            updateProfile: false,
            getUserData: false
          }
        }
      };
  }
  return state;
};

export default userReducer;
