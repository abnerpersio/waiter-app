import { useState } from 'react';
import { FlatList } from 'react-native';
import { Product } from '../../types/product';
import { CurrencyUtils } from '../../utils/currency';
import { ImageUtils } from '../../utils/image';
import { CenteredContainer } from '../centered-container';
import { EmptyIllustration } from '../icons/empty';
import { PlusCircleIcon } from '../icons/plus-circle';
import { ProductModal } from '../product-modal';
import { AppText } from '../text';
import {
  AddToCartButton,
  Container,
  ProductContainer,
  ProductDetails,
  ProductImage,
  Separator,
  styles,
} from './styles';

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export function Menu(props: Props) {
  const { products, onAddToCart } = props;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  if (!products.length) {
    return (
      <CenteredContainer>
        <EmptyIllustration />

        <AppText color="#666">Nenhum produto foi encontrado</AppText>
      </CenteredContainer>
    );
  }

  return (
    <Container>
      <FlatList
        data={products}
        contentContainerStyle={styles.productListContainer}
        ItemSeparatorComponent={Separator}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenProductModal(product)}>
            <ProductImage
              source={{
                uri: ImageUtils.getURI(product.imagePath),
              }}
            />

            <ProductDetails>
              <AppText weight="600">{product.name}</AppText>

              <AppText size={14} color="#666">
                {product.description}
              </AppText>

              <AppText size={14} weight="600">
                {CurrencyUtils.format(product.price)}
              </AppText>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircleIcon width={26} height={26} />
            </AddToCartButton>
          </ProductContainer>
        )}
      />

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onAddToCart={onAddToCart}
      />
    </Container>
  );
}
