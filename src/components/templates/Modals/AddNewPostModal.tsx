import {View, Text} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';
import AddPostButtonGroup from '../../molecules/AddPostButtonGroup';
import FormInput from '../../atoms/Inputs/FormInput';

type Props = {
  textValue: string;
  isVisible: boolean;
  handleClose: () => void;
  handleTakeAPhoto: () => void;
  handlePickAnImage: () => void;
  handleChangeText: () => void;
};

const AddNewPostModal = ({
  handleClose,
  isVisible,
  handleTakeAPhoto,
  handlePickAnImage,
  textValue,
  handleChangeText,
}: Props) => {
  return (
    <ModalTemplate handleClose={handleClose} isVisible={isVisible}>
      <View>
        <Text>Add a new Meow</Text>
        <FormInput
          placeholder="Say something..."
          handleChangeText={handleChangeText}
          value={textValue}
        />
        <AddPostButtonGroup
          handleTakeAPhoto={handleTakeAPhoto}
          handlePickAnImage={handlePickAnImage}
        />
      </View>
    </ModalTemplate>
  );
};

export default AddNewPostModal;
