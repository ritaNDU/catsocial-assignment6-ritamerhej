import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useRef} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import styles from './CameraModalstyles';
import NavigationButton from '../../../atoms/Buttons/NavigationButton';
import TakePhotoButton from '../../../atoms/Buttons/TakePhotoButton';
import useManagePermissions from '../../../../hooks/useManagePermissions';
import ModalTemplate from '../ModalTemplate';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  handleAddImage: (imageUri: string) => void;
};

const CameraModal = ({handleClose, isVisible, handleAddImage}: Props) => {
  const {hasPermission, handleCameraPermission} = useManagePermissions();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);

  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto();
    saveImage(`file://${photo!.path}`);
  };

  const saveImage = async (imageUri: string) => {
    await CameraRoll.saveAsset(imageUri, {type: 'photo'}).then(() => {
      Alert.alert('Success', 'Photo saved successfully');
    });
    handleAddImage(imageUri);
    handleClose();
  };

  if (device === null) {
    return (
      <ModalTemplate isVisible={isVisible} handleClose={handleClose}>
        <View style={styles.deviceNotSupportedContainer}>
          <Text style={styles.deviceNotSupportedText}>
            Camera feature not supported
          </Text>
        </View>
      </ModalTemplate>
    );
  }
  return (
    <ModalTemplate isVisible={isVisible} handleClose={handleClose}>
      <View style={styles.cameraContainer}>
        {hasPermission ? (
          <>
            <Camera
              photo
              ref={camera}
              style={[StyleSheet.absoluteFill, styles.camera]}
              device={device!}
              isActive={true}
            />
            <View style={styles.buttonContainer}>
              <TakePhotoButton onPress={takePhoto} />
            </View>
          </>
        ) : (
          <View style={styles.permissionButtonContainer}>
            <NavigationButton
              onPress={handleCameraPermission}
              name="Request Camera Access"
            />
          </View>
        )}
      </View>
    </ModalTemplate>
  );
};

export default CameraModal;
