import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Button } from '../../components/button';
import { Cart } from '../../components/cart';
import { Categories } from '../../components/categories';
import { CenteredContainer } from '../../components/centered-container';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { OrderConfirmedModal } from '../../components/order-confirmed-modal';
import { TableModal } from '../../components/table-modal';
import { useCategories } from '../../hooks/use-categories';
import { useConfirmOrder } from '../../hooks/use-confirm-order';
import { useOrder } from '../../hooks/use-order';
import { useProducts } from '../../hooks/use-products';
import { Product } from '../../types/product';
import { Container, NewOrderContainer } from './styles';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [isConfirmedModalVisible, setIsConfirmedModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const {
    selectedTable,
    cartItems,
    onAddToCart,
    onDecrementProduct,
    onIncrementProduct,
    onResetOrder,
    onSelectTable,
  } = useOrder();

  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { products, isLoading: isLoadingProducts } = useProducts({
    filters: {
      category: selectedCategory,
    },
  });

  const { mutate, isLoading: isCreating } = useConfirmOrder({
    onSucess: () => {
      setIsConfirmedModalVisible(true);
      onResetOrder();
    },
  });

  const isLoading = isLoadingProducts || isLoadingCategories;

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory((prevState) => (prevState === categoryId ? null : categoryId));
  };

  const handleSelectTable = (table: string) => {
    onSelectTable(table);
    setIsTableModalVisible(false);
  };

  const handleOpenTableModal = () => {
    setIsTableModalVisible(true);
  };

  const handleCloseTableModal = () => {
    setIsTableModalVisible(false);
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);

    // TODO: not working when comes from product modal
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }
  };

  const handleCloseConfirmedModal = () => {
    setIsConfirmedModalVisible(false);
  };

  const handleConfirmOrder = () => {
    mutate({
      table: selectedTable!,
      products: cartItems.map(({ product, quantity }) => ({
        product: product._id,
        quantity,
      })),
    });
  };

  return (
    <>
      <TableModal
        visible={isTableModalVisible}
        onClose={handleCloseTableModal}
        onSave={handleSelectTable}
      />

      <OrderConfirmedModal visible={isConfirmedModalVisible} onClose={handleCloseConfirmedModal} />

      <Container>
        <StatusBar style="dark" backgroundColor="#fafafa" />

        <Header selectedTable={selectedTable} onCancelOrder={onResetOrder} />

        {!isLoadingCategories && (
          <Categories
            categories={categories}
            disabled={isLoadingProducts}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {(isLoadingProducts || isLoadingCategories) && (
          // TODO: skeleton loading
          <CenteredContainer>
            <ActivityIndicator size="large" color="#D73035" />
          </CenteredContainer>
        )}

        {!isLoadingProducts && !isLoadingCategories && (
          <Menu products={products} onAddToCart={handleAddToCart} />
        )}

        <Footer>
          {!selectedTable && (
            <NewOrderContainer>
              <Button disabled={isLoading} onPress={handleOpenTableModal}>
                Novo Pedido
              </Button>
            </NewOrderContainer>
          )}

          {!!selectedTable && (
            <Cart
              selectedTable={selectedTable}
              cartItems={cartItems}
              isLoading={isCreating}
              onIncrementProduct={onIncrementProduct}
              onDecrementProduct={onDecrementProduct}
              onConfirmOrder={handleConfirmOrder}
            />
          )}
        </Footer>
      </Container>
    </>
  );
}
