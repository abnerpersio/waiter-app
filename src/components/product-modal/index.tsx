import { FlatList, Modal as RNModal, View } from 'react-native';
import { Product } from '../../types/product';
import { CurrencyUtils } from '../../utils/currency';
import { ImageUtils } from '../../utils/image';
import { Button } from '../button';
import { Footer } from '../footer';
import { CloseIcon } from '../icons/close';
import { AppText } from '../text';
import {
  CloseButton,
  FooterContent,
  IngredientContainer,
  IngredientsContainer,
  ModalContainer,
  ProductHeader,
  ProductMainImage,
  styles,
} from './styles';

type Props = {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
};

export function ProductModal(props: Props) {
  const { product, onClose, onAddToCart } = props;

  const handleAddToCart = () => {
    onAddToCart(product!);
    onClose();
  };

  if (!product) {
    return null;
  }

  return (
    <RNModal
      visible={!!product}
      onRequestClose={onClose}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <ProductMainImage
        source={{
          uri: ImageUtils.getURI(product.imagePath),
        }}
      >
        <CloseButton onPress={onClose}>
          <CloseIcon />
        </CloseButton>
      </ProductMainImage>

      <ModalContainer>
        <ProductHeader>
          <AppText size={24} weight="600">
            {product.name}
          </AppText>

          <AppText color="#666">{product.description}</AppText>
        </ProductHeader>

        {!!product.ingredients.length && (
          <IngredientsContainer>
            <AppText weight="600" color="#666">
              Ingredientes
            </AppText>

            <FlatList
              data={product.ingredients}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.ingredientsList}
              keyExtractor={(ingredient) => ingredient._id}
              renderItem={({ item: ingredient }) => (
                <IngredientContainer>
                  <AppText>{ingredient.icon}</AppText>

                  <AppText size={14} color="#666">
                    {ingredient.name}
                  </AppText>
                </IngredientContainer>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalContainer>

      <Footer>
        <FooterContent>
          <View>
            <AppText color="#666">Preço</AppText>

            <AppText size={20} weight="600">
              {CurrencyUtils.format(product.price)}
            </AppText>
          </View>

          <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
        </FooterContent>
      </Footer>
    </RNModal>
  );
}
