import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { IS_ANDROID } from '../../config/constants';

export const Container = styled.View`
  height: 72px;
  margin-top: 24px;
`;

export const CategoryContainer = styled.TouchableOpacity`
  gap: 8px;
  align-items: center;
  padding: 0px 8px;
`;

export const IconContainer = styled.View`
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${IS_ANDROID ? 1 : 0.1});
  elevation: 2;
`;

export const styles = StyleSheet.create({
  categoriesContainer: {
    gap: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
