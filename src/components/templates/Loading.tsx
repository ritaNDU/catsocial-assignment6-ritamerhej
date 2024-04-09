import {View, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loading.styles';
import theme from '../../style/theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/logo.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <ActivityIndicator size={30} color={theme.colors.primary} />
    </View>
  );
};

export default Loading;
