import {
  Text,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import theme from '../../../style/theme';

type Props = {
  name: string;
  onPress: () => void;
  isLoading?: boolean;
  styleProp?: StyleProp<ViewStyle>;
};
const NavigationButton = ({name, onPress, isLoading, styleProp}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.navigation, styleProp]}>
      <Text style={styles.navigationText}>{name}</Text>
      {isLoading && (
        <ActivityIndicator size={'small'} color={theme.colors.accentColor} />
      )}
    </Pressable>
  );
};

export default NavigationButton;
