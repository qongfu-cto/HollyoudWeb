import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import QAvatar from 'components/Atoms/avatar';
import QIcon from 'components/Atoms/icon';
import ProfileCard from 'components/Atoms/profileCard';
import UserNameHeader from 'components/Atoms/userNameHeader';
import CropImage from 'components/Molecules/cropImange';
import OutLinedInput from 'components/Molecules/outLinedInput';
import React, { useRef, useState, useEffect } from 'react';
import { imageAPI } from 'services/imageAPI';
import { api, userAPI } from 'services/userAPI';
import { Branding } from 'utilities/branding';
import CAMERA from '../../../assets/icons/camera-icon.svg';
import DeviceCamera from '../../../assets/images/device-camera.svg';
import DeviceGallery from '../../../assets/images/device-gallery.svg';
import Drawer from 'react-bottom-drawer';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from 'redux/Action/user/userActions';
import { toast } from 'react-toastify';

import { Styles } from '../../../styles/profile';
import DrawerTextInput from 'components/Molecules/dawerTextInput';
import SimpleTextField from 'components/Atoms/SimpleTextField';
const ProfileInfo = () => {
  const styles = Styles();
  const dispatch = useDispatch();

  const uploadRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const tempFieldRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState<FormData>();

  const [displayName, setDisplayName] = useState('');
  const [tagName, setTagName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [tempText, setTempText] = useState('');
  const [drawerHeader, setDrawerHeader] = useState('');
  const [displayData, setDisplayData] = useState<any>({});

  const [imageKey, setImageKey] = useState('');

  const [isVisible, setIsVisible] = React.useState(false);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  const [value, setValue] = useState(0);

  const [isVisibleText, setIsVisibleText] = React.useState(false);
  const openDrawerText = React.useCallback(() => setIsVisibleText(true), []);
  const closeDrawerText = React.useCallback(() => setIsVisibleText(false), []);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);

  const toggleVisibleText = () => {
    setIsVisibleText(false);
  };

  const { profile } = useSelector(({ user }: any) => ({
    profile: user.profile
  }));

  useEffect(() => {
    setDisplayName(profile?.display_name);
    setTagName(profile?.tagLine);
    setAboutMe(profile?.bio);
    setImageKey(profile?.avatar);
  }, [profile]);

  const getUserProfileAction = () => {
    dispatch(getUserProfile(profile.email));
  };

  useEffect(() => {
    if (tempText?.length > 0) {
      setUpdateSuccess(true);
    } else {
      setUpdateSuccess(false);
    }
  }, [tempText]);

  const updateDisplayName = async () => {
    const result = await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      displayName: tempText
    });
    if (result.status === 200 || result.status === 201) {
      toast.success('Display Name successfully updated', {});
    } else {
      toast.error('Display Name could not be updated', {});
    }
    getUserProfileAction();
  };

  const updateTagLine = async () => {
    const result = await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      tagLine: tempText
    });

    if (result.status === 200 || result.status === 201) {
      toast.success('TagLine successfully updated', {});
    } else {
      toast.error('TagLine could not be updated', {});
    }

    getUserProfileAction();
  };

  const updateAboutMe = async () => {
    const result = await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      bio: tempText
    });
    if (result.status === 200 || result.status === 201) {
      toast.success('About me successfully updated', {});
    } else {
      toast.error('About me could not be updated', {});
    }
    getUserProfileAction();
  };

  const data = (code: number) => {
    switch (code) {
      case 0:
        return {
          fieldHeader: 'Display Name',
          updateAction: async () => {
            setUpdateSuccess(false);
          },
          change: 6,
          hiddenLabel: true,
          updateBtn: 'Update'
        };
      case 1:
        return {
          fieldHeader: 'Tag Line',
          updateAction: () => {
            setUpdateSuccess(false);
          },
          change: 7,
          hiddenLabel: true,
          updateBtn: 'Update'
        };
      case 2:
        return {
          fieldHeader: 'About Me',
          updateAction: () => {
            setUpdateSuccess(false);
          },
          change: 8,
          hiddenLabel: true,
          updateBtn: 'Update'
        };

      default: {
      }
    }
  };

  const isServer = () => typeof window === `undefined`;

  const uploadAvatarUser = async () => {
    const image = await imageAPI.uploadThumbnail({
      formData: avatar
    });
    // show the image to the user
    setImageKey(image.data);

    // upload user avatar
    await userAPI.userProfile({
      email: JSON.parse(localStorage.getItem('profile')!)?.email,
      avatar: image.data
    });
    // update user profile
    getUserProfileAction();
  };

  useEffect(() => {
    if (avatar) {
      uploadAvatarUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  const onFileChange = (event: any) => {
    const value = event.target.files[0];
    // console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append('images', value);
    console.log('formData', formData);
    setAvatar(formData);
    closeDrawer();
  };

  return isServer() ? null : (
    <div>
      <input
        type="file"
        accept="image/*"
        name="pic"
        onChange={onFileChange}
        style={{ display: 'none' }}
        ref={galleryRef}
      />

      <input
        id="cameraFileInput"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onFileChange}
        style={{ display: 'none' }}
        ref={cameraRef}
      />
      <Box className={styles.navigation}>
        <Drawer
          // @ts-ignore
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawerText}
          isVisible={isVisibleText}
        >
          <DrawerTextInput
            toggleVisibleText={toggleVisibleText}
            setDisplayName={setDisplayName}
            tempText={tempText}
            setTempText={setTempText}
            tempFieldRef={tempFieldRef}
            setTagName={setTagName}
            setAboutMe={setAboutMe}
            value={value}
            drawerHeader={drawerHeader}
            displayData={displayData}
            showSuccess={updateSuccess}
            updateDisplayName={updateDisplayName}
            updateTagLine={updateTagLine}
            updateAboutMe={updateAboutMe}
          />
        </Drawer>
        <Drawer
          // @ts-ignore
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
        >
          <div className="drawer-content">
            <ProfileCard
              cardHeader="Camera"
              icon={DeviceCamera}
              action={() => {
                cameraRef?.current?.click();
              }}
            />
          </div>
          <div className="drawer-content">
            <ProfileCard
              cardHeader="Gallery"
              icon={DeviceGallery}
              action={() => {
                galleryRef?.current?.click();
              }}
            />
          </div>
        </Drawer>
      </Box>

      <UserNameHeader title={profile.username} />

      <div className={styles.avatarContainer}>
        {/* Avatar */}
        <QAvatar
          avatar={imageKey && `${api}/profile/uploads/${imageKey}`}
          avatarStyle={{
            width: 127,
            height: 127,
            border: `2px solid white`,
            objectFit: 'cover',
            marginTop: 6
          }}
        />
        <QIcon
          iconStyle={styles.camera}
          iconProps={{ width: 25, height: 25, src: CAMERA }}
          click={openDrawer}
        />
        {/* Finish Avatar */}

        <div className={styles.textfields}>
          <div
            style={{
              width: '100%',
              minHeight: 64, // adjust this
              height: 'auto',
              backgroundColor: Branding.Colors.white,
              borderRadius: '4px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 16
            }}
            onClick={() => {
              setIsVisibleText(true);
              setTempText(displayName);
              setValue(1);
              setDrawerHeader('Display Name');
              setDisplayData(data(0));
            }}
          >
            <div className={styles.divrow}>
              <div>
                <Typography className={styles.label}>DISPLAY NAME</Typography>
                <Typography className={styles.value}>{displayName}</Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              minHeight: 64, // adjust this
              height: 'auto',
              backgroundColor: Branding.Colors.white,
              borderRadius: '4px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 16
            }}
            onClick={() => {
              setIsVisibleText(true);
              setTempText(tagName);
              setValue(2);
              setDrawerHeader('Tag Line');
              setDisplayData(data(1));
            }}
          >
            <div className={styles.divrow}>
              <div>
                <Typography className={styles.label}>TAG LINE</Typography>
                <Typography className={styles.value}>{tagName}</Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              minHeight: 164, // adjust this
              height: 'auto',
              backgroundColor: Branding.Colors.white,
              borderRadius: '4px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 16
            }}
            onClick={() => {
              setIsVisibleText(true);
              setTempText(aboutMe);
              setValue(3);
              setDrawerHeader('About Me');
              setDisplayData(data(2));
            }}
          >
            <div className={styles.divrow}>
              <div>
                <Typography className={styles.label}>ABOUT ME</Typography>
                <Typography className={styles.value}>{aboutMe}</Typography>
              </div>
            </div>
          </div>

          {/* <TextField
            type="text"
            label="Display Name"
            required
            variant="filled"
            sx={{
              width: '100%',

              backgroundColor: Branding.Colors.white,
              '& .MuiFilledInput-root': {
                backgroundColor: Branding.Colors.white
              },
              '&.Mui-focused fieldset': {
                backgroundColor: Branding.Colors.white
              },
              boxShadow: '-1px 3px 4px -3px rgba(0,0,0,0.75)'
            }}
            value={displayName}
            onClick={() => {
              setIsVisibleText(true);
              setTempText(displayName);
              setValue(1);
              setDrawerHeader('Display Name');
              setDisplayData(data(0));
            }}
          /> */}
          {/* <TextField
            label="Tag Line"
            variant="filled"
            sx={{
              // width: 368,
              width: '100%',
              mt: 2,
              backgroundColor: Branding.Colors.white,
              '& .MuiFilledInput-root': {
                backgroundColor: Branding.Colors.white
              },
              '&.Mui-focused fieldset': {
                backgroundColor: Branding.Colors.white
              },
              boxShadow: '-1px 3px 4px -3px rgba(0,0,0,0.75)'
            }}
            value={tagName}
            onClick={() => {
              setIsVisibleText(true);
              setTempText(tagName);
              setValue(2);
              setDrawerHeader('Tag Line');
              setDisplayData(data(1));
            }}
          /> */}
          {/* <TextField
            label="About Me"
            variant="filled"
            sx={{
              // width: 368,
              width: '100%',
              mt: 2,
              backgroundColor: Branding.Colors.white,
              '& .MuiFilledInput-root': {
                backgroundColor: Branding.Colors.white
              },
              '&.Mui-focused fieldset': {
                backgroundColor: Branding.Colors.white
              },
              boxShadow: '-1px 3px 4px -3px rgba(0,0,0,0.75)'
            }}
            multiline
            rows={6}
            value={aboutMe}
            onClick={(e: any) => {
              setIsVisibleText(true);
              setTempText(aboutMe);
              setValue(3);
              setDrawerHeader('About Me');
              setDisplayData(data(2));
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
