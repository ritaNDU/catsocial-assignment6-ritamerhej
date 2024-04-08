import {SafeAreaView} from 'react-native';
import React from 'react';
import PersonCardsList from '../components/organisms/PersonCardsList';
import useManageUsersFetching from '../hooks/useManageUsersFetching';
import {USERS_LIMIT} from '../service/api.data';
import useManageSingedInUser from '../hooks/useManageSignedInUser';
import styles from './commonStyles';

const OtherUsersScreen = () => {
  const {
    allUsers,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManageUsersFetching();
  const {signedInUser} = useManageSingedInUser();

  const pageToFetch = JSON.stringify(
    allUsers.length >= USERS_LIMIT ? allUsers.length / USERS_LIMIT + 1 : 1,
  );
  const nonFriends = allUsers.filter(
    person =>
      !signedInUser.friendsIds.includes(person.id) &&
      person.id !== signedInUser.id,
  );

  return (
    <SafeAreaView style={styles.container}>
      <PersonCardsList
        peopleList={nonFriends}
        isRefreshing={refresh}
        onRefresh={handleRefresh}
        handleLoadMore={handleLoadMore(pageToFetch)}
        isLoading={isLoading}
        endReached={endReached}
      />
    </SafeAreaView>
  );
};

export default OtherUsersScreen;
