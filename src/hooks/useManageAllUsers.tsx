import {User} from '../data/data.types';
import {add, store} from '../store/allUsersSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const useManageAllUsers = () => {
  const allUsers = useAppSelector(state => state.allUsers.value);
  const dispatch = useAppDispatch();

  const addUsers = (users: User[]) => {
    dispatch(add(users));
  };
  const storeUsers = (users: User[]) => {
    dispatch(store(users));
  };

  return {allUsers, addUsers, storeUsers};
};

export default useManageAllUsers;
