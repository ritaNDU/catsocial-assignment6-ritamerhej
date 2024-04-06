import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigatorPropsList} from './NativeStackNavigator.types';
import SignedInScreen from '../../components/molecules/SignedInScreen';

const Stack = createNativeStackNavigator<NativeStackNavigatorPropsList>();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignedIn" component={SignedInScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;
