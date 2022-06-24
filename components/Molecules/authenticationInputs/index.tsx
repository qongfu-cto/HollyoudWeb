import React, { KeyboardEvent, useState } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { Branding } from 'utilities/branding';
import FormWrapper from '../../Atoms/formWrapper';
import { InputFieldOutLined } from '../../Atoms/inputField';
import Text from '../../Atoms/text';
import { useAuthenticationInputsStylesEN } from './styleEN';

interface AuthenticationInputsProps {
  error?: boolean;
  errorMessage?: string;
  successMessage?: string;
  label?: string;
  placeholder: string;
  endIcon?: ReactElement | ReactElement[];
  startIcon?: ReactElement | ReactElement[];
  onChangeText: (text: string) => void;
  onSubmit: (e: string) => void;
  inputType?: 'email' | 'password' | 'text';
  size?: 'small';
  textAlign?: 'start' | 'end';
  height?: number | string;
  inputValue?: string;
  defaultValue?: string;
  messageCenter?: boolean;
  labelColor?: boolean;
  children?: React.ReactElement;
  width?: number | string;
  rows?: number;
  multiline?: boolean;
  email?: boolean;
}

const AuthenticationInputs = ({
  error,
  errorMessage,
  label,
  placeholder,
  endIcon,
  onSubmit,
  inputType,
  onChangeText,
  size,
  startIcon,
  height,
  inputValue,
  defaultValue,
  successMessage,
  messageCenter,
  textAlign,
  labelColor,
  children,
  width,
  rows,
  multiline,
  email
}: AuthenticationInputsProps) => {
  const styles = useAuthenticationInputsStylesEN({ height, textAlign, width });
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <FormWrapper
        error={error}
        errorMessage={errorMessage}
        successMessage={successMessage}
        messageCenter={messageCenter ?? false}
      >
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
          padding={size === 'small' ? 10 : 15}
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
            value: email ? value : inputValue,
            size: size ?? 'medium',
            inputProps: { className: styles.input },
            type: inputType ?? 'Text',
            onBlur: e => onSubmit(e.target.value),
            onChange: e => {
              onChangeText(e.target.value);
              if (email) {
                setValue(e.target.value.toLowerCase());
              } else {
                setValue(e.target.value);
              }
            },
            onKeyPress: (e: any) => {
              if (e.key === 'Enter') {
                onSubmit(e.target.value);
              }
            }
          }}
        />
      </FormWrapper>
    </div>
  );
};

export default AuthenticationInputs;
