import {User} from '../data/data.types';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {signIn, signOut} from '../store/signedInUserSlice';

const useManageSignedInUser = () => {
  const signedInUser = useAppSelector(state => state.signedInUser.value);
  const dispatch = useAppDispatch();

  const addSignedInUser = (user: User) => {
    dispatch(signIn(user));
  };
  const removeSignedInUser = () => {
    dispatch(signOut());
  };

  return {signedInUser, addSignedInUser, removeSignedInUser};
};

export default useManageSignedInUser;
