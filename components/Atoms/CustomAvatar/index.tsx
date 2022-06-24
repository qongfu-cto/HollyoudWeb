import { AvatarProps } from '@material-ui/core';
import { Avatar, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';

interface PropsInterface {
  style?: string;
  avatarStyle?: SxProps<Theme> | undefined | any;
  alt?: string;
  text?: string;
  avatar?: any;
  avatarProps?: AvatarProps;
  sx?: any;
  className?: any;
}

const CustomAvatar = ({
  style,
  avatarStyle,
  alt,
  text,
  avatar,
  avatarProps,
  sx
}: any) => {
  return (
    <>
      <Avatar
        className={avatarStyle}
        alt={alt}
        src={avatar}
        sx={sx}
        {...avatarProps}
      />
      {text && <Typography className={style}>{text}</Typography>}
    </>
  );
};

export default CustomAvatar;
