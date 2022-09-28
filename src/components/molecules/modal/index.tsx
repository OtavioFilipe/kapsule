import React from 'react';
import {Image} from 'react-native';
import Button from '../../atoms/button';

import * as Component from './styles';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible(val: boolean): void;
}

const Modal: React.FC<ModalProps> = ({modalVisible, setModalVisible}) => {
  function handleCloseModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <Component.Container>
      <Component.ModalComponent
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <Component.ContainerInsideModal>
          <Component.CloseModal onPress={handleCloseModal}>
            <Image source={require('../../../assets/icons/x.png')} />
          </Component.CloseModal>
          <Image source={require('../../../assets/illustrations/cart.png')} />
          <Component.LabelModal>
            You've already added "Name of product" to your basket. Do you want
            to remove it ?
          </Component.LabelModal>
          <Component.ButtonsModal>
            <Button
              text="Yes"
              style={{height: 44, marginRight: 8}}
              onPress={handleCloseModal}
            />
            <Button
              text="No keep it"
              bgColor="#E6E7EC"
              style={{height: 44}}
              onPress={handleCloseModal}
            />
          </Component.ButtonsModal>
        </Component.ContainerInsideModal>
      </Component.ModalComponent>
    </Component.Container>
  );
};

export default Modal;
