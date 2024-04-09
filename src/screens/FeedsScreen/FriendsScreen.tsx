import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import useManageUsersFetching from '../../hooks/useManageUsersFetching';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import {USERS_LIMIT} from '../../service/api.data';
import PersonCardsList from '../../components/organisms/PersonCardsList';
import styles from '../commonStyles';

const FriendsScreen = () => {
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

  const friends = allUsers.filter(person =>
    signedInUser.friendsIds.includes(person.id),
  );

  return (
    <SafeAreaView style={styles.container}>
      {friends.length > 0 ? (
        <PersonCardsList
          peopleList={friends}
          isRefreshing={refresh}
          onRefresh={handleRefresh}
          handleLoadMore={handleLoadMore(pageToFetch)}
          isLoading={isLoading}
          endReached={endReached}
        />
      ) : (
        <Text style={styles.title}>No Cat Parents to show.</Text>
      )}
    </SafeAreaView>
  );
};

export default FriendsScreen;
