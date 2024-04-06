import {useEffect, useState} from 'react';
import {getPaginatedUsersFromApi} from '../service/usersApi';
import useManageAllUsers from './useManageAllUsers';
import {USERS_LIMIT} from '../service/api.data';

const useManageUsersFetching = () => {
  const {allUsers, storeUsers, addUsers} = useManageAllUsers();
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleLoadMore = (page: string) => async () => {
    setIsLoading(true);
    const users = await getPaginatedUsersFromApi(page);
    setIsLoading(false);
    if (users.length === 0 || allUsers.length % USERS_LIMIT !== 0) {
      setEndReached(true);
      return;
    }
    addUsers(users);
  };

  async function handleInitialFetch() {
    setIsLoading(true);
    const users = await getPaginatedUsersFromApi('1');
    setIsLoading(false);
    storeUsers(users);
  }

  async function handleRefresh() {
    setRefresh(true);
    handleInitialFetch();
    setRefresh(false);
  }

  useEffect(() => {
    handleInitialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    allUsers,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  };
};

export default useManageUsersFetching;
