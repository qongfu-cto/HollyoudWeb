import React from 'react';

import {
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import Image from 'next/image';
import VerifiedText from '../verifiedText';

const SimpleTextField = ({
  value,
  setValue,
  startAdornment,
  Icon,
  label,
  StartIcon,
  disabled,
  iconStyles,
  endBtnAction,
  action,
  countryFlag,
  type,
  mt,
  alt,
  placeholder,
  startBtnAction = () => {}
}: any) => {
  // : StartIcon ? (
  //     <InputAdornment position="start">
  //       <StartIcon />
  //     </InputAdornment>
  //   ) : null
  return (
    <FormControl sx={{ mt: mt && 3, width: '100%' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        placeholder={placeholder}
        id="outlined-adornment-password"
        type={type}
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
        startAdornment={
          startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : (
            <>
              {StartIcon && (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    //   onClick={handleClickShowPassword}
                    //   onMouseDown={handleMouseDownPassword}
                    edge="start"
                  >
                    <Image alt={alt} src={StartIcon} width="20" height="24" />
                  </IconButton>
                </InputAdornment>
              )}
              {countryFlag && (
                <>
                  <Avatar
                    alt={`${countryFlag} flag`}
                    src={countryFlag}
                    sx={{
                      width: 24,
                      height: 24,
                      marginRight: 1
                    }}
                    onClick={startBtnAction}
                  />
                </>
              )}
            </>
          )
        }
        endAdornment={
          Icon && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={endBtnAction}
                //   onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <Icon className={iconStyles} />
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default SimpleTextField;
