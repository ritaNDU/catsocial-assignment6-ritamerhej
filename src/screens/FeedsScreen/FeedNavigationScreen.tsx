import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import FriendsScreen from './FriendsScreen';

const Tabs = createBottomTabNavigator();
const FeedNavigationScreen = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Feeds" component={FeedsScreen} />
      <Tabs.Screen
        name="Friends"
        component={FriendsScreen}
        options={{title: 'Cat Pawls'}}
      />
    </Tabs.Navigator>
  );
};

export default FeedNavigationScreen;
