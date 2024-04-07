import {Text, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: () => void;
  isLoading?: boolean;
};
const NavigationButton = ({name, onPress, isLoading}: Props) => {
  return (
    <Pressable onPress={onPress} style={{flexDirection: 'row', gap: 4}}>
      <Text>{name}</Text>
      {isLoading && <ActivityIndicator size={'small'} />}
    </Pressable>
  );
};

export default NavigationButton;
