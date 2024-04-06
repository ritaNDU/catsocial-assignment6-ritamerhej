import {User} from '../data/data.types';
import {modifyUserFromApi} from '../service/usersApi';

import useManageSecureStorage from './useManageSecureStorage';

const useManageUser = () => {
  const {storeUserInfo} = useManageSecureStorage();

  async function signUserIn(user: User) {
    await modifyUserFromApi(user);
    await storeUserInfo(user.id, user.token);
  }

  async function signUserOut(user: User) {
    await modifyUserFromApi({...user, token: ''});
    await storeUserInfo(user.id, '');
  }

  return {signUserIn, signUserOut};
};

export default useManageUser;
