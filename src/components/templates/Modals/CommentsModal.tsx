import {View, Text} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';
import AddCommentForm from '../../organisms/AddCommentForm';
import {Comment} from '../../../data/data.types';
import CommentsList from '../../organisms/CommentsList';
import styles from './styles/CommentsModal.styles';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  postId: string;
  postComments: Comment[];
};

const CommentsModal = ({
  handleClose,
  isVisible,
  postId,
  postComments,
}: Props) => {
  return (
    <ModalTemplate handleClose={handleClose} isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Comments</Text>
        <CommentsList comments={postComments} />
        <AddCommentForm postId={postId} />
      </View>
    </ModalTemplate>
  );
};

export default CommentsModal;
