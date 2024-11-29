import { TextProps } from 'react-native';
import styled from 'styled-components/native';

type StyledProps = {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
};

const StyledText = styled.Text<StyledProps>`
  font-family: ${({ weight }) => (weight ? `GeneralSans-${weight}` : 'GeneralSans-400')};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  opacity: ${({ opacity }) => opacity || 1};
`;

type Props = StyledProps & TextProps;

export function AppText(props: Props) {
  return <StyledText {...props} />;
}
