import {Modal, View} from 'react-native';
import React from 'react';
import styles from './styles/TemplateModal.styles';
import NavigationButton from '../../atoms/Buttons/NavigationButton';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  children: React.JSX.Element;
};

const ModalTemplate = ({isVisible, handleClose, children}: Props) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalTemplate}>
        <NavigationButton
          name="Close"
          onPress={handleClose}
          styleProp={styles.close}
        />
        {children}
      </View>
    </Modal>
  );
};

export default ModalTemplate;
