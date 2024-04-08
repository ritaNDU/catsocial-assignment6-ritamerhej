import {Image, View} from 'react-native';
import React from 'react';
import styles from './Avatar.styles';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/illustrations/catAvatar.png')}
      />
    </View>
  );
};

export default Avatar;
