import { StatusBar } from 'expo-status-bar';
import { Modal as RNModal } from 'react-native';
import { Button } from '../button';
import { CheckCircleIcon } from '../icons/check-circle';
import { AppText } from '../text';
import { Container, TextContainer } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function OrderConfirmedModal(props: Props) {
  const { visible, onClose } = props;

  return (
    <RNModal visible={visible} onRequestClose={onClose} animationType="fade">
      <StatusBar style="light" backgroundColor="#d73035" />

      <Container>
        <CheckCircleIcon />

        <TextContainer>
          <AppText size={20} weight="600" color="#fff">
            Pedido confirmado
          </AppText>

          <AppText opacity={0.9} color="#fff">
            O pedido já entrou na fila de produção!
          </AppText>
        </TextContainer>

        <Button color="white" onPress={onClose}>
          Ok
        </Button>
      </Container>
    </RNModal>
  );
}
