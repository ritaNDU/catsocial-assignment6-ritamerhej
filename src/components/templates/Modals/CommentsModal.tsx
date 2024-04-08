import {View, Text} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';
import AddCommentForm from '../../organisms/AddCommentForm';
import {Post} from '../../../data/data.types';
import CommentsList from '../../organisms/CommentsList';
import styles from './styles/CommentsModal.styles';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  post: Post;
};

const CommentsModal = ({handleClose, isVisible, post}: Props) => {
  return (
    <ModalTemplate handleClose={handleClose} isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Comments</Text>
        <CommentsList comments={post.comments} />
        <AddCommentForm post={post} />
      </View>
    </ModalTemplate>
  );
};

export default CommentsModal;
