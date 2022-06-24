import React, { ReactElement } from 'react';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { useCheckBoxStylesEN } from './stylesEN';

interface CheckBoxIProps {
  label: string | number | ReactElement;
  checkboxColor?: string;
  labelColor?: string;
  labelFontSize?: number;
  checkboxProps?: CheckboxProps;
  checkBoxHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  label,
  checkboxColor,
  labelColor,
  labelFontSize,
  checkBoxHandler,
  checkboxProps
}: CheckBoxIProps) => {
  const styles = useCheckBoxStylesEN();
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...checkboxProps}
          onChange={checkBoxHandler}
          sx={{ '&.Mui-checked': { color: checkboxColor } }}
        />
      }
      label={label}
      sx={{
        color: labelColor,
        fontSize: labelFontSize,
        width: '100%'
      }}
      classes={{ label: styles.label }}
    />
  );
};

export default CheckBox;
