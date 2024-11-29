import React from 'react';
import { Text as RNText, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { IS_IOS } from '../../../config/constants';

type Props = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function IOSNativeButton(props: Props) {
  const { children, ...restProps } = props;

  if (!IS_IOS) {
    return null;
  }

  return (
    <TouchableOpacity {...restProps} hitSlop={10}>
      <RNText style={styles.buttonText}>{children}</RNText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#007AFF',
  },
});
