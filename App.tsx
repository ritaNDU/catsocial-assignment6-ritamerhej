import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['cutiekat://'],
  config: {
    screens: {
      OtherUserProfile: 'profile/:userId',
    },
  },
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
