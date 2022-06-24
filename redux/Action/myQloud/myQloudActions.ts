import { Geolocation } from 'types/IPGeolocationTypes';
import * as action from './myQloudActionTypes';



export const getMyPlaces = () => {

  return { type: action.GET_MY_PLACES };
};
export const getMyPlacesReceive = (data:{}) => {
  return { type: action.GET_MY_PLACES_RECEIVE, data };
};
export const getMyPlacesError = (message: string) => {
  return { type: action.GET_MY_PLACES_ERROR, message };
};

export const updateMyPlaces = (marketplaceId:string) => {

  return { type: action.UPDATE_MY_PLACES, marketplaceId };
};
export const updateMyPlacesReceive = (data:{}) => {
  return { type: action.UPDATE_MY_PLACES_RECEIVE, data };
};
export const updateMyPlacesError = (message: string) => {
  return { type: action.UPDATE_MY_PLACES_ERROR, message };
};


export const restMyFavoritePlace=()=>{
  return{type: action.RESET_MY_FAVORITE_PLACE}
}