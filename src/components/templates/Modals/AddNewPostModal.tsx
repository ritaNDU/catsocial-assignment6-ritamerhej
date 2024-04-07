import {View, Text, Alert, Linking} from 'react-native';
import React, {ChangeEvent} from 'react';
import ModalTemplate from './ModalTemplate';
import AddPostButtonGroup from '../../molecules/AddPostButtonGroup';
import FormInput from '../../atoms/Inputs/FormInput';
import CameraModal from './CameraModal/CameraModal';
import useManageModal from '../../../hooks/useManageModal';
import useManagePosts from '../../../hooks/useManagePosts';
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
  const {askStoragePermissions} = useManagePermissions();

  const handleChangeText = (text: string | ChangeEvent) => {
    const textToAdd = text as string;
    addTextToPost(textToAdd);
  };

  async function handlePickImage() {
    const hasReadStoragePermission = await askStoragePermissions(
      STORAGE_PERMISSIONS.READ_PERMISSION,
    );
    const hasWriteStoragePermission = await askStoragePermissions(
      STORAGE_PERMISSIONS.WRITE_PERMISSION,
    );
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };

    if (hasReadStoragePermission && hasWriteStoragePermission) {
      try {
        const result = await launchImageLibrary(options).catch(error =>
          console.log(error),
        );
        if (result && result.assets) {
          addImageToPost(result.assets[0].uri as string);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert(
        'To continue using this app, you should give it storage permissions.',
      );
      Linking.openSettings();
    }
  }

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
        <AddPostButtonGroup
          handleTakeAPhoto={openModal}
          handlePickAnImage={handlePickImage}
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
