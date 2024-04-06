import {View, Text, Alert, Linking} from 'react-native';
import React, {ChangeEvent} from 'react';
import ModalTemplate from './ModalTemplate';
import AddPostButtonGroup from '../../molecules/AddPostButtonGroup';
import FormInput from '../../atoms/Inputs/FormInput';
import CameraModal from './CameraModal/CameraModal';
import useManageModal from '../../../hooks/useManageModal';
import useManagePosts from '../../../hooks/useManagePostss';
import NavigationButton from '../../atoms/Buttons/NavigationButton';
import useManagePermissions from '../../../hooks/useManagePermissions';
import STORAGE_PERMISSIONS from '../../../data/storagePermissions';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
};

const AddNewPostModal = ({handleClose, isVisible}: Props) => {
  const {openModal, closeModal, visible} = useManageModal();
  const {post, addPost, addImageToPost, addTextToPost} = useManagePosts();

  const handleChangeText = (text: string | ChangeEvent) => {
    const textToAdd = text as string;
    addTextToPost(textToAdd);
  };

  return (
    <ModalTemplate handleClose={handleClose} isVisible={isVisible}>
      <View>
        <Text>Add a new Meow</Text>
        <NavigationButton name="Create Post" onPress={addPost} />
        <FormInput
          placeholder="Say something..."
          handleChangeText={handleChangeText}
          value={post.text}
        />

        <CameraModal
          handleClose={closeModal}
          isVisible={visible}
          handleAddImage={addImageToPost}
        />
      </View>
    </ModalTemplate>
  );
};

export default AddNewPostModal;
