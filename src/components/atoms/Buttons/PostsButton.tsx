import {Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  stats: string;
  onPress: () => void;
};
const LikeButton = ({name, onPress, stats}: Props) => {
  //TODO: Animate
  return (
    <Pressable onPress={onPress} style={{flexDirection: 'row', gap: 2}}>
      <Text>{stats}</Text>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default LikeButton;
