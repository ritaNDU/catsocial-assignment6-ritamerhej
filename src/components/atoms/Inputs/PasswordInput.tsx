import {TextInput, View} from 'react-native';
import React from 'react';
import {Props} from './commonsProps';
import styles from './Input.styles';
import ErrorText from '../Errors/ErrorText';

const PasswordInputField = ({
  placeholder,
  handleChangeText,
  handleBlur,
  value,
  error,
  touched,
}: Props) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'lightgray'}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        value={value}
        secureTextEntry
        style={styles.input}
      />
      {error && touched ? <ErrorText error={error} /> : <></>}
    </View>
  );
};

export default PasswordInputField;
