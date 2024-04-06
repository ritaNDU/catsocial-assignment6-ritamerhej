import {View} from 'react-native';
import React from 'react';
import AddNewPostModal from '../components/templates/Modals/AddNewPostModal';
import useManageModal from '../hooks/useManageModal';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';

const Profile = () => {
  const {closeModal, openModal, visible} = useManageModal();

  return (
    <View>
      <NavigationButton name="Add new Meow" onPress={openModal} />
      <AddNewPostModal isVisible={visible} handleClose={closeModal} />
    </View>
  );
};

export default Profile;
