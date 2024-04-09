import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';

import AddNewPostModal from '../components/templates/Modals/AddNewPostModal';
import useManageModal from '../hooks/useManageModal';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';
import PostCardsList from '../components/organisms/PostCardsList';

import styles from './commonStyles';

import useManagePostsFetching from '../hooks/useManagePostsFetching';
import useManageSingedInUser from '../hooks/useManageSignedInUser';
import useManageUser from '../hooks/useManageUser';
import {useNavigation} from '@react-navigation/native';

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
  } = useManagePostsFetching();
  const {signUserOut} = useManageUser();
  const {signedInUser, removeSignedInUser} = useManageSingedInUser();
  const userPosts = allPosts.filter(post => post.userId === signedInUser.id);
  const nav = useNavigation();

  const pageToFetch = JSON.stringify(
    allPosts.length >= POSTS_LIMIT ? allPosts.length / POSTS_LIMIT + 1 : 1,
  );

  const handleSignout = async () => {
    await signUserOut(signedInUser);
    await removeSignedInUser();

    Alert.alert('Signed out');
  };

  const setButtonToHeader = () => (
    <NavigationButton
      name="Sign Out"
      onPress={handleSignout}
      styleProp={styles.signout}
    />
  );

  useEffect(() => {
    nav.setOptions({
      headerRight: setButtonToHeader,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <NavigationButton name="Add new Meow" onPress={openModal} />
      <Text style={styles.title}>Your Meows</Text>
      <PostCardsList
        postsList={userPosts}
        handleLoadMore={handleLoadMore(pageToFetch)}
        isLoading={isLoading}
        endReached={endReached}
        isRefreshing={refresh}
        onRefresh={handleRefresh}
      />
      <AddNewPostModal isVisible={visible} handleClose={closeModal} />
    </View>
  );
};

export default Profile;
