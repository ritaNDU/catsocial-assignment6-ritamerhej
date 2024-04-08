import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
} from 'react-native';
import React from 'react';
import styles from './AuthenticationSreensTemplate.style';

type Props = {
  children: React.JSX.Element;
  name: string;
};
const AuthenticationScreensTemplate = ({children, name}: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/illustrations/catPawsBackground.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <KeyboardAvoidingView
        style={styles.form}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>{name}</Text>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default AuthenticationScreensTemplate;
