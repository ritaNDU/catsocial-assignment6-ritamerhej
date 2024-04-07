import {View, Text} from 'react-native';
import React, {ChangeEvent} from 'react';
import ModalTemplate from './ModalTemplate';
import FormInput from '../../atoms/Inputs/FormInput';
import NavigationButton from '../../atoms/Buttons/NavigationButton';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
};

const AddNewPostModal = ({handleClose, isVisible}: Props) => {
  // const handleChangeText = (text: string | ChangeEvent) => {};

  return (
    <ModalTemplate handleClose={handleClose} isVisible={isVisible}>
      <View>
        <Text>Comments</Text>
        {/* <NavigationButton name="Create Post" onPress={addPost} />
        <FormInput
          placeholder="Say something..."
          handleChangeText={handleChangeText}
          value={post.text} */}
        {/* /> */}
      </View>
    </ModalTemplate>
  );
};

export default AddNewPostModal;
