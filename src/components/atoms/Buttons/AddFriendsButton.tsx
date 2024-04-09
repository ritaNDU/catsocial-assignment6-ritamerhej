import {Text, Pressable, StyleProp, ViewStyle, Dimensions} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  isFriend: boolean;
  onPress: () => void;
  styleProp?: StyleProp<ViewStyle>;
};

const {width} = Dimensions.get('screen');
const initialWidth = (width * 70) / 100;
const AddFriendsButton = ({isFriend, onPress, styleProp}: Props) => {
  const buttonWidth = useSharedValue(initialWidth);

  const animatedChanged = useAnimatedStyle(() => ({
    width: buttonWidth.value,
  }));

  function handlePress() {
    buttonWidth.value = withSpring(buttonWidth.value * 0.45);
    onPress();
  }
  return (
    <Animated.View style={animatedChanged}>
      <Pressable
        onPress={handlePress}
        style={[styles.addFriendsButton, styleProp]}>
        <Text style={styles.addFriendsButtonText}>
          {isFriend ? 'Remove' : 'Follow'}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default AddFriendsButton;
