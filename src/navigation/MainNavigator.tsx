import React, {useEffect, useState} from 'react';
import useManageSecureStorage from '../hooks/useManageSecureStorage';
import NativeStackNavigator from './NativeStackNavigation/NativeStackNavigator';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';
import useManageSingedInUser from '../hooks/useManageSignedInUser';
import Loading from '../components/templates/Loading';

const MainNavigator = () => {
  const {getStoredUserInfo} = useManageSecureStorage();
  const [token, setToken] = useState('');
  const {signedInUser, loadSignedInUser} = useManageSingedInUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      const userInfo = await getStoredUserInfo();
      if (signedInUser.token !== '') {
        setToken(signedInUser.token);
      } else if (userInfo && userInfo.token !== '' && userInfo.userId !== '') {
        loadSignedInUser(userInfo.userId);
        setToken(userInfo.token);
      } else {
        setToken('');
      }
      setIsLoading(false);
    }
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedInUser, token]);

  if (isLoading) {
    return <Loading />;
  }
  if (token === '') {
    return <NativeStackNavigator />;
  } else {
    return <DrawerNavigation />;
  }
};

export default MainNavigator;
