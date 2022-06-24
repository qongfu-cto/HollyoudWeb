import React from 'react';
import { useButtonStylesEN } from './stylesEN';
import { Button, ButtonProps } from '@mui/material';

interface QButtonProps {
  style?: React.CSSProperties;
  outline?: boolean;
  btnWidth?: number | string;
  btnHeight?: number | string;
  labelStyles?: React.CSSProperties | {};
  label?: string;
  onClick?: () => void;
  buttonProps?: any;
  variant?: string;
}

/**
 * Button
 *
 * component to display button in outlined style or solid style
 *
 * @param label - button title (default Button Label)
 * @param outlined - if true will display outlined style
 * @param style - add style to the button
 * @param borderClr - color for border
 * @param  color - button background color.
 * @param btnHeight - button height
 * @param btnWidth - button width.
 * @param labelStyles - customized style for label..
 * @param  radius - radius scale
 * @param onClick - button click event
 * @param buttonProps - object that contain all button root props
 * */

const QButton: React.FC<QButtonProps> = ({
  style,
  outline,
  labelStyles,
  btnWidth,
  btnHeight,
  label,
  onClick,
  buttonProps,
  variant
}) => {
  const stylesEN = useButtonStylesEN();

  const solidBtn = () => {
    return (
      <Button
        {...buttonProps}
        onClick={onClick}
        variant={variant ?? 'contained'}
        className={stylesEN.button}
        classes={{ disabled: stylesEN.disable }}
        disableRipple
        style={{
          width: btnWidth,
          ...style
        }}
      >
        <span style={labelStyles} className={stylesEN.labelSolid}>
          {label ?? 'Button Label'}
        </span>
      </Button>
    );
  };

  const outlineBtn = () => {
    return (
      <Button
        variant="outlined"
        {...buttonProps}
        onClick={onClick}
        // className={stylesEN.button}
        classes={{ disabled: stylesEN.disable }}
        style={{
          //   cursor: "pointer",
          //   borderRadius: radius ?? 12,
          //   height: btnHeight ?? 48,
          //   width: btnWidth ?? "auto",
          //   border: "1px solid",
          //borderColor: borderClr ?? Branding.Colors.primary['normal'],
          ...style
        }}
      >
        <span style={labelStyles} className={stylesEN.labelOutline}>
          {label ?? 'Button Label'}
        </span>
      </Button>
    );
  };

  return outline ? outlineBtn() : solidBtn();
};

export default QButton;
