import {Image, View} from 'react-native';
import React from 'react';

const Avatar = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 25, height: 25}}
        source={require('../../../assets/illustrations/catAvatar.png')}
      />
    </View>
  );
};

export default Avatar;
