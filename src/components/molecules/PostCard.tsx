import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostsButton from '../atoms/Buttons/PostsButton';
import {getUserFromApi} from '../../service/usersApi';
import {Comment} from '../../data/data.types';

type Props = {
  userId: string;
  postText: string;
  imageUri: string;
  publicationDate: string;
  likes: string;
  comments: Comment[];
  handleLike: () => void;
};
const PostCard = ({
  userId,
  postText = '',
  imageUri = '',
  likes,
  comments,
  handleLike,
  publicationDate,
}: Props) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      const user = await getUserFromApi(userId);
      setName(user.name);
    };
    getUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{marginBottom: 10}}>
      <Text>{name}</Text>
      <Text>{publicationDate}</Text>
      {postText !== '' && <Text>{postText}</Text>}
      {imageUri !== '' && (
        <Image source={{uri: imageUri}} style={{width: '100%', height: 500}} />
      )}
      <View style={{flexDirection: 'row', gap: 10}}>
        <PostsButton name="Like" stats={likes} onPress={handleLike} />
      </View>
    </View>
  );
};

export default PostCard;
