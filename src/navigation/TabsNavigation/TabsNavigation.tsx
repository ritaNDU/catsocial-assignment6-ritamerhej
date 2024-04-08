import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FriendsScreen from '../../screens/FeedsScreen/FriendsScreen';
import FeedScreen from '../../screens/FeedsScreen/FeedScreen';
import {Image, ImageSourcePropType} from 'react-native';

const Tabs = createBottomTabNavigator();
const addLogo = (image: ImageSourcePropType) => () => {
  return <Image style={{width: 27, height: 27}} source={image} />;
};
const TabsNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: addLogo(require('../../assets/icons/feed.png')),
        }}
      />
      <Tabs.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: 'Friends',
          tabBarIcon: addLogo(require('../../assets/icons/friends.png')),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
