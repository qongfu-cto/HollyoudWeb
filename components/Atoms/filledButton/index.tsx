import React from "react";
import { Button, ButtonProps } from "@mui/material";

type FilledBottonProps = {
  label: string;
  size?: "small" | "medium" | "large" | undefined;
  variant?: "text" | "outlined" | "contained";
  labelStyles?: any;
  disabled?: boolean;
  onClick?: any | ((value: any) => void) | (() => Promise<void>);
  startIcon?: React.ReactNode;
  buttonProps?: ButtonProps;
  endIcon?: React.ReactNode;
  id?: any;
  open?: any;
  haspopup?: any;
};

/**
 * FilledBotton
 *
 *
 *
 * @param label - required .
 * @param size - optional The size of the component.
 * @param labelStyles - optional defaults to component style.
 * @param variant - optional variant to use.
 * @param disabled - optional If true, the component is disabled.
 * @param onClick - Callback fired when the component is clicked.
 */

const FilledBotton = ({
  label,
  size,
  labelStyles,
  variant,
  disabled,
  onClick,
  startIcon,
  buttonProps,
  endIcon,
  id,
  open,
  haspopup,
}: FilledBottonProps) => {
  return (
    <Button
      size={size}
      color="inherit"
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={labelStyles}
      startIcon={startIcon}
      {...buttonProps}
      endIcon={endIcon}
      id={id && id}
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup={haspopup ? true : false}
      aria-expanded={open ? "true" : undefined}
    >
      {label}
    </Button>
  );
};

export default FilledBotton;
