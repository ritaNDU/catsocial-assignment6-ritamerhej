import {View, Text} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {getUserFromApi} from '../../service/usersApi';
import styles from './molecules.styles';
type Props = {
  userId: string;
  commentText: string;
};
const CommentCard = ({userId, commentText}: Props) => {
  const [name, setName] = useState('unknown user');

  useEffect(() => {
    const getName = async () => {
      const user = await getUserFromApi(userId);
      if (user) {
        setName(user.name);
      }
    };
    getName();
  }, [userId]);
  return (
    <View style={styles.commentsContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.commentBody}>{commentText}</Text>
    </View>
  );
};

export default memo(CommentCard);
