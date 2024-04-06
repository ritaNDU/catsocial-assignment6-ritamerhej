import {View} from 'react-native';
import React from 'react';
import AddNewPostModal from '../components/templates/Modals/AddNewPostModal';
import useManageModal from '../hooks/useManageModal';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';

const Profile = () => {
  const {closeModal, openModal, visible} = useManageModal();
  const handleTakeAPhoto = () => console.log('Pressed handleTakeAPhoto');
  const handlePickAnImage = () => console.log('Pressed handlePickAnImage');
  const handleChangeText = () => console.log('Pressed handleChangeText');

  return (
    <View>
      <NavigationButton name="Add new Meow" onPress={openModal} />
      <AddNewPostModal
        textValue="New Post"
        isVisible={visible}
        handleClose={closeModal}
        handleTakeAPhoto={handleTakeAPhoto}
        handlePickAnImage={handlePickAnImage}
        handleChangeText={handleChangeText}
      />
    </View>
  );
};

export default Profile;
