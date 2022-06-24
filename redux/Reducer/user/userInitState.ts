export type UserState = typeof initState;

export const initState = {
  createdAProfile: false,
  hasMobile: false,
  requireOnBoarding: true,
  userIsLogged: false,
  feedback: false,
  feedbackData: {},
  geolocation: {
    latitude: '',
    longitude: '',
    country_name: '',
    country_code2: '',
    continent_code: '',
    continent_name: ''
  },
  ipAddress: '',
  errors: {
    profile: ''
  },
  exist: {
    email: '',
    mobile: ''
  },
  avatar: null,
  profile: {
    onboarding_step: 1,
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    gender: '',
    dob: '',
    location: '',
    avatar: '',
    bio: '',
    mobile: '',
    _id: '',
    display_name: '',
    tagLine: '',
    nationality: { id: 0, name: '' },
    languages: [],
    verified: false
  },
  userNameSuggestion: {
    userNameExist: false,
    suggestion: ''
  },
  path: null,
  loading: {
    createProfile: false,
    updateProfile: false,
    getUserData: true,
    ipAddress: true,
    geolocation: true
  }
};
