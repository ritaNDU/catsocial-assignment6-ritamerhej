import {View} from 'react-native';
import React from 'react';
import AddNewPostModal from '../components/templates/Modals/AddNewPostModal';

const Profile = () => {
  const handleClose = () => console.log('Pressed handleClose');
  const handleTakeAPhoto = () => console.log('Pressed handleTakeAPhoto');
  const handlePickAnImage = () => console.log('Pressed handlePickAnImage');
  const handleChangeText = () => console.log('Pressed handleChangeText');
  return (
    <View>
      <AddNewPostModal
        textValue="New Post"
        isVisible={true}
        handleClose={handleClose}
        handleTakeAPhoto={handleTakeAPhoto}
        handlePickAnImage={handlePickAnImage}
        handleChangeText={handleChangeText}
      />
    </View>
  );
};

export default Profile;
