import * as actions from '../../Action/myQloud/myQloudActionTypes';
import { initState } from './myQloudInitState';
import nookies from 'nookies';


const myQloudReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.GET_MY_PLACES:
        
      return{
        ...state,
      
      }
    case actions.GET_MY_PLACES_RECEIVE:
      return {
        ...state,
      myPlaces:action.data,
       
      };
   case actions.GET_MY_PLACES_ERROR:
     return{
       ...state,
       errors: {
        ...state.errors,
        myPlace:action.message?? "error"
      }
     }
      case actions.UPDATE_MY_PLACES:
        
      return{
        ...state,
      
      }
    case actions.UPDATE_MY_PLACES_RECEIVE:
      return {
        ...state,
        favoritePlaceMessage:{
          success:action.data.added,
          message:action.data.message},
        errors: {
          ...state.errors,
          myPlace:null
        }
      };
      case actions.RESET_MY_FAVORITE_PLACE:

        return {
             ...state,
             favoritePlaceMessage:{
               success:undefined,
               message:""},
             errors: {
               ...state.errors,
              
             }
       }
    }
  return state;
};

export default myQloudReducer
