/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';

import store from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigator from './src/navigation/NativeStackNavigation/NativeStackNavigator';
import useManageSecureStorage from './src/hooks/useManageSecureStorage';
import {getUserFromApi} from './src/service/usersApi';
import SignedInScreen from './src/components/molecules/SignedInScreen';

function App(): React.JSX.Element {
  const {getStoredUserInfo} = useManageSecureStorage();
  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const userInfo = await getStoredUserInfo();
      console.log(userInfo);
      if (userInfo && userInfo.token !== '' && userInfo.userId !== '') {
        const user = await getUserFromApi(userInfo.userId);
        if (user.token === token) {
          setToken(user.token);
        }
      }
    }
    getToken();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {token === '' ? <NativeStackNavigator /> : <SignedInScreen />}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
