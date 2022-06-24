import { useEffect } from 'react';
import { getUserProfile } from '../../redux/Action/user/userActions';
import { store } from '../../redux/Store';

const userExists =
  typeof window !== 'undefined' && localStorage.getItem('profile');

export function useSocket(savedsocket: any) {
  // checking user exists he joins socket
  useEffect(() => {
    if (
      savedsocket &&
      typeof window !== 'undefined' &&
      localStorage.getItem('profile')
    ) {
  
      savedsocket.emit(
        'userjoin',
        JSON.parse(localStorage.getItem('profile')!)?._id
      );
      // savedsocket.close();
    }
  }, [
    savedsocket,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    typeof window !== 'undefined' && localStorage.getItem('profile')
  ]);

  useEffect(() => {
    if (savedsocket) {
      savedsocket.on('emailVerified', (payload: any) => {
   
        // check if userId is same as existing user
        if (
          JSON.parse(localStorage.getItem('profile')!)?._id.toString() ===
          payload.userId.toString()
        ) {
          // update user with new data
          store.dispatch(
            getUserProfile(JSON.parse(localStorage.getItem('profile')!)?.email)
          );
        }
      });
    }
  }, [savedsocket]);
}
