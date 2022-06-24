import React from 'react';
import {
  DesktopDatePicker,
  DatePickerProps,
  LocalizationProvider
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, OutlinedInput, TextFieldProps } from '@mui/material';
import OutLinedInput from 'components/Molecules/outLinedInput';
import { enGB } from 'date-fns/locale';

interface DatePickerInputProps {
  dateProps?: DatePickerProps;
  onDateChangeHandler: (date: Date, event: any) => void;
  TextFieldStyle?: string;
  outlined?: boolean;
  inputWidth?: string | number;
  label?: string;
  labelColor?: boolean;
  date: any;
}

const DatePickerInput = ({
  dateProps,
  onDateChangeHandler,
  TextFieldStyle,
  outlined,
  inputWidth,
  label,
  labelColor,
  date
}: DatePickerInputProps) => {
  const [value, setValue] = React.useState<Date | null>(new Date(date));
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
      <DesktopDatePicker
        label={label ?? 'Birthday'}
        {...dateProps}
        value={value}
        onChange={(newValue: any, e) => {
          setValue(newValue), onDateChangeHandler(newValue, e);
        }}
        // onChange={onDateChangeHandler}
        renderInput={(params: TextFieldProps) => {
          return (
            <>
              {outlined ? (
                <OutLinedInput
                  labelColor={labelColor}
                  padding={15}
                  width={inputWidth}
                  label={params.label}
                  props={{
                    ref: params.ref,
                    inputRef: params.inputRef,
                    inputProps: params.inputProps,
                    className: TextFieldStyle
                  }}
                  endIcon={params?.InputProps?.endAdornment}
                  onChangeText={() => {}}
                />
              ) : (
                <TextField
                  {...params}
                  size="small"
                  style={{ margin: `0 0 20px 0` }}
                  className={TextFieldStyle}
                />
              )}
            </>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
