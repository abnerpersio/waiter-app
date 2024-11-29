import React from 'react';
import { Modal as RNModal, TouchableOpacity } from 'react-native';
import { IS_ANDROID } from '../../config/constants';
import { CloseIcon } from '../icons/close';
import { AppText } from '../text';
import { ModalContainer, ModalHeader, Overlay } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: Props) {
  const { visible, onClose, children } = props;

  return (
    <RNModal visible={visible} transparent onRequestClose={onClose} animationType="fade">
      <Overlay behavior={IS_ANDROID ? 'height' : 'padding'}>
        <ModalContainer>
          <ModalHeader>
            <AppText weight="600">Informe a mesa</AppText>

            <TouchableOpacity onPress={onClose} hitSlop={10}>
              <CloseIcon color="#000" />
            </TouchableOpacity>
          </ModalHeader>

          {children}
        </ModalContainer>
      </Overlay>
    </RNModal>
  );
}
