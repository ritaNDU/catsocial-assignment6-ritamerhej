import {View, Text} from 'react-native';
import React from 'react';
import AddFriendsButton from '../atoms/Buttons/AddFriendsButton';

type Props = {
  name: string;
  isFriend: boolean;
  manageFriend: () => void;
};
const PersonCard = ({name, isFriend, manageFriend}: Props) => {
  return (
    <View>
      <Text>{name}</Text>
      <AddFriendsButton onPress={manageFriend} isFriend={isFriend} />
    </View>
  );
};

export default PersonCard;
