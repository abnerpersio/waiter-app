import { TouchableOpacity } from 'react-native';
import { AppText } from '../text';
import { Container, OrderDetails, OrderHeader, Table } from './styles';

type Props = {
  selectedTable: string | null;
  onCancelOrder: () => void;
};

export function Header(props: Props) {
  const { selectedTable, onCancelOrder } = props;

  return (
    <Container>
      {selectedTable && (
        <OrderDetails>
          <OrderHeader>
            <AppText size={24} weight="600">
              Pedido
            </AppText>

            <TouchableOpacity hitSlop={10} onPress={onCancelOrder}>
              <AppText color="#D73035" weight="600" size={14}>
                cancelar pedido
              </AppText>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <AppText color="#666">Mesa {selectedTable}</AppText>
          </Table>
        </OrderDetails>
      )}

      {!selectedTable && (
        <>
          <AppText size={14} opacity={0.9}>
            Bem vindo ao
          </AppText>

          <AppText size={24}>
            WAITER
            <AppText size={24} weight="600">
              APP
            </AppText>
          </AppText>
        </>
      )}
    </Container>
  );
}
