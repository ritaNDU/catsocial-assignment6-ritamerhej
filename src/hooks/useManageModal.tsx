import {useState} from 'react';

const useManageModal = () => {
  const [visible, setVisible] = useState(false);

  function closeModal() {
    setVisible(false);
  }
  function openModal() {
    setVisible(true);
  }

  return {closeModal, openModal, visible};
};

export default useManageModal;
