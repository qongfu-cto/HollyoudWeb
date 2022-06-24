import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Atoms/formWrapper';
import { InputFieldOutLined } from '../../Atoms/inputField';
import { usePhoneNumberInputFieldStylesEN } from './styleEN';
import NumericInput from '../../Atoms/numericInput';
import CountryCode from '../countryCode';
import { useSelector } from 'react-redux';

interface PhoneNumberInputFieldProps {
  error?: boolean;
  errorMessage?: string;
  placeholder: string;
  handlePhoneNumberChange: (e: string, countryCode: any) => void;
  onKeyboardTyping: () => void;
  value: string;
}

const PhoneNumberInputField = ({
  error,
  errorMessage,
  placeholder,
  handlePhoneNumberChange,
  onKeyboardTyping,
  value
}: PhoneNumberInputFieldProps) => {
  const styles = usePhoneNumberInputFieldStylesEN();
  const { app } = useSelector((state: any) => ({ ...state }));
  const { user } = useSelector((state: any) => ({ ...state }));
  const [phoneValue, setValue] = useState('');
  const [allCountries, setAllCountries] = useState(app.countries);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countryCode, setCountryCode] = useState('');
  const [countryId, setCountryId] = useState();

  useEffect(() => {
    if (user.geolocation.calling_code) {
      // country_name
      setSelectedCountryId(user.geolocation?.calling_code.substring(1));
    }
    if (user.geolocation.country_name) {
      // country_name
      for (const country of allCountries) {
        if (
          country.country.toLowerCase() ===
          user.geolocation?.country_name?.toLowerCase()
        ) {
          setSelectedCountry(country);
          setCountryCode(country.country_code);
          setCountryId(country._id.toString());
        }
      }
    }
  }, []);

  const test = (e: any) => {
    console.log('event ', e);
  };
  return (
    <div className={styles.container}>
      <FormWrapper error={error} errorMessage={errorMessage}>
        <InputFieldOutLined
          borderRadius={12}
          containerMargin={5}
          placeholder={placeholder}
          inputStyle={styles.input}
          outlinedInputProps={{
            value: value,
            startAdornment: (
              <CountryCode
                allCountries={allCountries}
                selectedCountry={selectedCountry}
                selectedCountryId={selectedCountryId}
                setAllCountries={setAllCountries}
                originalCountries={app.countries}
                countryId={countryId}
                setCountryCode={setCountryCode}
                setCountryId={setCountryId}
                setSelectedCountry={setSelectedCountry}
              />
            ),
            name: 'phone number',
            size: 'small',
            inputMode: 'numeric',
            inputComponent: NumericInput as any,
            onKeyDown: e => {
              if (e.key) {
                onKeyboardTyping();
              }
            },
            onBlur: e =>
              handlePhoneNumberChange(e.target.value, selectedCountry),
            onChange: e => setValue(e.target?.value),
            onKeyPress: (e: any) => {
              if (e.key === 'Enter') {
                handlePhoneNumberChange(e.target.value, selectedCountry);
              }
            }
          }}
        />
      </FormWrapper>
    </div>
  );
};

export default PhoneNumberInputField;
