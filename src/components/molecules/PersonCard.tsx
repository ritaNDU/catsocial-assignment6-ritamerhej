import {View, Pressable, Text} from 'react-native';
import React from 'react';
import AddFriendsButton from '../atoms/Buttons/AddFriendsButton';

type Props = {
  name: string;
  isFriend: boolean;
  manageFriend: () => void;
  onPress: () => void;
};
const PersonCard = ({name, isFriend, manageFriend, onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{name}</Text>
      </Pressable>
      <AddFriendsButton onPress={manageFriend} isFriend={isFriend} />
    </View>
  );
};

export default PersonCard;
