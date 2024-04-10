import {View, Text, Image} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import PostsButton from '../atoms/Buttons/PostsButton';
import {getUserFromApi} from '../../service/usersApi';
import {Post} from '../../data/data.types';
import CommentsModal from '../templates/Modals/CommentsModal';
import useManageModal from '../../hooks/useManageModal';
import Avatar from '../atoms/Avatar/Avatar';
import styles from './molecules.styles';

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
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Avatar />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{post.publicationDate}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {post.text !== '' && <Text style={styles.text}>{post.text}</Text>}
        {post.imageUri !== '' && (
          <Image source={{uri: post.imageUri}} style={styles.image} />
        )}
        <PostsButton
          name="Comments"
          stats={JSON.stringify(post.comments.length)}
          onPress={openModal}
        />
      </View>

      <CommentsModal isVisible={visible} handleClose={closeModal} post={post} />
    </View>
  );
};

export default memo(PostCard);
