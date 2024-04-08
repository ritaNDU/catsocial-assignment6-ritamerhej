import React from 'react';
import SigninForm from '../../components/molecules/SigninForm';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigatorNavigationProps} from '../../navigation/NativeStackNavigation/NativeStackNavigator.types';
import AuthenticationScreensTemplate from '../../components/templates/AuthenticationScreensTemplate';

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <AuthenticationScreensTemplate name="Sign In">
      <>
        <SigninForm />
        <NavigationButton name="Create account" onPress={goToSignup} />
      </>
    </AuthenticationScreensTemplate>
  );
};

export default SignInScreen;
