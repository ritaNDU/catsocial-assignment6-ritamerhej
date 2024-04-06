import React, {useEffect, useState} from 'react';
import useManageSecureStorage from '../hooks/useManageSecureStorage';
import NativeStackNavigator from './NativeStackNavigation/NativeStackNavigator';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';

const MainNavigator = () => {
  const {getStoredUserInfo} = useManageSecureStorage();
  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const userInfo = await getStoredUserInfo();
      console.log(userInfo);
      if (userInfo && userInfo.token !== '' && userInfo.userId !== '') {
        setToken(userInfo.token);
      }
    }
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (token === '') {
    return <NativeStackNavigator />;
  } else {
    return <DrawerNavigation />;
  }
};

export default MainNavigator;
