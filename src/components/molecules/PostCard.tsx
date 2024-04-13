import {View, Text, Image} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import PostsButton from '../atoms/Buttons/PostsButton';
import {getUserFromApi} from '../../service/usersApi';
import {Post} from '../../data/data.types';
import CommentsModal from '../templates/Modals/CommentsModal';
import useManageModal from '../../hooks/useManageModal';
import Avatar from '../atoms/Avatar/Avatar';
import styles from './molecules.styles';

type Props = Post;
const PostCard = ({
  id,
  userId,
  text,
  imageUri,
  comments,
  publicationDate,
}: Props) => {
  const [name, setName] = useState('');
  const {visible, openModal, closeModal} = useManageModal();

  useEffect(() => {
    const getUserName = async () => {
      const user = await getUserFromApi(userId);
      setName(user.name);
    };
    getUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const commentsStats = JSON.stringify(comments.length);

  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Avatar />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{publicationDate}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {text !== '' ? <Text style={styles.text}>{text}</Text> : <></>}
        {imageUri !== '' ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Image
            source={require('../../assets/illustrations/catAvatar.png')}
            style={styles.placeholderImage}
            resizeMode="center"
          />
        )}
        <PostsButton
          name="Comments"
          stats={commentsStats}
          onPress={openModal}
        />
      </View>

      <CommentsModal
        isVisible={visible}
        handleClose={closeModal}
        postId={id}
        postComments={comments}
      />
    </View>
  );
};

export default memo(PostCard);
