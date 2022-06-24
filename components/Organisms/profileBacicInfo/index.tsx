import DatePickerInput from 'components/Atoms/datePicker';

import AuthenticationInputs from 'components/Molecules/authenticationInputs';
import OutLinedInput from 'components/Molecules/outLinedInput';
import SelectLanguage from 'components/Organisms/selectLanguge';
import { useProFile } from 'container/profile';
import React, { useEffect, useState } from 'react';
import { Menu } from './profileInputs';
import { useProfileBasicInfoStylesEN } from './stylesEN';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/Reducer/root';
import * as appAction from '../../../redux/Action/app/appActions';
import { isEmpty, isUndefined, sortBy } from 'lodash';
import Loading from 'components/Molecules/loading';
import QDropDownInputBox from 'components/Atoms/QDropDownInputBox';
import { Box } from '@mui/material';
import { Branding } from 'utilities/branding';
import QText from 'components/Atoms/text';

function ProfileBasicInfo({ handleInputsChange, handleMenuChange }: any) {
  const { onDateChangeHandler } = useProFile();
  const styles = useProfileBasicInfoStylesEN();
  const dispatch = useDispatch();

  const [options, setOptions] = useState<{ value: number; label: string }[]>([
    { value: 0, label: '' }
  ]);
  const [count, setCount] = useState(1);
  const { profileData } = useSelector((state: RootState) => {
    return {
      profileData: state.user.profile
    };
  });

  const { countries } = useSelector((state: RootState) => {
    return {
      countries: state.app.countries
    };
  });
  const [profile, setProfile] = useState<any>();
  const [load, setLoad] = useState(true);

  // const profile = profileData ?? localStorage?.getItem('profile');

  useEffect(() => {
    if (isUndefined(profile)) {
      if (!isEmpty(profileData?.first_name)) {
        setProfile(profileData);
      } else {
        setProfile(JSON.parse(localStorage.getItem('profile')!));
      }
    } else {
      setLoad(false);
    }
    // if (!profile) back();
  }, [profile, profileData]);

  console.log('ProfileBasicInfo', profile);

  useEffect(() => {
    if (count === 1) {
      options.pop();
      if (!isEmpty(countries)) {
        console.log('counties ', countries);
        countries?.map((country: any) => {
          options?.push({ value: country._id, label: country.nationality });
        });
      }
      console.log('counties ', options);

      const sortedList = sortBy(options, ['label']);
      setOptions([...sortedList]);
      console.log('counties ', sortedList);
      setCount(2);
    }
  }, [count, countries, dispatch, options]);

  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <div style={{
          width: '50%'
        }}>
          <div className={styles.rowContainer}>
            <OutLinedInput
              textAlign="start"
              label="FIRST NAME"
              width={306}
              padding={15}
              labelColor
              defaultValue={profile?.first_name}
              onChangeText={e => handleInputsChange(e, 'firstName')}
            />
            <OutLinedInput
              textAlign="start"
              label="LAST NAME"
              width={306}
              padding={15}
              labelColor
              defaultValue={profile?.last_name}
              onChangeText={e => handleInputsChange(e, 'lastName')}
            />
          </div>
          <div className={styles.rowContainer}
            style={{ width: '100%' }}
          >
            <div style={{ width: '100%', maxWidth: 330 }}>
              <DatePickerInput
                labelColor
                label="DATE OF BIRTH"
                inputWidth={306}
                outlined
                onDateChangeHandler={handleInputsChange}
                TextFieldStyle={styles.date}
                date={profile?.dob}
              />
            </div>
            <div>
              <QText
                label={'GENDER'}
                labelStyle={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 15,
                  marginBottom: 4,
                  float: 'left',
                  color: Branding.Colors.black[60]
                }}
              />
              <QDropDownInputBox
                onSelectChange={(value: any) =>
                  handleMenuChange(value, 'gender')
                }
                options={[
                  { value: 1, label: 'male' },
                  { value: 2, label: 'female' }
                ]}
                containerStyle={{
                  height: 48,
                  width: 152,
                  marginLeft: 10,
                  borderRadius: 8,
                  fontFamily: 'Roboto',
                  fontSize: 16,
                  backgroundColor: Branding.Colors.white,
                  border: '0.5px solid e5e5e5'
                }}
                placeholder={'Select '}
                create={false}
                multi={false}
                value={
                  profile?.gender === 'female'
                    ? [{ value: 2, label: 'female' }]
                    : [{ value: 1, label: 'male' }]
                }
              />
            </div>
          </div>
          {/* <Box>
            <QText
              label={'NATIONALITY'}
              labelStyle={{
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop: 15,
                color: Branding.Colors.black[60]
              }}
            />
            <QDropDownInputBox
              onSelectChange={(value: any) =>
                handleMenuChange(value, 'Nationality')
              }
              options={options}
              containerStyle={{
                height: 48,
                width: 307,
                marginLeft: 10,
                borderRadius: 8,
                fontFamily: 'Roboto',
                fontSize: 16,
                backgroundColor: Branding.Colors.white,
                border: '0.5px solid e5e5e5'
              }}
              placeholder={'Select '}
              create={false}
              multi={false}
              value={
                profile?.nationality
                  ? [
                      {
                        value: profile?.nationality?._id,
                        label: profile?.nationality?.name
                      }
                    ]
                  : []
              }
            />
          </Box> */}
          {/* <SelectLanguage
            handleInputsChange={handleInputsChange}
            value={profile?.languages}
          /> */}
        </div>
      )}
    </div>
  );
}

export default ProfileBasicInfo;
