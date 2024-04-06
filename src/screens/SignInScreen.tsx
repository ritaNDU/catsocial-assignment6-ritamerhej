import {View} from 'react-native';
import React from 'react';
import SigninForm from '../components/molecules/SigninForm';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigatorNavigationProps} from '../navigation/NativeStackNavigation/NativeStackNavigator.types';

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View>
      <SigninForm />
      <NavigationButton name="Create account" onPress={goToSignup} />
    </View>
  );
};

export default SignInScreen;
