import React from 'react';
import { ViewProps } from 'react-native';
import { Container } from './styles';

type Props = ViewProps & {
  children: React.ReactNode;
};

export function Footer(props: Props) {
  const { children, ...restProps } = props;

  return <Container {...restProps}>{children}</Container>;
}
