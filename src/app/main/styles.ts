import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { IS_ANDROID } from '../../config/constants';

export const Container = styled.SafeAreaView`
  margin-top: ${IS_ANDROID ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa;
`;

export const NewOrderContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
