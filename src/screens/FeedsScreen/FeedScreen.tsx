import {View} from 'react-native';
import React, {useMemo} from 'react';
import PostCardsList from '../../components/organisms/PostCardsList';
import {POSTS_LIMIT} from '../../service/api.data';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import useManagePostsFetching from '../../hooks/useManagePostsFetching';
import styles from '../commonStyles';

const FeedScreen = () => {
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostsFetching();
  const {signedInUser} = useManageSingedInUser();
  const friendsPosts = useMemo(
    () =>
      allPosts.filter(post => {
        return signedInUser.friendsIds.includes(post.userId);
      }),
    [allPosts, signedInUser],
  );
  const pageToFetch = JSON.stringify(
    allPosts.length >= POSTS_LIMIT ? allPosts.length / POSTS_LIMIT + 1 : 1,
  );

  return (
    <View style={styles.container}>
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
