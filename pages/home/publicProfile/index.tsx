import React from 'react';
import UserNameHeader from '../../../components/Atoms/userNameHeader';
import UserProfileData from 'components/Molecules/userProfileData';
import { useSelector } from 'react-redux';
import { Styles } from '../../../styles/publicProfileStyles';

const Profile = () => {
  const styles = Styles();
  const isServer = () => typeof window === `undefined`;

  const { profile } = useSelector(({ user }: any) => ({
    profile: user.profile
  }));

  return isServer() ? null : (
    <div>
      <UserNameHeader title={profile.username} />
      <div
        style={{
          backgroundImage: `url('/publicProfileBackground.png')`,
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: profile?.bio?.length > 165 ? 40 : 0,
          overflowY:
            profile?.bio?.length < 165 || !profile?.bio ? 'hidden' : 'scroll',
          height:
            profile?.bio?.length < 165 || !profile?.bio
              ? '100%'
              : window.innerHeight,
          paddingBottom: profile?.bio?.length < 165 || !profile?.bio ? 0 : 50
        }}
      >
        <div className={styles.bgText}>
          <UserProfileData box={true} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
