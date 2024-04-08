import {View, Text} from 'react-native';
import React from 'react';
import PostCardsList from '../components/organisms/PostCardsList';
import useManagePostsFetching from '../hooks/useManagePostsFetching';
import {POSTS_LIMIT} from '../service/api.data';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  DrawerNavigatorNavigationProps,
  DrawerNavigatorPropsList,
} from '../navigation/DrawerNavigation/DrawerNavigation.types';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';
import styles from './commonStyles';

const OtherUserProfile = () => {
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostsFetching();
  const {params} =
    useRoute<
      RouteProp<
        DrawerNavigatorPropsList,
        'OtherUsersScreen' | 'FeedsNavigation'
      >
    >();
  const navigation = useNavigation<DrawerNavigatorNavigationProps>();

  const {userId} = params ?? {userId: ''};

  if (userId === '') {
    return <Text>User not found</Text>;
  }

  const userPosts = allPosts.filter(post => post.userId === userId);
  const pageToFetch = JSON.stringify(
    allPosts.length >= POSTS_LIMIT ? allPosts.length / POSTS_LIMIT + 1 : 1,
  );
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <NavigationButton name="Go Back" onPress={handleGoBack} />
      <Text style={styles.title}>Cutie Kat Profile</Text>
      <PostCardsList
        postsList={userPosts}
        handleLoadMore={handleLoadMore(pageToFetch)}
        isLoading={isLoading}
        endReached={endReached}
        isRefreshing={refresh}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default OtherUserProfile;
