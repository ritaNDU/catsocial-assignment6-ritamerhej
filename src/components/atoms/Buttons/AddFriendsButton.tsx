import {Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  isFriend: boolean;
  onPress: () => void;
};
const AddFriendsButton = ({isFriend, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{isFriend ? 'Remove' : 'Follow'}</Text>
    </Pressable>
  );
};

export default AddFriendsButton;
