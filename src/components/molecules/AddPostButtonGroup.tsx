import {View} from 'react-native';
import React from 'react';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import styles from './molecules.styles';

type Props = {
  handleTakeAPhoto: () => void;
  handlePickAnImage: () => void;
};
const AddPostButtonGroup = ({handleTakeAPhoto, handlePickAnImage}: Props) => {
  return (
    <View style={styles.buttonGroup}>
      <NavigationButton name="Take a Photo" onPress={handleTakeAPhoto} />
      <NavigationButton name="Pick an Image" onPress={handlePickAnImage} />
    </View>
  );
};

export default AddPostButtonGroup;
