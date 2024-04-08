import {Text, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  name: string;
  onPress: () => void;
  isLoading?: boolean;
};
const NavigationButton = ({name, onPress, isLoading}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.navigation}>
      <Text style={styles.navigationText}>{name}</Text>
      {isLoading && <ActivityIndicator size={'small'} />}
    </Pressable>
  );
};

export default NavigationButton;
