import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FriendsScreen from '../../screens/FeedsScreen/FriendsScreen';
import FeedScreen from '../../screens/FeedsScreen/FeedScreen';
import {Image, ImageSourcePropType} from 'react-native';
import styles from './TabsNavigation.style';
import theme from '../../style/theme';

const Tabs = createBottomTabNavigator();
const addLogo = (image: ImageSourcePropType) => () => {
  return <Image style={styles.icons} source={image} />;
};
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarActiveBackgroundColor: theme.colors.activeTabBackground,
        tabBarInactiveTintColor: '#bcbcbc',
        tabBarLabelStyle: {fontWeight: '900'},
      }}>
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: addLogo(require('../../assets/icons/feed.png')),
          title: 'Feed',
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
