import React, { ReactNode, ReactElement } from 'react';
import { useInputFieldStylesEN } from './styleEN';
import {
  OutlinedInput,
  OutlinedInputProps,
  TextField,
  TextFieldProps
} from '@mui/material';

type InputFieldProps = {
  rows?: number;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
  placeholder?: string;
  borderRadius?: string | number | undefined;
  containerMargin?: string | number | undefined;
  variant?: 'filled' | 'standard' | 'outlined' | undefined;
  endIcon?: ReactElement | ReactElement[] | ReactNode;
  startIcon?: ReactElement | ReactElement[];
  outlinedInputProps?: OutlinedInputProps;
  fieldFillProps?: TextFieldProps;
  padding?: number | string;
  disableBorder?: boolean;
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
export const InputFieldFill = ({
  rows,
  label,
  labelStyle,
  placeholder,
  inputStyle,
  borderRadius,
  containerMargin,
  padding,
  variant,
  fieldFillProps
}: InputFieldProps) => {
  const styles = useInputFieldStylesEN({
    border: borderRadius,
    margin: containerMargin,
    padding: padding
  });

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <TextField
      label={label}
      rows={rows}
      multiline
      variant="filled"
      fullWidth
      placeholder={placeholder}
      className={styles.containerFill}
      InputProps={
        {
          disableUnderline: true,
          classes: { input: styles.input }
        } as Partial<OutlinedInputProps>
      }
      InputLabelProps={{
        className: labelStyle,
        disableAnimation: true,
        shrink: true
      }}
      inputProps={{
        className: inputStyle
      }}
      {...fieldFillProps}
    />
  );
};

export const InputFieldOutLined = ({
  rows,
  endIcon,
  placeholder,
  inputStyle,
  borderRadius,
  containerMargin,
  padding,
  outlinedInputProps,
  startIcon,
  disableBorder
}: InputFieldProps) => {
  const styles = useInputFieldStylesEN({
    border: borderRadius,
    margin: containerMargin,
    padding: padding
  });

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <OutlinedInput
      startAdornment={startIcon}
      endAdornment={endIcon}
      style={{
        borderRadius: borderRadius
      }}
      rows={rows}
      placeholder={placeholder}
      className={styles.containerOutlined}
      classes={{ root: inputStyle, input: styles.outlined }}
      {...outlinedInputProps}
    />
  );
};
