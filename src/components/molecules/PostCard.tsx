import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostsButton from '../atoms/Buttons/PostsButton';
import {getUserFromApi} from '../../service/usersApi';
import {Post} from '../../data/data.types';
import CommentsModal from '../templates/Modals/CommentsModal';
import useManageModal from '../../hooks/useManageModal';
import Avatar from '../atoms/Avatar/Avatar';

type Props = {
  post: Post;
};
const PostCard = ({post}: Props) => {
  const [name, setName] = useState('');
  const {visible, openModal, closeModal} = useManageModal();

  useEffect(() => {
    const getUserName = async () => {
      const user = await getUserFromApi(post.userId);
      setName(user.name);
    };
    getUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{marginBottom: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Avatar />
        <View>
          <Text>{name}</Text>
          <Text>{post.publicationDate}</Text>
        </View>
      </View>
      {post.text !== '' && <Text>{post.text}</Text>}
      {post.imageUri !== '' && (
        <Image
          source={{uri: post.imageUri}}
          style={{width: '100%', height: 500}}
        />
      )}
      <PostsButton
        name="Comments"
        stats={JSON.stringify(post.comments.length)}
        onPress={openModal}
      />
      <CommentsModal isVisible={visible} handleClose={closeModal} post={post} />
    </View>
  );
};

export default PostCard;
