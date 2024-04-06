import {SafeAreaView} from 'react-native';
import React from 'react';
import PersonCardsList from '../components/organisms/PersonCardsList';
import useManageUsersFetching from '../hooks/useManageUsersFetching';
import {USERS_LIMIT} from '../service/api.data';
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

  const pageToFetch = JSON.stringify(
    allUsers.length >= 3 ? allUsers.length / USERS_LIMIT + 1 : 1,
  );

  return (
    <SafeAreaView>
      <PersonCardsList
        peopleList={allUsers}
        isRefreshing={refresh}
        onRefresh={handleRefresh}
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
