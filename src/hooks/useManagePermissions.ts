import {Alert, Linking} from 'react-native';
import Permissions from 'react-native-permissions';
import {useCameraPermission} from 'react-native-vision-camera';
import STORAGE_PERMISSIONS from '../data/storagePermissions';

const useManagePermissions = () => {
  const {requestPermission, hasPermission} = useCameraPermission();

  const handleCameraPermission = async () => {
    const isAccessGranted = await requestPermission();

    if (!isAccessGranted) {
      Alert.alert('Permission required', 'Open settings to grant permission', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open settings',
          style: 'default',
          onPress: async () => {
            await Linking.openSettings();
          },
        },
      ]);
      return;
    }
  };

  async function askStoragePermissions(
    permission:
      | STORAGE_PERMISSIONS.READ_PERMISSION
      | STORAGE_PERMISSIONS.WRITE_PERMISSION,
  ) {
    const result = await Permissions.check(permission);

    if (result === 'blocked' || result === 'denied') {
      const granted = await Permissions.request(permission);
      if (granted === 'granted') {
        return true;
      }
    } else if (result === 'granted') {
      return true;
    } else {
      return false;
    }
  }

  return {
    hasPermission,
    handleCameraPermission,
    askStoragePermissions,
  };
};

export default useManagePermissions;
