import {TextInput} from 'react-native';
import React from 'react';
import {Props} from './commonsProps';

const FormInput = ({
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
    />
  );
};

export default FormInput;
