import React from 'react';
import Image, { ImageProps } from 'next/image';
import {
  Avatar,
  IconButton,
  IconButtonProps,
  ButtonProps
} from '@mui/material';

type IconProps = {
  source?: any;
  alt?: string;
  click?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  iconProps?: any;
  iconStyle?: string;
  size?: 'small' | 'large';
  buttonProps?: any;
  avatar?: any;
};

/**
 * BackTextButton
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param label - optional label that defaults to "Back to Home".
 * @param hrefLink - optional "/url" that defaults to home page "/".
 */
const QIcon = ({
  source,
  iconProps,
  iconStyle,
  click,
  size,
  buttonProps,
  avatar = false
}: IconProps) => {
  //const styles = useInputFieldStylesEN();

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <IconButton
      onClick={click}
      className={iconStyle}
      size={size}
      {...buttonProps}
    >
      {avatar ? (
        <Avatar sx={{ width: 32, height: 32 }} alt="" src={source} />
      ) : (
        <Image src={source} alt="" {...iconProps} />
      )}
    </IconButton>
  );
};

export default QIcon;
