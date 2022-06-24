import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileCardLayout from '../../../components/Organisms/profileCard';
import BreadCrumbHeaderWithButton from '../../../components/Molecules/BreadCrumbHeaderWithButton';
import { RootState } from '../../../redux/Reducer/root';
import ProfileLayout from 'components/Layouts/profileLayout';
import { isEmpty } from 'lodash';

import { AuthAPI } from 'services/authAPI';
import MyQloudNotificationBar from 'components/Molecules/MyQloudNotificationBar';

function Profile() {
  const { profileData }: any = useSelector((state: RootState) => {
    return {
      profileData: state.user.profile
    };
  });

  const [profile, setProfile] = useState<any>();
  const { back, push } = useRouter();
  // let profile = profileData ?? localStorage?.getItem('profile');

  useEffect(() => {
    if (isEmpty(profile)) {
      console.log('Profile empty');
      if (!isEmpty(profileData?.first_name)) {
        console.log('get Profile from state');
        console.log(profileData);
        setProfile(profileData);
      } else {
        console.log('get Profile from storage');
        setProfile(JSON.parse(localStorage.getItem('profile')!));
      }
    }
    // if (!profile) back();
  }, [profile, profileData]);

  return (
    <div
      style={{
        padding: `0 20px `,
        margin: '0 auto',
        width: '100%'
      }}
    >
      <ProfileCardLayout userProfile={profile} />
    </div>
  );
}

export default Profile;
