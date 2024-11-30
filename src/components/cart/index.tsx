import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/cart';
import { CurrencyUtils } from '../../utils/currency';
import { ImageUtils } from '../../utils/image';
import { Button } from '../button';
import { MinusCircleIcon } from '../icons/minus-circle';
import { PlusCircleIcon } from '../icons/plus-circle';
import { AppText } from '../text';
import {
  Item,
  ProductActions,
  ProductContainer,
  ProductDetails,
  ProductImage,
  QuantityContainer,
  Summary,
  TotalContainer,
  styles,
} from './styles';

type Props = {
  selectedTable: string | null;
  cartItems: CartItem[];
  isLoading?: boolean;
  onIncrementProduct: (productId: string) => void;
  onDecrementProduct: (productId: string) => void;
  onConfirmOrder: () => void;
};

export function Cart(props: Props) {
  const { cartItems, onIncrementProduct, onDecrementProduct, onConfirmOrder, isLoading } = props;

  const totalPrice = cartItems.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0,
  );

  return (
    <>
      {!!cartItems.length && (
        <FlatList
          data={cartItems}
          style={styles.cartList}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: cartItem }) => {
            const { product, quantity } = cartItem;

            return (
              <Item>
                <ProductContainer>
                  <ProductImage
                    source={{
                      uri: ImageUtils.getURI(product.imagePath),
                    }}
                  />

                  <QuantityContainer>
                    <AppText size={14} color="#666">
                      {quantity}x
                    </AppText>
                  </QuantityContainer>

                  <ProductDetails>
                    <AppText size={14} weight="600">
                      {product.name}
                    </AppText>

                    <AppText size={14} color="#666">
                      {CurrencyUtils.format(product.price)}
                    </AppText>
                  </ProductDetails>
                </ProductContainer>

                <ProductActions>
                  <TouchableOpacity hitSlop={10} onPress={() => onIncrementProduct(product._id)}>
                    <PlusCircleIcon />
                  </TouchableOpacity>

                  <TouchableOpacity hitSlop={10} onPress={() => onDecrementProduct(product._id)}>
                    <MinusCircleIcon />
                  </TouchableOpacity>
                </ProductActions>
              </Item>
            );
          }}
        />
      )}

      <Summary fullHeight={!cartItems.length}>
        <TotalContainer>
          {!!cartItems.length && (
            <>
              <AppText color="#666">Total</AppText>

              <AppText size={20} weight="600">
                {CurrencyUtils.format(totalPrice)}
              </AppText>
            </>
          )}

          {!cartItems.length && (
            <AppText size={14} color="#999">
              Seu carrinho está vazio
            </AppText>
          )}
        </TotalContainer>

        <Button disabled={!cartItems.length} loading={isLoading} onPress={onConfirmOrder}>
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
