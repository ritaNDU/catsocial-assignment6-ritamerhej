import React, {useEffect, useState} from 'react';
import useManageSecureStorage from '../hooks/useManageSecureStorage';
import NativeStackNavigator from './NativeStackNavigation/NativeStackNavigator';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';
import useManageSingedInUser from '../hooks/useManageSignedInUser';

const MainNavigator = () => {
  const {getStoredUserInfo} = useManageSecureStorage();
  const [token, setToken] = useState('');
  const {signedInUser, loadSignedInUser} = useManageSingedInUser();

  useEffect(() => {
    async function getToken() {
      const userInfo = await getStoredUserInfo();
      console.log('fired');
      if (signedInUser.token !== '') {
        setToken(signedInUser.token);
      } else if (userInfo && userInfo.token !== '' && userInfo.userId !== '') {
        loadSignedInUser(userInfo.userId);
        setToken(userInfo.token);
      } else {
        setToken('');
      }
    }
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedInUser, token]);

  if (token === '') {
    return <NativeStackNavigator />;
  } else {
    return <DrawerNavigation />;
  }
};

export default MainNavigator;
