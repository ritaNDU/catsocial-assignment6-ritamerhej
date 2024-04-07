import {RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type DrawerNavigatorPropsList = {
  FeedsNavigation: undefined;
  Profile: undefined;
  OtherUsersScreen: undefined;
  OtherUserProfile: {userId: string};
};

export type DrawerNavigatorNavigationProps =
  DrawerNavigationProp<DrawerNavigatorPropsList>;
export type DrawerNavigatorRouteProps = RouteProp<DrawerNavigatorPropsList>;
