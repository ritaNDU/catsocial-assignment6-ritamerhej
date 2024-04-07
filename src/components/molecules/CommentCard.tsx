import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUserFromApi} from '../../service/usersApi';
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
    <View style={{flexDirection: 'row'}}>
      <Text>{name}</Text>
      <Text>{commentText}</Text>
    </View>
  );
};

export default CommentCard;
