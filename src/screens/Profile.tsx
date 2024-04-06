import {View, Text} from 'react-native';
import React from 'react';
import AddNewPostModal from '../components/templates/Modals/AddNewPostModal';
import useManageModal from '../hooks/useManageModal';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';
import PostCardsList from '../components/organisms/PostCardsList';
import useManagePostssFetching from '../hooks/useManagePostssFetching';
import useManageSingedInUser from '../hooks/useManageSignedInUser';
import {POSTS_LIMIT} from '../service/api.data';

const Profile = () => {
  const {closeModal, openModal, visible} = useManageModal();
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostssFetching();
  const {signedInUser} = useManageSingedInUser();
  const userPosts = allPosts.filter(post => post.userId === signedInUser.id);

  const pageToFetch = JSON.stringify(
    userPosts.length >= POSTS_LIMIT ? allPosts.length / POSTS_LIMIT + 1 : 1,
  );

  return (
    <View style={{flex: 1}}>
      <Text>{signedInUser.name}</Text>
      <NavigationButton name="Add new Meow" onPress={openModal} />
      <AddNewPostModal isVisible={visible} handleClose={closeModal} />
      <Text>Your Meows</Text>
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

export default Profile;
