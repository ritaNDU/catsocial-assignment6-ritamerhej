import {SafeAreaView} from 'react-native';
import React from 'react';
import PersonCardsList from '../components/organisms/PersonCardsList';
import useManageUsersFetching from '../hooks/useManageUsersFetching';

const OtherUsersScreen = () => {
  const {
    allUsers,
    // endReached,
    // isLoading,
    // refresh,
    // handleLoadMore,
    // handleRefresh,
  } = useManageUsersFetching();

  // const pageToFetch =
  //   allUsers.length >= 3 ? allUsers.length / USERS_LIMIT + 1 : 1;

  return (
    <SafeAreaView>
      <PersonCardsList peopleList={allUsers} />
      {/* <LoadMoreButton
        onPress={handleLoadMore}
        isLoading={isLoading}
        endReached={endReached}
      /> */}
    </SafeAreaView>
  );
};

export default OtherUsersScreen;
