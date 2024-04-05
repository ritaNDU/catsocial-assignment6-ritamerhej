/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Text>Hello</Text>
    </Provider>
  );
}

export default App;
