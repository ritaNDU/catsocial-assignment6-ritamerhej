import {Text, FlatList} from 'react-native';
import React from 'react';
import {Post} from '../../data/data.types';
import LoadMoreButton from '../atoms/Buttons/LoadMoreButton';
import PostCard from '../molecules/PostCard';
import styles from '../templates/AuthenticationSreensTemplate.style';

type Props = {
  postsList: Post[];
  isRefreshing?: boolean;
  onRefresh?: () => void;
  handleLoadMore: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const PostCardsList = ({
  postsList,
  isRefreshing,
  onRefresh,
  handleLoadMore,
  isLoading,
  endReached,
}: Props) => {
  const renderItem = ({item}: {item: Post}) => {
    return (
      <PostCard
        id={item.id}
        userId={item.userId}
        text={item.text}
        imageUri={item.imageUri}
        comments={item.comments}
        publicationDate={item.publicationDate}
      />
    );
  };
  if (postsList.length > 0) {
    return (
      <FlatList
        data={postsList}
        renderItem={renderItem}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        ListFooterComponent={
          <LoadMoreButton
            onPress={handleLoadMore}
            isLoading={isLoading}
            endReached={endReached}
          />
        }
      />
    );
  } else {
    return <Text style={styles.title}>No Meows to show!</Text>;
  }
};

export default PostCardsList;
