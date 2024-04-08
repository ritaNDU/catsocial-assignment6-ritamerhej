import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  name: string;
  stats: string;
  onPress: () => void;
};
const PostsButton = ({name, onPress, stats}: Props) => {
  //TODO: Animate
  return (
    <Pressable onPress={onPress} style={styles.post}>
      <Text style={styles.postText}>{name}</Text>
      <Text style={styles.postText}>{stats}</Text>
    </Pressable>
  );
};

export default PostsButton;
