import { StyleSheet } from 'react-native';
import { IS_IOS } from '../../config/constants';

export const styles = StyleSheet.create({
  buttonWrapper: {
    overflow: 'hidden',
    borderRadius: 48,
  },
  button: {
    backgroundColor: '#D73035',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    opacity: IS_IOS ? 0.7 : 1,
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
});
