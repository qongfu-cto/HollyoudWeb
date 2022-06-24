import { OutlinedInputProps } from '@mui/material';
import React, { KeyboardEvent, useState } from 'react';
import { ReactElement, ReactNode } from 'react-markdown/lib/react-markdown';
import { Branding } from 'utilities/branding';
import FormWrapper from '../../Atoms/formWrapper';
import { InputFieldOutLined } from '../../Atoms/inputField';
import Text from '../../Atoms/text';
import { useOutLinedInputStylesEN } from './styleEN';

interface OutLinedInputProps {
  label?: string | number | ReactNode;
  placeholder?: string;
  endIcon?: ReactElement | ReactElement[] | ReactNode;
  startIcon?: ReactElement | ReactElement[];
  onChangeText: (text: string) => void;
  disabled?: boolean;
  inputType?: 'email' | 'password' | 'text';
  size?: 'small';
  textAlign?: 'start' | 'end' | 'center';
  height?: number | string;
  inputValue?: string;
  defaultValue?: string;
  labelColor?: boolean;
  width?: number | string;
  rows?: number;
  multiline?: boolean;
  padding?: number | string;
  props?: OutlinedInputProps;
  flexDir?: any;
  parserData?: any;
}

const OutLinedInput = ({
  label,
  placeholder,
  endIcon,
  disabled,
  inputType,
  onChangeText,
  size,
  startIcon,
  height,
  inputValue,
  defaultValue,
  textAlign,
  labelColor,
  width,
  rows,
  multiline,
  padding,
  props,
  flexDir,
  parserData
}: OutLinedInputProps) => {
  const styles = useOutLinedInputStylesEN({ height, textAlign, width });
  const [value, setValue] = useState('');

  return (
    <div className={styles.container} style={{
      position: 'inherit',
      // width: '100%',
      display: 'flex',
      flexDirection: flexDir ?? 'column',
      justifyContent: 'center',
    }}>
      <Text
        label={label}
        labelStyle={{
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 4,
          color: labelColor
            ? Branding.Colors.black[60]
            : Branding.Colors.primary.normal
        }}
      />
      <InputFieldOutLined
        padding={padding ?? 20}
        endIcon={endIcon}
        startIcon={startIcon}
        borderRadius={12}
        containerMargin={5}
        placeholder={placeholder}
        inputStyle={styles.input}
        rows={rows}
        outlinedInputProps={{
          multiline: multiline,
          defaultValue: defaultValue,
          value: inputValue,
          disabled: disabled,
          size: size ?? 'medium',
          inputProps: { className: styles.input },
          type: inputType ?? 'Text',
          onChange: e => {
            onChangeText(e.target.value), setValue(e.target.value);
          },
          ...props
        }}
      />
    </div>
  );
};

export default OutLinedInput;
