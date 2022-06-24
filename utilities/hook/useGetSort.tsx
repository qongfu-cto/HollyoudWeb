import { useEffect, useState, useContext, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSort } from 'redux/Action/app/appActions';
import { getUserGeolocationReceive } from 'redux/Action/user/userActions';
import { RootState } from 'redux/Reducer/root';

export const GetSort = () => {
  const dispatch = useDispatch();
  const { sort, permission, currentSort } = useSelector((state: RootState) => ({
    sort: state.app.sort.value,
    permission: state.app.sort.permission,
    currentSort: state.app.sort.currentSort
  }));

  useEffect(() => {
    if (navigator.permissions && navigator.permissions.query) {
      //try permissions APIs first
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          // Will return ['granted', 'prompt', 'denied']
          const permission = result.state;

          if (permission === 'granted') {
            navigator.geolocation.getCurrentPosition(function(position) {
              //imitate map latlng construct
              const userPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
              sessionStorage.setItem(
                'currentLocation',
                JSON.stringify(userPosition)
              );
            });

            dispatch(searchSort('highest-rated', 'granted'));
            return;
          }

          if (permission === 'denied') {
            sessionStorage.removeItem('currentLocation');
            const location = sessionStorage.getItem('geolocation');

            const locationData = location ? JSON.parse(location) : null;

            dispatch(getUserGeolocationReceive(locationData));
            dispatch(searchSort('highest-rated', 'denied'));
            return;
          }
        });
    }
  }, []);

  return { sort, permission };
};
