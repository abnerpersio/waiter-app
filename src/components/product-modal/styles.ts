import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ProductMainImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 32px 24px 0px;
`;

export const ProductHeader = styled.View`
  gap: 8px;
`;

export const IngredientsContainer = styled.View`
  flex: 1;
  margin-top: 32px;
  gap: 16px;
`;

export const IngredientContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.5);
`;

export const FooterContent = styled.View`
  flex-direction: column;
  gap: 16px;
`;

export const styles = StyleSheet.create({
  ingredientsList: {
    gap: 4,
    paddingBottom: 24,
  },
});
