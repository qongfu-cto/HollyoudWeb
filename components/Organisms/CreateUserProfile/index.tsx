import {
  Avatar,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ListSubheader,
  ButtonBase
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import { userAPI } from 'services/userAPI';

import { Branding } from 'utilities/branding';
import { MONTHS30, onMobile } from 'utilities/utils';
import { Styles } from './style';
import Box from '@mui/material/Box';
import CreateCountryModal from '../countryModal';

const CreateUserProfile = ({
  closeAllModal,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  setMobileNumber,
  countryCode,
  mobileNumber,
  handleCountryCode,
  setCountryCode,
  allCountries,
  userName,
  setUserName,
  selectedGender,
  setSelectedGender,
  genders,
  handleGender,
  bdayDate,
  setBdayDate,
  dates,
  month,
  setYear,
  years,
  year,
  months,
  setMonth,
  createUserProfile,
  userNameError,
  setUserNameError,
  setCountryId,
  countryId,
  allOriginalCountries,
  setAllCountries
}: any) => {
  const styles = Styles();

  const handleSearch = (e: any) => {
    setSearchedCountry(e.target.value);

    if (e.target.value) {
      const countries = allOriginalCountries.filter((country: any) =>
        country.country.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setAllCountries(countries);
    } else {
      setAllCountries(allOriginalCountries);
    }
  };

  const [searchedCountry, setSearchedCountry] = useState('');
  const [openSearch, setOpenSearch] = useState(false);

  const getUserName = async () => {
    if (userName) {
      const user = await userAPI.checkUserNameExist({
        username: userName,
        email: JSON.parse(localStorage.getItem('profile')!)?.email
      });
      if (user.data) {
        setUserNameError(true);
      } else {
        setUserNameError(false);
      }
    }
  };

  useEffect(() => {
    getUserName();
  }, [userName]);

  const getDefaultUserName = async () => {
    const user = await userAPI.getDefaultUserNameForUser({
      email: JSON.parse(localStorage.getItem('profile')!)?.email
    });

    setUserName(user.data);
  };

  useEffect(() => {
    getDefaultUserName();
  }, []);

  const canNotCreateProfile = () => {
    return (
      firstName === '' ||
      userName === '' ||
      selectedGender === '' ||
      bdayDate === '' ||
      year === '' ||
      month === '' ||
      userNameError === true
    );
  };
  return (
    <>
    {/* // TODO: */}
      {onMobile() ? (
        <div className={styles.mobilecenterDiv}>
          <div>
            <p className={styles.newProfile}>Create Profile</p>
            <p className={styles.mdText}>It&apos;s super easy!</p>
            <div className={styles.mtMobile12}>
              <TextField
                value={firstName}
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
                label={
                  <span>
                    First Name<span className={styles.red}>*</span>
                  </span>
                }
                sx={{
                  width: '100%'
                }}
              />
              <TextField
                value={lastName}
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
                label="Last Name"
                sx={{
                  width: '100%',
                  marginTop: 2.5
                }}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className={styles.fz14}>@</span>
                    </InputAdornment>
                  )
                }}
                value={userName}
                onChange={(e: any) => {
                  setUserName(e.target.value);
                }}
                label={
                  <span>
                    Username<span className={styles.red}>*</span>
                  </span>
                }
                sx={{
                  width: '100%',
                  marginTop: 2.5,
                  textAlign: 'center'
                }}
              />
              <FormControl
                sx={{
                  width: '65%',
                  marginTop: 2.5,
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <InputLabel id="country-code">
                  <>
                    Gender <span className={styles.red}>*</span>
                  </>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedGender}
                  label="gender"
                  onChange={(e: any) => {
                    setSelectedGender(e.target.value);
                  }}
                  // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  // sx={{
                  //   width: 150
                  //   // marginRight: 2,
                  //   // marginLeft: 2
                  // }}
                  renderValue={selected => selected}
                >
                  {genders.map((gender: any) => (
                    <MenuItem
                      key={gender}
                      value={gender}
                      className={styles.menu}
                      onChange={handleGender}
                      // style={getStyles(countryCode)}
                    >
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <p className={styles.labelMobile}>BIRTHDATE</p>
              <div className={[styles.row].join(' ')}>
                <FormControl
                  sx={{
                    width:
                      typeof window !== 'undefined'
                        ? window.outerWidth / 6
                        : 64,
                    marginRight: 2
                  }}
                >
                  <InputLabel id="country-code">
                    Date<span className={styles.red}>*</span>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bdayDate}
                    label="gender"
                    onChange={(e: any) => {
                      setBdayDate(e.target.value);
                    }}
                    // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={selected => selected}
                  >
                    {dates.map((date: any) => (
                      <MenuItem
                        key={date}
                        value={date}
                        className={styles.smmenu}
                        // style={getStyles(countryCode)}
                      >
                        {date}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    width:
                      typeof window !== 'undefined'
                        ? window.outerWidth / 2.5
                        : 144,
                    marginRight: 2
                  }}
                >
                  <InputLabel id="country-code">
                    Month<span className={styles.red}>*</span>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="month"
                    onChange={(e: any) => {
                      setMonth(e.target.value);
                      // if month has only 30 days and user has selected date 31 undo it
                      if (
                        MONTHS30.indexOf(e.target.value) !== -1 &&
                        bdayDate === 31
                      ) {
                        setBdayDate('');
                      }
                    }}
                    // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={selected => selected}
                  >
                    {months.map((month: any) => (
                      <MenuItem
                        key={month}
                        value={month}
                        className={styles.smmenu}
                        onChange={handleGender}
                        // style={getStyles(countryCode)}
                      >
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    width:
                      typeof window !== 'undefined'
                        ? window.outerWidth / 5.5
                        : 70,
                    marginRight: 2
                    // marginLeft: 2
                  }}
                >
                  <InputLabel id="country-code">
                    Year<span className={styles.red}>*</span>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="year"
                    onChange={(e: any) => {
                      setYear(e.target.value);
                    }}
                    // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={selected => selected}
                  >
                    {years.map((year: any) => (
                      <MenuItem
                        key={year}
                        value={year}
                        className={styles.smmenu}
                        onChange={handleGender}
                        // style={getStyles(countryCode)}
                      >
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={[styles.row, styles.mtAuto].join(' ')}>
            <Button
              disableElevation
              onClick={() => {
                closeAllModal();
              }}
              variant="contained"
              style={{
                backgroundColor: Branding.Colors.white,
                color: Branding.Colors.black[60],
                width:
                  typeof window !== 'undefined' ? window.outerWidth / 2.5 : 144,
                height: 48,
                borderRadius: 12,
                marginTop: 30,
                cursor: 'pointer',
                marginRight: 16,
                border: `1px solid ${Branding.Colors.black[60]}`
              }}
            >
              <p className={styles.label}>Skip</p>
            </Button>
            <Button
              disableElevation
              onClick={createUserProfile}
              variant="contained"
              disabled={canNotCreateProfile()}
              style={{
                backgroundColor: canNotCreateProfile()
                  ? Branding.Colors.black[6]
                  : Branding.Colors.primary.normal,
                color: canNotCreateProfile()
                  ? Branding.Colors.black[36]
                  : Branding.Colors.white,
                width:
                  typeof window !== 'undefined' ? window.outerWidth / 2.5 : 144,
                height: 48,
                borderRadius: 12,
                marginTop: 30,
                cursor: 'pointer'
              }}
            >
              <p className={styles.label}>Done</p>
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.centerDiv}>
          <div
            className={[
              styles.row,
              styles.justifySpaceBetween,
              styles.mAround
            ].join(' ')}
          >
            <div>
              <p className={styles.newProfile}>Create Profile</p>
              <p className={styles.mdText}>It&apos;s super easy</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={[styles.row, styles.mt].join(' ')}>
              <TextField
                value={firstName}
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
                label={
                  <span>
                    First Name<span className={styles.red}>*</span>
                  </span>
                }
                sx={{
                  width: 300
                  // marginRight: 2,
                  // marginLeft: 2
                }}
              />
              <TextField
                value={lastName}
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
                label="Last Name"
                sx={{
                  width: 300,
                  marginRight: 2,
                  marginLeft: 2
                }}
              />
            </div>
            <CreateCountryModal
              openSearch={openSearch}
              setOpenSearch={setOpenSearch}
              onMobile={onMobile}
              searchedCountry={searchedCountry}
              handleSearch={handleSearch}
              allCountries={allCountries}
              countryId={countryId}
              setCountryCode={setCountryCode}
              setCountryId={setCountryId}
            />

            <div className={[styles.row, styles.mtI].join(' ')}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className={styles.fz14}>@</span>
                    </InputAdornment>
                  )
                }}
                value={userName}
                onChange={(e: any) => {
                  setUserName(e.target.value);
                }}
                label={
                  <span>
                    Username<span className={styles.red}>*</span>
                  </span>
                }
                sx={{
                  width: 450,
                  marginRight: 2
                  // marginLeft: 2
                }}
              />
              <FormControl
                sx={{
                  width: 150,
                  marginRight: 2
                  // marginLeft: 2
                }}
              >
                <InputLabel id="country-code">
                  <>
                    Gender <span className={styles.red}>*</span>
                  </>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedGender}
                  label="gender"
                  onChange={(e: any) => {
                    setSelectedGender(e.target.value);
                  }}
                  // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  // sx={{
                  //   width: 150
                  //   // marginRight: 2,
                  //   // marginLeft: 2
                  // }}
                  renderValue={selected => selected}
                >
                  {genders.map((gender: any) => (
                    <MenuItem
                      key={gender}
                      value={gender}
                      className={styles.menu}
                      onChange={handleGender}
                      // style={getStyles(countryCode)}
                    >
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.message}>
              {userNameError ? (
                <p className={styles.notAvailable}>
                  This username already exists
                </p>
              ) : (
                userName.length > 0 && (
                  <p className={styles.available}>This username is available</p>
                )
              )}
            </div>

            <div className={[styles.row, styles.mtI].join(' ')}>
              <FormControl
                sx={{
                  width: 150,
                  marginRight: 2
                  // marginLeft: 2
                }}
              >
                <InputLabel id="country-code">
                  Date<span className={styles.red}>*</span>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bdayDate}
                  label="gender"
                  onChange={(e: any) => {
                    setBdayDate(e.target.value);
                  }}
                  // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={selected => selected}
                >
                  {dates.map((date: any) => (
                    <MenuItem
                      key={date}
                      value={date}
                      className={styles.smmenu}
                      // style={getStyles(countryCode)}
                    >
                      {date}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: 280,
                  marginRight: 2
                  // marginLeft: 2
                }}
              >
                <InputLabel id="country-code">
                  Month<span className={styles.red}>*</span>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={month}
                  label="month"
                  onChange={(e: any) => {
                    setMonth(e.target.value);
                    // if month has only 30 days and user has selected date 31 undo it
                    if (
                      MONTHS30.indexOf(e.target.value) !== -1 &&
                      bdayDate === 31
                    ) {
                      setBdayDate('');
                    }
                  }}
                  // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={selected => selected}
                >
                  {months.map((month: any) => (
                    <MenuItem
                      key={month}
                      value={month}
                      className={styles.smmenu}
                      onChange={handleGender}
                      // style={getStyles(countryCode)}
                    >
                      {month}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: 150,
                  marginRight: 2
                  // marginLeft: 2
                }}
              >
                <InputLabel id="country-code">
                  Year<span className={styles.red}>*</span>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="year"
                  onChange={(e: any) => {
                    setYear(e.target.value);
                  }}
                  // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={selected => selected}
                >
                  {years.map((year: any) => (
                    <MenuItem
                      key={year}
                      value={year}
                      className={styles.smmenu}
                      onChange={handleGender}
                      // style={getStyles(countryCode)}
                    >
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Button
              disableElevation
              onClick={createUserProfile}
              variant="contained"
              disabled={canNotCreateProfile()}
              style={{
                backgroundColor: canNotCreateProfile()
                  ? Branding.Colors.black[6]
                  : Branding.Colors.primary.normal,
                color: canNotCreateProfile()
                  ? Branding.Colors.black[36]
                  : Branding.Colors.white,
                width: 208,
                height: 48,
                borderRadius: 12,
                marginTop: 30,
                cursor: 'pointer'
              }}
            >
              <p className={styles.label}>COMPLETE PROFILE</p>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateUserProfile;
