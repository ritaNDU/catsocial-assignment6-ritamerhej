import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  isFriend: boolean;
  onPress: () => void;
};
const AddFriendsButton = ({isFriend, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.addFriendsButton}>
      <Text style={styles.addFriendsButtonText}>
        {isFriend ? 'Remove' : 'Follow'}
      </Text>
    </Pressable>
  );
};

export default AddFriendsButton;
