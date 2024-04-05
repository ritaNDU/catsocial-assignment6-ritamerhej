import {TextInput} from 'react-native';
import React from 'react';
import {Props} from './commonsProps';

type PasswordInputProps = Omit<Props, 'name'>;
const FormInput = ({
  placeholder,
  handleChange,
  handleBlur,
  value,
}: PasswordInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChange={handleChange('password')}
      onBlur={handleBlur('password')}
      value={value}
      secureTextEntry
    />
  );
};

export default FormInput;
