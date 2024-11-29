import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
`;

export const ModalContainer = styled.View`
  background-color: #fafafa;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  gap: 32px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
