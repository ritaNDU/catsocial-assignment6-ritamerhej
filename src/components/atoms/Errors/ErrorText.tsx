import {Text} from 'react-native';
import React from 'react';
import styles from './ErrorText.style';

type Props = {
  error: string;
};

const ErrorText = ({error}: Props) => {
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorText;
