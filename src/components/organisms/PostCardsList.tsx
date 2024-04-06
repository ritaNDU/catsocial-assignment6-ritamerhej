import {Text, FlatList} from 'react-native';
import React from 'react';
import {Post} from '../../data/data.types';
import LoadMoreButton from '../atoms/Buttons/LoadMoreButton';
import PostCard from '../molecules/PostCard';

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
    const likes = JSON.stringify(item.likes);
    return (
      <PostCard
        userId={item.userId}
        postText={item.text}
        imageUri={item.imageUri}
        publicationDate={item.publicationDate}
        likes={likes}
        comments={item.comments}
        handleLike={() => console.log('liked')}
        handleOpenCommentsModal={() => console.log('Commented')}
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
    return <Text>No cats to show!</Text>;
  }
};

export default PostCardsList;
