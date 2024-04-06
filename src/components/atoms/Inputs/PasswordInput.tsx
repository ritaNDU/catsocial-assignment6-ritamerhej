import {TextInput} from 'react-native';
import React from 'react';
import {Props} from './commonsProps';

const PasswordInputField = ({
  placeholder,
  handleChangeText,
  handleBlur,
  value,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={handleChangeText}
      onBlur={handleBlur}
      value={value}
      secureTextEntry
    />
  );
};

export default PasswordInputField;
