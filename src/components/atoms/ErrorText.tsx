import {Text} from 'react-native';
import React from 'react';

type Props = {
  error: string;
};

const ErrorText = ({error}: Props) => {
  return <Text>{error}</Text>;
};

export default ErrorText;
