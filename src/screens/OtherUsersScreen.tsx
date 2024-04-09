import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import PersonCardsList from '../components/organisms/PersonCardsList';
import useManageUsersFetching from '../hooks/useManageUsersFetching';
import {USERS_LIMIT} from '../service/api.data';
import useManageSingedInUser from '../hooks/useManageSignedInUser';
import styles from './commonStyles';
import LoadMoreButton from '../components/atoms/Buttons/LoadMoreButton';

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
      {nonFriends.length > 0 ? (
        <PersonCardsList
          peopleList={nonFriends}
          isRefreshing={refresh}
          onRefresh={handleRefresh}
          handleLoadMore={handleLoadMore(pageToFetch)}
          isLoading={isLoading}
          endReached={endReached}
        />
      ) : (
        <>
          <Text style={styles.title}>No more cats to show.</Text>
          <LoadMoreButton
            onPress={handleRefresh}
            isLoading={isLoading}
            endReached={endReached}
            name="Refresh"
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default OtherUsersScreen;
