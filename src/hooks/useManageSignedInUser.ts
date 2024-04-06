import {getUserFromApi} from '../service/usersApi';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {loadUser, removeUser} from '../store/signedInUserSlice';

const useManageSingedInUser = () => {
  const signedInUser = useAppSelector(state => state.signedInUser.value);
  const dispatch = useAppDispatch();

  async function loadSignedInUser(userId: string) {
    const user = await getUserFromApi(userId);
    dispatch(loadUser(user));
  }

  async function removeSignedInUser() {
    dispatch(removeUser());
  }

  return {signedInUser, loadSignedInUser, removeSignedInUser};
};

export default useManageSingedInUser;
