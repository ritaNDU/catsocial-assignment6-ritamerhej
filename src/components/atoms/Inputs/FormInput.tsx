import {TextInput} from 'react-native';
import React from 'react';
import {Props} from './commonsProps';

const FormInput = ({
  name,
  placeholder,
  handleChange,
  handleBlur,
  value,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChange={handleChange(name)}
      onBlur={handleBlur(name)}
      value={value}
    />
  );
};

export default FormInput;
