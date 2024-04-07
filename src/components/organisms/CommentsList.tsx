import {FlatList} from 'react-native';
import React from 'react';
import {Comment} from '../../data/data.types';
import CommentCard from '../molecules/CommentCard';

type Props = {
  comments: Comment[];
};
const CommentsList = ({comments}: Props) => {
  const renderItem = ({item}: {item: Comment}) => {
    return <CommentCard userId={item.userId} commentText={item.text} />;
  };

  return <FlatList data={comments} renderItem={renderItem} />;
};

export default CommentsList;
