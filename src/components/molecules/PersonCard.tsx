import {View, Pressable, Text} from 'react-native';
import React from 'react';
import AddFriendsButton from '../atoms/Buttons/AddFriendsButton';
import Avatar from '../atoms/Avatar/Avatar';

type Props = {
  name: string;
  isFriend: boolean;
  manageFriend: () => void;
  onPress: () => void;
};
const PersonCard = ({name, isFriend, manageFriend, onPress}: Props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Avatar />
      <View>
        <Pressable onPress={onPress}>
          <Text>{name}</Text>
        </Pressable>
        <AddFriendsButton onPress={manageFriend} isFriend={isFriend} />
      </View>
    </View>
  );
};

export default PersonCard;
