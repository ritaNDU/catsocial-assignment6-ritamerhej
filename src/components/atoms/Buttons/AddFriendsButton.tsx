import {Text, Pressable, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  isFriend: boolean;
  onPress: () => void;
  styleProp?: StyleProp<ViewStyle>;
};
const AddFriendsButton = ({isFriend, onPress, styleProp}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.addFriendsButton, styleProp]}>
      <Text style={styles.addFriendsButtonText}>
        {isFriend ? 'Remove' : 'Follow'}
      </Text>
    </Pressable>
  );
};

export default AddFriendsButton;
