import React, { useRef, useState, useEffect } from 'react';
import camera from '../../../assets/icons/camera-icon.svg';
import QAvatar from '../../Atoms/avatar';
import QIcon from '../../Atoms/icon';
import 'react-image-crop/dist/ReactCrop.css';
import CropImage from '../../Molecules/cropImange';
import { api } from '../../../services/userAPI';
import { useProfilePageInfoStylesEN } from './styleEN';
import { InputFieldOutLined } from 'components/Atoms/inputField';
import OutLinedInput from 'components/Molecules/outLinedInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/Reducer/root';
import { isEmpty, isUndefined } from 'lodash';
import Loading from 'components/Molecules/loading';
import { uploadAvatar } from '../../../redux/Action/user/userActions';
import { Typography } from '@material-ui/core';
import { Branding } from 'utilities/branding';

function ProfilePageInfo({ handleInputsChange }: any) {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<FormData>();
  const styles = useProfilePageInfoStylesEN();
  const dispatch = useDispatch();
  const { profileData, avatar } = useSelector((state: RootState) => {
    return {
      profileData: state.user.profile,
      avatar: state.user.avatar
    };
  });

  const [profile, setProfile] = useState<any>();
  const [load, setLoad] = useState(true);

  // const profile = profileData ?? localStorage?.getItem('profile');

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

  useEffect(() => {
    if (result) {
      dispatch(uploadAvatar(result));
    }
  }, [result, dispatch]);

  console.log('ProfileBasicInfo', profile);
  return (
    <div className={styles.container}>
      {load ? (
        <Loading />
      ) : (
        <>
          <div style={{ position: 'relative', height: 50 }}>
            <div className={styles.avatarContainer}>
              <QAvatar
                avatar={
                  `${api}/profile/uploads/${avatar}` ??
                  '../../../assets/images/avatar.png'
                }
                avatarStyle={{
                  width: 127,
                  height: 127,
                  border: `2px solid white`,
                  objectFit: 'cover'
                }}
              />
              <CropImage
                ref={uploadRef}
                imageResult={setResult}
                container={styles.icon}
                circularCrop={true}
              >
                <QIcon
                  iconProps={{ width: 25, height: 25, src: camera }}
                  click={() => uploadRef?.current?.click()}
                />
              </CropImage>
            </div>
          </div>

          <div className={styles.sectionContainer}>
            <OutLinedInput
              width={277}
              label="DISPLAY NAME"
              labelColor
              textAlign="start"
              defaultValue={profile?.display_name}
              onChangeText={e => handleInputsChange(e, 'name')}
            />
            <OutLinedInput
              width={480}
              label="TAG LINE"
              labelColor
              textAlign="start"
              defaultValue={profile?.tagLine}
              onChangeText={e => handleInputsChange(e, 'tag')}
            />
            <OutLinedInput
              width={480}
              label="ABOUT ME"
              labelColor
              rows={10}
              multiline
              textAlign="start"
              size="small"
              defaultValue={profile?.bio}
              onChangeText={e => handleInputsChange(e, 'bio')}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePageInfo;
