import {View} from 'react-native';
import React from 'react';
import PostCardsList from '../../components/organisms/PostCardsList';
import {POSTS_LIMIT} from '../../service/api.data';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import useManagePostssFetching from '../../hooks/useManagePostssFetching';

const FeedScreen = () => {
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostssFetching();
  const {signedInUser} = useManageSingedInUser();
  const friendsPosts = allPosts.filter(post => {
    return signedInUser.friendsIds.includes(post.userId);
  });
  const pageToFetch = JSON.stringify(
    friendsPosts.length >= POSTS_LIMIT ? allPosts.length / POSTS_LIMIT + 1 : 1,
  );

  return (
    <View style={{flex: 1}}>
      <PostCardsList
        postsList={friendsPosts}
        handleLoadMore={handleLoadMore(pageToFetch)}
        isLoading={isLoading}
        endReached={endReached}
        isRefreshing={refresh}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default FeedScreen;
