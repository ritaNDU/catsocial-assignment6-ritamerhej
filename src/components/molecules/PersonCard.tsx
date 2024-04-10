import {View, Pressable, Text} from 'react-native';
import React, {memo} from 'react';
import AddFriendsButton from '../atoms/Buttons/AddFriendsButton';
import Avatar from '../atoms/Avatar/Avatar';
import styles from './molecules.styles';

type Props = {
  name: string;
  isFriend: boolean;
  manageFriend: () => void;
  onPress: () => void;
};
const PersonCard = ({name, isFriend, manageFriend, onPress}: Props) => {
  return (
    <View style={styles.personCardContainer}>
      <Avatar />
      <View style={styles.personCardContent}>
        <Pressable onPress={onPress}>
          <Text style={styles.name}>{name}</Text>
        </Pressable>
        <AddFriendsButton onPress={manageFriend} isFriend={isFriend} />
      </View>
    </View>
  );
};

export default memo(PersonCard);
