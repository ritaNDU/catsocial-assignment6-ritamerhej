import {View, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/logo.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <ActivityIndicator size={30} color="#000" />
    </View>
  );
};

export default Loading;
