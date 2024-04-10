import {Text, Alert, Linking, Image, ScrollView} from 'react-native';
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
import styles from './styles/AddNewPostModal.styles';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
};

const AddNewPostModal = ({handleClose, isVisible}: Props) => {
  const {openModal, closeModal, visible} = useManageModal();
  const {post, addPost, addImageToPost, addTextToPost, clearPost} =
    useManagePosts();
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
  const handleCloseModal = () => {
    clearPost();
    handleClose();
  };
  const addNewPost = () => {
    addPost();
    clearPost();
  };

  return (
    <ModalTemplate handleClose={handleCloseModal} isVisible={isVisible}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Add a new Meow</Text>
        <FormInput
          placeholder="Say something..."
          handleChangeText={handleChangeText}
          value={post.text}
        />
        <AddPostButtonGroup
          handleTakeAPhoto={openModal}
          handlePickAnImage={handlePickImage}
        />
        {post.imageUri !== '' && (
          <Image source={{uri: post.imageUri}} style={styles.image} />
        )}
        <NavigationButton
          name="Create Meow"
          onPress={addNewPost}
          styleProp={styles.create}
        />
        <CameraModal
          handleClose={closeModal}
          isVisible={visible}
          handleAddImage={addImageToPost}
        />
      </ScrollView>
    </ModalTemplate>
  );
};

export default AddNewPostModal;
