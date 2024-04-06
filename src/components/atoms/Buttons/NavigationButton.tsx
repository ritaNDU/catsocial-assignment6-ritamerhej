import {Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: () => void;
};
const NavigationButton = ({name, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default NavigationButton;
