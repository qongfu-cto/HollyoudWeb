import { IconButton, Stack } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import CAMERA from '../../../assets/icons/camera-icon.svg';
import { Styles } from './style';

interface CameraIconProps {
  width: number;
  height: number;
  logoStyle?: any;
}

const CameraIcon = ({ width, height, logoStyle }: CameraIconProps) => {
  const styles = Styles();

  const Input = styled('input')({
    display: 'none'
  });

  return (
    <Box
      className={[
        logoStyle ? logoStyle : styles.logoUpload,
        styles.absolutePosition
      ].join(' ')}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="logo">
          <Input
            accept="image/svg"
            id="logo"
            type="file"
            onChange={(event: any) => {
              console.log('CHANGING', event, event.target.files);
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                if (!reader.result) {
                  //   setImgSrc(reader.result.toString() || "");
                }
              });
              reader.readAsDataURL(event.target.files[0]);
            }}
            // onChange={
            //   mode === "edit"
            //     ? (event: any) => onSelectFile(event, "logo")
            //     : (event: any) => onSelectFile(event, "newLogo")
            // }
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Image src={CAMERA} alt="" width="24" height="20" />
          </IconButton>
        </label>
      </Stack>
    </Box>
  );
};

export default CameraIcon;
