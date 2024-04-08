import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigatorPropsList} from './NativeStackNavigator.types';
import SignInScreen from '../../screens/AuthenticationScreens/SignInScreen';
import SignUpScreen from '../../screens/AuthenticationScreens/SignUpScreen';

const Stack = createNativeStackNavigator<NativeStackNavigatorPropsList>();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;
