import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NativeStackNavigatorPropsList = {
  SignedIn: undefined;
};

export type NativeStackNavigatorNavigationProps =
  NativeStackNavigationProp<NativeStackNavigatorPropsList>;
export type NativeStackNavigatorRouteProps =
  RouteProp<NativeStackNavigatorPropsList>;
