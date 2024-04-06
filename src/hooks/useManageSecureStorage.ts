import {StoredUser} from '../data/data.types';
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

export default function useManageSecureStorage() {
  async function storeUserInfo(userId: string, userToken: string) {
    const token = JSON.stringify(userToken);
    try {
      await RNSecureStorage.setItem('userId', userId, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
      await RNSecureStorage.setItem('token', token, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getStoredUserInfo() {
    const userId = await RNSecureStorage.getItem('userId');
    const token = await RNSecureStorage.getItem('token');
    const userInfo: StoredUser = {
      userId: userId ? JSON.parse(userId) : '',
      token: token ? JSON.parse(token) : '',
    };
    return userInfo;
  }

  async function removeUserInfo() {
    try {
      await RNSecureStorage.setItem('userId', '', {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
      await RNSecureStorage.setItem('token', '', {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return {storeUserInfo, getStoredUserInfo, removeUserInfo};
}
