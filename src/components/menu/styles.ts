import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 30px;
  margin-top: 24px;
`;

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  gap: 8px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 24px 0px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const styles = StyleSheet.create({
  productListContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
