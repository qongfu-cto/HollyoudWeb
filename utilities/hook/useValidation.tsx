import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { RequiredNumberSchema } from 'yup/lib/number';
import { RequiredStringSchema } from 'yup/lib/string';
import { RootState } from '../../redux/Reducer/root';

type errorType = {
  email: { state: boolean; message: string };
  password: { state: boolean; message: string };
  confirmPassword: { state: boolean; message: string };
  previousPassword: { state: boolean; message: string };
  phone: { state: boolean; message: string };
  otp: { state: boolean; message: string };
};

type validationType =
  | 'email'
  | 'password'
  | 'previousPassword'
  | 'phone'
  | 'otp'
  | 'confirmPassword';

interface ValidationContextProps {
  error: errorType;
  emailValidationSchema: RequiredStringSchema<string | undefined, any>;
  passwordValidationSchema: RequiredStringSchema<string | undefined, any>;
  phoneValidationSchema: RequiredStringSchema<string | undefined, any>;
  otpValidationSchema: RequiredNumberSchema<number | undefined, any>;
  setError: any;
  validation: (
    Schema:
      | RequiredStringSchema<string | undefined, any>
      | RequiredNumberSchema<number | undefined, any>,
    data: string | number,
    type: validationType
  ) => Promise<boolean | undefined>;
}

const ValidationContext = createContext<ValidationContextProps>(
  {} as ValidationContextProps
);

export const UseValidationProvider = ({ children }: any) => {
  const [error, setError] = useState<errorType>({
    email: { state: false, message: '' },
    password: { state: false, message: '' },
    confirmPassword: { state: false, message: '' },
    previousPassword: { state: false, message: '' },
    phone: { state: false, message: '' },
    otp: { state: false, message: '' }
  });

  const otp = useSelector((state: RootState) => state.auth.otp);

  const emailValidationSchema = yup
    .string()
    .label('Email')
    .email('* Email has wrong format')
    .required('* Please enter email');

  const passwordValidationSchema = yup
    .string()
    .required('* Password is required')
    .min(8, '* Minimum 8 characters required');

  const otpValidationSchema = yup
    .number()
    .required('*OTP required')
    .min(6, '* please enter 6 digital numbers')
    .oneOf([otp], 'otp dont match');

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const phoneValidationSchema = yup
    .string()
    .required('* Phone number is required')
    .matches(phoneRegExp, '* Phone number is not short');

  const validation = async (
    Schema:
      | RequiredStringSchema<string | undefined, any>
      | RequiredNumberSchema<number | undefined, any>,
    data: string | number,
    type: validationType
  ): Promise<boolean> => {
    try {
      const validate = await Schema.validate(data);

      setError({
        ...error,
        [type]: {
          state: false,
          ...[type]
        }
      });
      return !!validate;
    } catch (err) {
      console.log(err);

      setError({
        ...error,
        [type]: {
          state: true,
          message: (err as Error).message
        }
      });

      return !err;
    }
  };

  return (
    <ValidationContext.Provider
      value={{
        validation,
        emailValidationSchema,
        passwordValidationSchema,
        phoneValidationSchema,
        otpValidationSchema,
        error,
        setError
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export function useValidation() {
  const context = useContext(ValidationContext);

  return context;
}
