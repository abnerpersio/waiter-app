import { StyleSheet } from 'react-native';
import { IS_IOS } from '../../config/constants';

export const COLORS = {
  default: {
    background: '#D73035',
    ripple: '#eb2f35',
    text: '#fff',
  },
  white: {
    background: '#fff',
    ripple: '#f0f0f0',
    text: '#D73035',
  },
};

export const styles = StyleSheet.create({
  buttonWrapper: {
    overflow: 'hidden',
    borderRadius: 48,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ['button-default']: {
    backgroundColor: COLORS.default.background,
  },
  ['button-white']: {
    backgroundColor: COLORS.white.background,
  },
  buttonActive: {
    opacity: IS_IOS ? 0.7 : 1,
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
});
