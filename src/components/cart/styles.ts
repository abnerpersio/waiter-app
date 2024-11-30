import { StyleSheet } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Item = styled.View`
  flex: 1;
  padding: 8px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ProductImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
`;

export const ProductDetails = styled.View`
  gap: 4px;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  gap: 24px;
`;

type SummayProps = {
  fullHeight?: boolean;
};

export const Summary = styled.View<SummayProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      flex: 1;
    `}
`;

export const TotalContainer = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  cartList: {
    marginBottom: 20,
    maxHeight: 152,
  },
});
