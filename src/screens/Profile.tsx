import {View, Text, Alert} from 'react-native';
import React from 'react';
import AddNewPostModal from '../components/templates/Modals/AddNewPostModal';
import useManageModal from '../hooks/useManageModal';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';
import PostCardsList from '../components/organisms/PostCardsList';
import useManagePostsFetching from '../hooks/useManagePostsFetching';
import useManageSingedInUser from '../hooks/useManageSignedInUser';
import {POSTS_LIMIT} from '../service/api.data';
import useManageUser from '../hooks/useManageUser';

const Profile = () => {
  const {closeModal, openModal, visible} = useManageModal();
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostsFetching();
  const {signUserOut} = useManageUser();
  const {signedInUser, removeSignedInUser} = useManageSingedInUser();
  const userPosts = allPosts.filter(post => post.userId === signedInUser.id);

  const pageToFetch = JSON.stringify(
    allPosts.length >= POSTS_LIMIT ? allPosts.length / POSTS_LIMIT + 1 : 1,
  );

  const handleSignout = async () => {
    await signUserOut(signedInUser);
    await removeSignedInUser();

    Alert.alert('Signed out');
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Text>{signedInUser.name}</Text>
        <NavigationButton name="Signout" onPress={handleSignout} />
      </View>
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
