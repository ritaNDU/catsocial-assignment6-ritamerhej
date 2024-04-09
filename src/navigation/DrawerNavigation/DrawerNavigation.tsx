import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import OtherUsersScreen from '../../screens/OtherUsersScreen';
import Profile from '../../screens/Profile';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import OtherUserProfile from '../../screens/OtherUserProfile';
import theme from '../../style/theme';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: {backgroundColor: '#fff'},
        drawerActiveBackgroundColor: theme.colors.activeTabBackground,
        drawerActiveTintColor: theme.colors.textColor,
        headerStyle: {
          backgroundColor: theme.colors.backgroundColor,
        },
        headerShadowVisible: false,
      }}>
      <Drawer.Screen
        name="FeedsNavigation"
        component={TabsNavigation}
        options={{
          title: 'Feed',
          headerTitle: '',
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="OtherUsersScreen"
        component={OtherUsersScreen}
        options={{title: 'Other Cat Parents'}}
      />
      <Drawer.Screen
        name="OtherUserProfile"
        component={OtherUserProfile}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
