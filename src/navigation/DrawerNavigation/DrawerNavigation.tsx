import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import OtherUsersScreen from '../../screens/OtherUsersScreen';
import Profile from '../../screens/Profile';
import TabsNavigation from '../TabsNavigation/TabsNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FeedsNavigation"
        component={TabsNavigation}
        options={{title: 'Feed'}}
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
