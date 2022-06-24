import ProfileInput, { MobileInput } from './profileInput';
import React, { useEffect, useState, useMemo } from 'react';
import { Branding } from 'utilities/branding';
import QText from 'components/Atoms/text';
import ProfileEditModal from '../profileEditModal';
import { useProFile } from 'container/profile';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Reducer/root';
import { isEmpty, isUndefined } from 'lodash';
import Loading from 'components/Molecules/loading';
import { Avatar, Box, Button } from '@mui/material';
import Toast from 'components/Atoms/toast';
import { useProfilePageGeneralInfoStylesEN } from './styleEN';
import { AuthAPI } from 'services/authAPI';
import Image from 'next/image';
import VERIFIED from 'assets/icons/verify-icon.svg';
import VerifiedModal from '../../Molecules/verifiedModal';

function ProfilePageGeneralInfo({ setShow, setShowToast }: any) {
  const { modalOpenHandler, openModal } = useProFile();
  const style = useProfilePageGeneralInfoStylesEN();
  const { profileData } = useSelector((state: RootState) => {
    return {
      profileData: state.user.profile
    };
  });
  const { user } = useSelector((state: any) => ({ ...state }));
  const [profile, setProfile] = useState<any>();
  const [load, setLoad] = useState(true);
  const [open, setOpen] = useState(false);
  const [documentStatus, setDocumentStatus] = useState('');
  const [document, setDocument] = useState<any[]>([]);
  const [owner, setOwner] = useState('');

  useEffect(() => {
    if (isUndefined(profile)) {
      if (!isEmpty(profileData?.first_name)) {
        setProfile(profileData);
        setLoad(false);
      } else {
        setProfile(JSON.parse(localStorage.getItem('profile')!));
        setLoad(false);
      }
    } else {
      setLoad(false);
    }
    // if (!profile) back();
  }, [profile, profileData]);

  useMemo(() => {
    setTimeout(() => {
      if (user.errors.profile === '') {
        setProfile(user.profile);
      }
    }, 1000);
  }, [user]);

  console.log('ProfilePageGeneralInfo', profile);

  const verifyEmail = async () => {
    const result = await AuthAPI.resendVerifictionEmail({
      email: profile?.email
    });
    console.log('result', result);
    if (result.status === 200) {
      setShowToast({
        state: true,
        message: 'Email sent',
        error: false
      });
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  /**
     const [documentStatus, setDocumentStatus] = useState('');
  const [document, setDocument] = useState<any[]>([]);
  const [owner, setOwner] = useState('');
   */
  const uploadDocument = (file: any) => {};
  const updateDocument = (file: any, docId: any) => {};
  const applyDocument = () => {};

  return (
    <section>
      {load ? (
        <Loading />
      ) : (
        <>
          <ProfileInput
            label={profile?.username}
            title="USER NAME"
            onClick={() => modalOpenHandler(1)}
          />
          <ProfileInput
            label={profile?.email}
            title="EMAIL"
            onClick={
              profile?.verified
                ? () => modalOpenHandler(2)
                : () => verifyEmail()
            }
            emailVerify={profile?.verified}
          />
          {profile.authType === 'Local' && (
            <ProfileInput
              label="***********"
              title="PASSWORD"
              onClick={() => modalOpenHandler(3)}
            />
          )}
          <MobileInput
            number={profile?.mobile ? profile?.mobile?.split(' ')[1] : ''}
            title="MOBILE"
            flag={profile?.mobileCountry?.flag}
            code={profile?.mobile ? profile?.mobile?.split(' ')[0] : ''}
            onClick={() => modalOpenHandler(4)}
          />
          <QText
            label={
              'This is a lorem ipsum dolor. The more information you share the easier it will be for our team to locate the place and have them join the Qongfu Community.'
            }
            labelColor={Branding.Colors.black[48]}
            labelStyle={{
              fontSize: 12,
              width: '50%',
              margin: `50px 0`
            }}
            textProps={{}}
          />
          {openModal && <ProfileEditModal setShow={setShow} />}
        </>
      )}
    </section>
  );
}

export default ProfilePageGeneralInfo;
