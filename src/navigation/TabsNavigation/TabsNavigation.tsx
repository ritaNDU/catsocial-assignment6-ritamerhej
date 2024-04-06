import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FriendsScreen from '../../screens/FeedsScreen/FriendsScreen';
import FeedScreen from '../../screens/FeedsScreen/FeedScreen';

const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Feed" component={FeedScreen} />
      <Tabs.Screen
        name="Friends"
        component={FriendsScreen}
        options={{title: 'Friends'}}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
