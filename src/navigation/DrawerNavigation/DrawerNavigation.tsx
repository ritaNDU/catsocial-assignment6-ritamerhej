import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedNavigationScreen from '../../screens/FeedsScreen/FeedNavigationScreen';
import OtherUsersScreen from '../../screens/OtherUsersScreen';
import Profile from '../../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FeedsNavigation"
        component={FeedNavigationScreen}
        options={{title: 'Feeds'}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="OtherUsersScreen"
        component={OtherUsersScreen}
        options={{title: 'Other Cat Parents'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
