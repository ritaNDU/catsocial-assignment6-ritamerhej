import {SafeAreaView} from 'react-native';
import React from 'react';
import PersonCardsList from '../components/organisms/PersonCardsList';
import useManageUsersFetching from '../hooks/useManageUsersFetching';
import {USERS_LIMIT} from '../service/api.data';
import LoadMoreButton from '../components/atoms/Buttons/LoadMoreButton';
import useManageSingedInUser from '../hooks/useManageSignedInUser';

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
    person => !signedInUser.friendsIds.includes(person.id),
  );

  return (
    <SafeAreaView>
      <PersonCardsList
        peopleList={nonFriends}
        isRefreshing={refresh}
        onRefresh={handleRefresh}
        areFriends={false}
      />
      <LoadMoreButton
        onPress={handleLoadMore(pageToFetch)}
        isLoading={isLoading}
        endReached={endReached}
      />
    </SafeAreaView>
  );
};

export default OtherUsersScreen;
